/* PCCN inline lecture player. Slots: <div class="video-slot" data-video="v05">.
   Link source: Admin → Settings video links (Firestore config/videos, by slot order) override pccn-videos.js.
   Watched = YouTube ENDED or ≥90 % played; Google Drive = open ≥60 s on a visible page.
   A watched video pushes its id (v05) into the module steps via the 'pccn:step' event. */
(function(){
  window.PCCN_VIDEO_INLINE = true;
  var modNo = (location.pathname.match(/Module(\d\d)/) || [0, ''])[1];
  var stepsKey = 'pccn_mod' + modNo + '_steps';
  var st = document.createElement('style');
  st.textContent = '.video-slot.pv-ready{cursor:pointer;}.video-slot.pv-soon{cursor:default;opacity:.85;}' +
    '.pv-wrap{margin:14px 0;}.pv-title{display:flex;align-items:center;gap:10px;font-weight:700;color:var(--purple-900,#2C0E4F);margin:0 0 8px;font-size:15px;}' +
    '.pv-frame{position:relative;width:100%;padding-top:56.25%;border-radius:var(--radius,12px);background:var(--purple-900,#2C0E4F);overflow:hidden;}' +
    '.pv-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}' +
    '.pv-chip{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:999px;background:#E3F5EE;color:#0F6B52;font-size:11.5px;font-weight:700;letter-spacing:.02em;}';
  document.head.appendChild(st);

  function steps(){ try { return window.PCCN_STEPS ? PCCN_STEPS() : JSON.parse(localStorage.getItem(stepsKey) || '[]'); } catch(e) { return []; } }
  function watched(id){ return steps().indexOf(id) !== -1; }
  function mark(id, el){
    if (watched(id)) return;
    document.dispatchEvent(new CustomEvent('pccn:step', { detail: { id: id } }));
    if (!window.PCCN_STEPS) { try { var s = steps(); s.push(id); localStorage.setItem(stepsKey, JSON.stringify(s)); } catch(e) {} }
    chip(el);
  }
  function chip(el){
    if (!el || el.querySelector('.pv-chip')) return;
    var c = document.createElement('span'); c.className = 'pv-chip'; c.textContent = '✓ Watched';
    var t = el.querySelector('.pv-title') || el.querySelector('.video-meta'); if (t) t.appendChild(c);
  }
  function parse(v){
    if (!v) return null;
    if (typeof v === 'string') v = { url: v };
    if (v.yt) return { yt: v.yt };
    if (v.drive) return { drive: v.drive };
    var u = v.url || '', m;
    if ((m = u.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{6,})/))) return { yt: m[1] };
    if ((m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]{10,})/))) return { drive: m[1] };
    if (/^https?:\/\//.test(u)) return { url: u };
    return null;
  }
  var ytQ = [], ytReady = false;
  function ytApi(cb){
    if (ytReady) return cb(); ytQ.push(cb);
    if (ytQ.length > 1) return;
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function(){ ytReady = true; if (prev) try { prev(); } catch(e) {} ytQ.splice(0).forEach(function(f){ f(); }); };
    var s = document.createElement('script'); s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s);
  }
  function open(slot, id, link){
    var title = (slot.querySelector('.video-meta b') || {}).textContent || 'Lecture video';
    var w = document.createElement('div'); w.className = 'pv-wrap'; w.setAttribute('data-video', id);
    w.innerHTML = '<div class="pv-title"><span>' + title.replace(/^Watch:\s*/, '').replace(/[<>&]/g, '') + '</span></div><div class="pv-frame"></div>';
    slot.parentNode.replaceChild(w, slot);
    var fr = w.querySelector('.pv-frame'), ifr = document.createElement('iframe');
    ifr.setAttribute('allow', 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen'); ifr.setAttribute('allowfullscreen', '');
    if (watched(id)) chip(w);
    if (link.yt) {
      ifr.id = 'pv-' + id;
      ifr.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(link.yt) + '?rel=0&modestbranding=1&enablejsapi=1&playsinline=1&origin=' + encodeURIComponent(location.origin);
      fr.appendChild(ifr);
      ytApi(function(){
        try {
          var p = new YT.Player(ifr.id, { events: { onStateChange: function(e){ if (e.data === 0) mark(id, w); } } });
          var t = setInterval(function(){ try { var d = p.getDuration(), c = p.getCurrentTime(); if (d > 0 && c / d >= 0.9) { mark(id, w); clearInterval(t); } } catch(e) {} }, 5000);
        } catch(e) {}
      });
    } else {
      ifr.src = link.drive ? 'https://drive.google.com/file/d/' + encodeURIComponent(link.drive) + '/preview' : link.url;
      fr.appendChild(ifr);
      var secs = 0, t2 = setInterval(function(){ if (document.visibilityState === 'visible') secs += 5; if (secs >= 60) { mark(id, w); clearInterval(t2); } }, 5000);
    }
  }
  function wire(){
    var cfg = (window.PCCN_GATE && PCCN_GATE.videos && PCCN_GATE.videos()) || {};
    var adminList = cfg[modNo] || [];
    var order = (window.PCCN_VIDEO_MODULES || {})[modNo] || [];
    document.querySelectorAll('.video-slot[data-video]').forEach(function(slot){
      if (slot.getAttribute('data-wired')) return; slot.setAttribute('data-wired', '1');
      var id = slot.getAttribute('data-video'), idx = order.indexOf(id);
      var link = parse(idx !== -1 && adminList[idx]) || parse((window.PCCN_VIDEOS || {})[id]);
      var meta = slot.querySelector('.video-meta span');
      if (watched(id)) chip(slot);
      if (!link) { slot.classList.add('pv-soon'); if (meta) meta.textContent = meta.textContent.replace(/·.*$/, '').trim() + ' · Coming soon'; return; }
      slot.classList.add('pv-ready'); slot.setAttribute('role', 'button'); slot.setAttribute('tabindex', '0'); slot.title = 'Play the video here';
      if (meta) meta.textContent = meta.textContent.replace(/·.*$/, '').trim() + ' · Available now';
      var go = function(){ open(slot, id, link); };
      slot.addEventListener('click', go);
      slot.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }
  function start(){ if (window.PCCN_GATE && PCCN_GATE.ready) PCCN_GATE.ready.then(wire, wire); else wire(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
