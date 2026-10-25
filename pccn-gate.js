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
    if (window.PCCN_VIDEO_INLINE) return;
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
      if (document.querySelector('a.pccn-director-link')) return;
      var area = document.getElementById('navAuthArea') || document.querySelector('.pccn-nav-actions'); if (!area) return;
      var a = document.createElement('a'); a.href = 'PCCN_Competency_Results.html'; a.textContent = 'Verify competencies'; a.className = 'pccn-director-link';
      a.style.cssText = 'padding:8px 14px;border-radius:999px;font-size:.85rem;font-weight:700;color:#fff;background:#0F7159;text-decoration:none;white-space:nowrap;'; area.insertBefore(a, area.firstChild); navFit();
    }).catch(function(){});
    if (user.email) db.collection('faculty').doc(emailKey(user.email)).get().then(function(d){
      if (!d.exists || document.querySelector('a.pccn-faculty-link')) return;
      var area = document.getElementById('navAuthArea') || document.querySelector('.pccn-nav-actions'); if (!area) return;
      var a = document.createElement('a'); a.href = 'PCCN_Faculty_Portal.html'; a.textContent = 'Faculty area'; a.className = 'pccn-faculty-link';
      a.style.cssText = 'padding:8px 14px;border-radius:999px;font-size:.85rem;font-weight:700;color:#fff;background:#D6246E;text-decoration:none;white-space:nowrap;'; area.insertBefore(a, area.firstChild); navFit();
    }).catch(function(){});
    db.collection('admins').doc(user.uid).get().then(function(d){
      if (!d.exists) return;
      if (document.querySelector('a[href="PCCN_Admin.html"].pccn-admin-link')) return;
      /* pinned beside the account name so it never scrolls out of view on narrow screens */
      var area = document.getElementById('navAuthArea') || document.querySelector('.pccn-nav-actions') || document.querySelector('.pccn-nav-links'); if (!area) return;
      var a = document.createElement('a'); a.href = 'PCCN_Admin.html'; a.textContent = 'Admin'; a.className = 'pccn-admin-link' + (/PCCN_Admin/.test(location.pathname) ? ' active' : '');
      a.style.cssText = 'padding:8px 14px;border-radius:999px;font-size:.85rem;font-weight:700;color:#fff;background:#4A1A73;text-decoration:none;white-space:nowrap;';
      area.insertBefore(a, area.firstChild);
      window.PCCN_IS_ADMIN = true; navFit();
    }).catch(function(){});
  }


  /* nav: when the links don't fit beside the account buttons, fold them into a Menu dropdown instead of clipping */
  function navFit(){
    document.querySelectorAll('.pccn-nav').forEach(function(nav){
      var links = nav.querySelector('.pccn-nav-links'); if (!links) return;
      var btn = nav.querySelector('.pccn-menu-btn');
      if (!btn) {
        btn = document.createElement('button'); btn.type = 'button'; btn.className = 'pccn-menu-btn'; btn.innerHTML = 'Menu &#9662;';
        btn.addEventListener('click', function(e){ e.stopPropagation(); nav.classList.toggle('pccn-menu-open'); });
        links.parentNode.insertBefore(btn, links);
        document.addEventListener('click', function(){ nav.classList.remove('pccn-menu-open'); });
      }
      nav.classList.remove('pccn-nav-compact', 'pccn-menu-open');
      if (getComputedStyle(links).display === 'none') return;          /* page's own mobile hamburger is active */
      if (links.scrollWidth > links.clientWidth + 2) nav.classList.add('pccn-nav-compact');
    });
  }
  (function(){
    var st = document.createElement('style');
    st.textContent = '.pccn-menu-btn{display:none;}' +
      '.pccn-nav-compact .pccn-menu-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:inherit;font:600 .9rem Poppins,-apple-system,sans-serif;cursor:pointer;margin-right:auto;}' +
      '.pccn-nav:not(.dark).pccn-nav-compact .pccn-menu-btn{border-color:#D8C2E0;color:#1F0938;}' +
      '.pccn-nav.dark.pccn-nav-compact .pccn-menu-btn{color:#fff;}' +
      '.pccn-nav-compact .pccn-nav-inner{position:relative;}' +
      '.pccn-nav-compact .pccn-nav-links{position:absolute;top:100%;left:0;min-width:240px;flex-direction:column;align-items:stretch;padding:8px;border-radius:0 0 14px 14px;box-shadow:0 16px 28px rgba(44,14,79,.22);background:#fff;visibility:hidden;opacity:0;z-index:60;flex:none;overflow:visible;}' +
      '.pccn-nav.dark.pccn-nav-compact .pccn-nav-links{background:#2C0E4F;}.pccn-nav.dark.pccn-nav-compact .pccn-nav-links a{color:#fff;}' +
      '.pccn-nav-compact.pccn-menu-open .pccn-nav-links{visibility:visible;opacity:1;}' +
      '.pccn-nav-compact .pccn-nav-links a{padding:12px 14px;font-size:.95rem;}';
    document.head.appendChild(st);
    var t; window.addEventListener('resize', function(){ clearTimeout(t); t = setTimeout(navFit, 120); });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', navFit); else navFit();
    window.addEventListener('load', navFit);
  })();
  window.PCCN_NAVFIT = navFit;

  window.PCCN_GATE = { site: function(){ return site; }, videos: function(){ return videos; }, ready: null, emailKey: emailKey };
  PCCN_GATE.ready = readConfig().then(function(){
    wireVideos();
    if (window.PCCN_AUTH) PCCN_AUTH.onChange(function(u){ gate(u); adminNav(u); });
    document.dispatchEvent(new CustomEvent('pccn:config', { detail: { site: site, videos: videos } }));
  });
})();
