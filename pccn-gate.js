/* PCCN portal: site settings, enrolment gate, video links, admin nav link.
   Include after pccn-auth.js on module pages and My Courses. Reads Firestore:
     config/site    { enrolmentRequired, courseStart, regDeadline, announcement }
     config/videos  { "01": ["url", ...], "02": [...], ... }   one entry per video slot, in page order
     enrolments/{email lowercase}  { name, mobile, fellow, fee, ref, addedAt }
     admins/{uid}
   Everything degrades silently when Firestore or auth is unavailable. */
(function(){
  var db = window.PCCN_AUTH && PCCN_AUTH.db();
  var site = null, videos = null;
  var modMatch = location.pathname.match(/Module(\d\d)/);
  var modNo = modMatch ? modMatch[1] : null;
  if (!modNo) { var q = new URLSearchParams(location.search).get('m'); if (q && /PCCN_Module\.html/.test(location.pathname)) modNo = String(q).padStart(2, '0'); }
  var emailKey = function(e){ return String(e || '').trim().toLowerCase(); };

  function readConfig(){
    if (!db) return Promise.resolve();
    return Promise.all([
      db.collection('config').doc('site').get().then(function(d){ site = d.exists ? d.data() : {}; }).catch(function(){ site = {}; }),
      db.collection('config').doc('videos').get().then(function(d){ videos = d.exists ? d.data() : {}; }).catch(function(){ videos = {}; })
    ]);
  }

  /* video slots: a saved link makes the placeholder open it in a new tab */
  function wireVideos(){
    if (!modNo || !videos || !videos[modNo]) return;
    var links = videos[modNo]; var slots = document.querySelectorAll('.video-slot');
    slots.forEach(function(s, i){
      var url = links[i]; if (!url || !/^https?:\/\//.test(url)) return;
      s.style.cursor = 'pointer'; s.setAttribute('role', 'link'); s.title = 'Opens the video';
      var meta = s.querySelector('.video-meta span'); if (meta && !/available/i.test(meta.textContent)) meta.textContent = meta.textContent.replace(/lifetime access/i, 'available now');
      s.addEventListener('click', function(){ window.open(url, '_blank', 'noopener'); });
    });
  }

  function lockPage(msg, cta){
    if (document.getElementById('pccnGate')) return;
    var o = document.createElement('div'); o.id = 'pccnGate';
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(31,9,56,.94);color:#fff;display:flex;align-items:center;justify-content:center;padding:24px;font-family:Poppins,-apple-system,sans-serif;';
    o.innerHTML = '<div style="max-width:520px;background:#fff;color:#1F0938;border-radius:18px;padding:34px 32px;text-align:left;"><div style="font-size:.74rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#D6246E;margin-bottom:10px;">PCCN Certificate Course</div><h2 style="margin:0 0 12px;font-size:1.5rem;">' + msg.title + '</h2><p style="color:#4A3B5C;line-height:1.6;margin:0 0 20px;">' + msg.body + '</p>' + cta + '</div>';
    document.body.appendChild(o); document.body.style.overflow = 'hidden';
  }

  function gate(user){
    if (!site || !site.enrolmentRequired || !modNo) return;
    if (!user) {
      var next = encodeURIComponent(location.pathname.split('/').pop() + location.search);
      lockPage({ title: 'Sign in to open this module', body: 'The PCCN modules are open to enrolled learners. Sign in with your course account, or register if you have enrolled and do not have an account yet.' },
        '<a href="PCCN_Login.html?next=' + next + '" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#D6246E;color:#fff;font-weight:700;text-decoration:none;margin-right:8px;">Log in</a><a href="PCCN_Register.html" style="display:inline-block;padding:12px 22px;border-radius:999px;border:1.5px solid #1F0938;color:#1F0938;font-weight:700;text-decoration:none;">Register</a>');
      return;
    }
    var key = emailKey(user.email);
    return db.collection('admins').doc(user.uid).get().then(function(a){ return a.exists ? { exists: true } : db.collection('enrolments').doc(key).get(); }).then(function(d){
      if (d.exists) return;
      lockPage({ title: 'Your enrolment is not on the list yet', body: 'Your account (' + (user.email || '') + ') is not yet on the PCCN enrolment list. If you have paid, write to stepin.iapicc@gmail.com with your name, mobile number and payment reference and it will be added within a day.' },
        '<a href="mailto:stepin.iapicc@gmail.com?subject=PCCN%20enrolment" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#D6246E;color:#fff;font-weight:700;text-decoration:none;margin-right:8px;">Email the course office</a><a href="PCCN_My_Courses.html" style="display:inline-block;padding:12px 22px;border-radius:999px;border:1.5px solid #1F0938;color:#1F0938;font-weight:700;text-decoration:none;">My Courses</a>');
    }).catch(function(e){ console.warn('enrolment check failed', e && e.code); });
  }

  /* "Admin" in the nav for admins; "Verify competencies" for hospital course directors */
  function adminNav(user){
    if (!user || !db) return;
    db.collection('users').doc(user.uid).get().then(function(d){
      var r = (d.exists && d.data().roles) || {}; if (!r.director) return;
      var links = document.querySelector('.pccn-nav-links'); if (!links || links.querySelector('a[href="PCCN_Competency_Results.html"]')) return;
      var a = document.createElement('a'); a.href = 'PCCN_Competency_Results.html'; a.textContent = 'Verify competencies'; links.appendChild(a);
    }).catch(function(){});
    db.collection('admins').doc(user.uid).get().then(function(d){
      if (!d.exists) return;
      var links = document.querySelector('.pccn-nav-links'); if (!links || links.querySelector('a[href="PCCN_Admin.html"]')) return;
      var a = document.createElement('a'); a.href = 'PCCN_Admin.html'; a.textContent = 'Admin'; if (/PCCN_Admin/.test(location.pathname)) a.className = 'active'; links.appendChild(a);
      window.PCCN_IS_ADMIN = true;
    }).catch(function(){});
  }

  window.PCCN_GATE = { site: function(){ return site; }, videos: function(){ return videos; }, ready: null, emailKey: emailKey };
  PCCN_GATE.ready = readConfig().then(function(){
    wireVideos();
    if (window.PCCN_AUTH) PCCN_AUTH.onChange(function(u){ gate(u); adminNav(u); });
    document.dispatchEvent(new CustomEvent('pccn:config', { detail: { site: site, videos: videos } }));
  });
})();
