/* PCCN virtual simulation — typed answers, live monitor, branching limbs.
   Usage on a module page:  <div class="pccn-sim" data-sims="s1,s2"></div>
   Needs: sims/<id>.json (case, decisions, options = Manju-approved limbs), sims/live/<id>.json (timed scenes per clip),
          sims/media/*.mp4 (clinical footage), optional sims/live/<id>/voice/<clip>.m4a (voice-over).
   At each decision the nurse types what she would do. The app's /simjudge endpoint (Claude) maps the answer to the
   nearest approved limb, asks one follow-up if it is too vague, and the case plays that limb. No right/wrong labels.
   If the judge is unavailable the options appear as buttons. Live-session mode adds a faculty override panel.
   Progress: localStorage pccn_sim_<id> and users/{uid}.progress.modNN.sim.<id>; all sims of a module done -> step 'sim'. */
(function(){
  var CSS = '' +
  '.psim-launch{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));}' +
  '.psim-card{background:#fff;border:1px solid #EEE4EC;border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:8px;}' +
  '.psim-card h3{margin:0;font-size:18px;color:#1F0938;}.psim-card p{margin:0;color:#5A4A68;font-size:14px;}' +
  '.psim-tag{align-self:flex-start;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:999px;background:#FBF1E4;color:#8A5410;}' +
  '.psim-done{font-size:12.5px;color:#0F6B52;font-weight:600;}' +
  '.psim-live-link{background:none;border:0;padding:6px 0 0;font:600 13px Poppins,sans-serif;color:#4A1A73;text-decoration:underline;cursor:pointer;text-align:left;}' +
  '.psim-btn{appearance:none;border:0;border-radius:999px;padding:12px 20px;font:700 14px Poppins,-apple-system,sans-serif;background:#D6246E;color:#fff;cursor:pointer;min-height:44px;}' +
  '.psim-btn.ghost{background:transparent;color:#1F0938;border:1.5px solid #1F0938;}.psim-btn[disabled]{opacity:.55;cursor:wait;}' +
  '.psim-ov{position:fixed;inset:0;z-index:99990;background:#FBF8FA;overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:Poppins,-apple-system,sans-serif;color:#1F0938;}' +
  '.psim-top{position:sticky;top:0;z-index:3;background:#1F0938;color:#fff;padding:10px 16px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;}' +
  '.psim-top b{font-size:15px;}.psim-top span{font-size:12px;color:#c9b9d4;}' +
  '.psim-tb{background:rgba(255,255,255,.12);color:#fff;border:0;border-radius:999px;padding:7px 12px;font:600 12.5px Poppins,sans-serif;cursor:pointer;}' +
  '.psim-tb.first{margin-left:auto;}' +
  '.psim-stage{max-width:1120px;margin:0 auto;padding:16px 16px 0;display:grid;gap:14px;grid-template-columns:minmax(0,1fr);}' +
  '.psim-stage.mon{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);}' +
  '.psim-monwrap{display:none;background:#06040A;border-radius:18px;border:3px solid #2a2433;overflow:hidden;opacity:0;transition:opacity .6s;}' +
  '.psim-stage.mon .psim-monwrap{display:block;}.psim-stage.mon.shown .psim-monwrap{opacity:1;}' +
  '.psim-cv{display:block;width:100%;height:360px;}' +
  '@media (max-width:860px){.psim-stage.mon{grid-template-columns:minmax(0,1fr);}.psim-stage.mon .psim-monwrap{order:-1;}.psim-cv{height:200px;}}' +
  '.psim-story{position:relative;background:#2C0E4F;color:#fff;border-radius:18px;min-height:300px;padding:24px 24px 22px;overflow:hidden;}' +
  '.psim-story .eb{font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F374B0;margin-bottom:12px;}' +
  '.psim-story h2{font-family:Fraunces,Georgia,serif;font-size:clamp(24px,3.4vw,38px);line-height:1.15;margin:0 0 10px;}' +
  '.psim-story .sub{font-size:17px;color:#E6D6F0;}' +
  '.psim-story .chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px;}.psim-story .chips span{background:rgba(255,255,255,.1);border-radius:999px;padding:6px 14px;font-size:14px;font-weight:600;}' +
  '.psim-story .txt{font-size:clamp(16px,2vw,20px);line-height:1.55;}' +
  '.psim-story .txt .s{color:rgba(255,255,255,.35);transition:color .4s;}.psim-story .txt .s.on{color:#fff;}' +
  '.psim-story.quote .wrap{border-left:5px solid #D4882A;padding-left:18px;}.psim-story.quote .txt{font-style:italic;}' +
  '.psim-story .who{font-size:12.5px;font-weight:700;color:#F0C27A;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;}' +
  '.psim-story.act{background:#fff;color:#1F0938;border:2px solid #1F0938;}.psim-story.act .eb{color:#D6246E;}.psim-story.act .txt{font-weight:600;color:#1F0938;}' +
  '.psim-story.dec{background:linear-gradient(140deg,#4A1A73,#2C0E4F);}.psim-story.dec h2{font-size:clamp(20px,2.6vw,28px);}' +
  '.psim-story.end{background:linear-gradient(140deg,#0F5A48,#13392F);}.psim-story.end .eb{color:#9BE8CF;}' +
  '.psim-story.foot{padding:0;background:#000;}.psim-story.foot video{display:block;width:100%;max-height:52vh;object-fit:contain;background:#000;}' +
  '.psim-story.foot .cap{padding:12px 16px;background:#160628;color:#fff;font-size:16px;line-height:1.5;min-height:52px;}' +
  '.psim-story.foot .lbl{position:absolute;left:12px;top:10px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;background:rgba(0,0,0,.55);padding:5px 10px;border-radius:999px;color:#ddd;}' +
  '.psim-skip{position:absolute;right:12px;bottom:10px;background:rgba(255,255,255,.14);color:#fff;border:0;border-radius:999px;padding:6px 12px;font:600 12px Poppins,sans-serif;cursor:pointer;z-index:2;}' +
  '.psim-story.act .psim-skip{background:#EEE4EC;color:#1F0938;}' +
  '.psim-ctrl{max-width:1120px;margin:10px auto 0;padding:0 16px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;}' +
  '.psim-ctrl button{min-width:44px;height:40px;padding:0 12px;border-radius:999px;border:1.5px solid #D8C2E0;background:#fff;color:#1F0938;font:700 14px Poppins,sans-serif;cursor:pointer;}' +
  '.psim-ctrl button:hover{border-color:#D6246E;}.psim-ctrl button.pp{background:#1F0938;color:#fff;border-color:#1F0938;min-width:56px;}' +
  '.psim-ctrl .tm{margin-left:auto;font:600 12.5px ui-monospace,Menlo,monospace;color:#6B5D82;}' +
  '.psim-body{max-width:1120px;margin:0 auto;padding:14px 16px 70px;}' +
  '.psim-ans{background:#fff;border:2px solid #1F0938;border-radius:16px;padding:16px;}' +
  '.psim-ans label{display:block;font-weight:700;font-size:15px;margin:0 0 4px;}.psim-ans .hint{font-size:13px;color:#6B5D82;margin:0 0 10px;}' +
  '.psim-ans .probe{background:#FBF1E4;border-left:4px solid #D4882A;border-radius:0 10px 10px 0;padding:10px 12px;margin:0 0 10px;font-size:15px;color:#5A3A10;}' +
  '.psim-ans textarea{width:100%;min-height:96px;border:1.5px solid #D8C2E0;border-radius:12px;padding:12px;font:500 15.5px/1.5 Poppins,-apple-system,sans-serif;color:#1F0938;resize:vertical;box-sizing:border-box;}' +
  '.psim-ans textarea:focus{outline:none;border-color:#D6246E;}' +
  '.psim-ans .row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:10px;}' +
  '.psim-ans .stat{font-size:13px;color:#6B5D82;}' +
  '.psim-opt{display:block;width:100%;text-align:left;background:#FBF8FA;border:1.5px solid #E2D6EA;border-radius:12px;padding:12px 14px;margin:0 0 8px;font:500 14.5px/1.45 Poppins,-apple-system,sans-serif;color:#1F0938;cursor:pointer;min-height:44px;}' +
  '.psim-opt:hover,.psim-opt:focus-visible{border-color:#D6246E;background:#fff;}' +
  '.psim-fac{margin-top:12px;border:1.5px dashed #D8C2E0;border-radius:12px;padding:10px 12px;background:#FBF8FA;}' +
  '.psim-fac summary{cursor:pointer;font-weight:700;font-size:13.5px;color:#4A1A73;}' +
  '.psim-fac .fo{display:flex;gap:8px;align-items:flex-start;margin:8px 0 0;font-size:13.5px;}.psim-fac .fo button{flex:none;}' +
  '.psim-fac .fo .star{color:#0F6B52;font-weight:800;}' +
  '.psim-note{font-size:13px;color:#6B5D82;margin:8px 0 0;}' +
  '.psim-end{background:#EBF8F4;border:1px solid #BFE6D8;border-radius:14px;padding:16px;}' +
  '.psim-db h3{font-size:18px;margin:26px 0 10px;}.psim-db ol,.psim-db ul{padding-left:20px;margin:0;}.psim-db li{margin:0 0 8px;font-size:14.5px;}' +
  '.psim-row{background:#fff;border:1px solid #EEE4EC;border-radius:14px;padding:14px;margin:0 0 10px;}.psim-row h5{margin:0 0 8px;font-size:14px;}' +
  '.psim-row .pa{font-size:13.5px;color:#4A3B5C;margin:0 0 6px;padding-left:12px;border-left:3px solid #E2D6EA;}.psim-row .pa q{font-style:italic;color:#1F0938;}' +
  '.psim-row .tp{font-size:13.5px;background:#F4EEF7;border-radius:10px;padding:10px 12px;margin-top:8px;}.psim-refs{font-size:12.5px;color:#6A5A78;}';

  var modNo = (location.pathname.match(/Module(\d\d)/) || [0, '00'])[1];
  var BYMOD = { '01': ['s1', 's2'], '02': ['s3'], '03': ['s4'] };
  var cache = {}, liveCache = {};
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function getJSON(u){ return fetch(u, { cache: 'no-cache' }).then(function(r){ if (!r.ok) throw new Error(r.status); return r.json(); }); }
  function load(id){ return cache[id] || (cache[id] = getJSON('sims/' + id + '.json')); }
  function loadLive(id){ return liveCache[id] || (liveCache[id] = getJSON('sims/live/' + id + '.json')); }
  function saved(id){ try { return JSON.parse(localStorage.getItem('pccn_sim_' + id) || 'null'); } catch(e) { return null; } }
  function pref(k, d){ try { var v = localStorage.getItem(k); return v === null ? d : v === '1'; } catch(e) { return d; } }
  function setPref(k, v){ try { localStorage.setItem(k, v ? '1' : '0'); } catch(e) {} }
  function shuffle(a){ a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function judgeUrl(){ return (window.PCCN_APP_URL || 'https://pccn-essential-app-production.up.railway.app').replace(/\/+$/, '') + '/simjudge'; }

  function persist(sim, rec){
    try { localStorage.setItem('pccn_sim_' + sim.id, JSON.stringify(rec)); } catch(e) {}
    if (!window.PCCN_AUTH) return;
    var u = PCCN_AUTH.currentUser(), db = PCCN_AUTH.db(); if (!u || !db) return;
    var key = 'mod' + (sim.module || modNo), payload = { progress: {} }; payload.progress[key] = { sim: {} }; payload.progress[key].sim[sim.id] = rec;
    db.collection('users').doc(u.uid).set(payload, { merge: true }).catch(function(e){ console.warn('sim save failed', e && e.code); });
  }

  /* ---------------- bedside monitor (canvas, sweep display) ---------------- */
  function Monitor(canvas){
    var ctx = canvas.getContext('2d'), W = 0, H = 0, dpr = 1, traces = null, phHR = 0, phRR = 0, lastBeat = 0;
    var v = { hr: 0, rr: 0, spo2: 0, bp: '—', crt: 0, temp: 0, avpu: '', o2: '' }, alarm = { hr: [80, 180], spo2: 92, rr: [16, 60] };
    var audio = null, sound = true, visible = false;
    function ecg(p){ var g = function(m, s, a){ return a * Math.exp(-Math.pow((p - m) / s, 2)); }; return g(.18, .03, .12) + g(.30, .008, -.15) + g(.33, .012, 1) + g(.36, .01, -.25) + g(.58, .05, .28); }
    function pleth(p){ return p < .35 ? Math.sin(Math.PI * p / .35) : Math.exp(-(p - .35) * 3.2) * (.85 + .12 * Math.sin((p - .35) * 18)); }
    function resize(){
      var r = canvas.getBoundingClientRect(); dpr = window.devicePixelRatio || 1;
      W = Math.max(200, Math.round(r.width)); H = Math.max(150, Math.round(r.height));
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var wide = W / H > 1.55, tw = wide ? Math.round(W * .58) - 20 : W - 24, cols = Math.max(60, Math.floor(tw / 2));
      traces = ['ecg', 'pl', 'rs'].map(function(){ return { buf: new Float32Array(cols).fill(NaN), cur: 0, acc: 0 }; });
      traces.wide = wide; traces.tw = tw;
    }
    function beep(){
      if (!sound || !visible || !audio) return;
      try { var o = audio.createOscillator(), g = audio.createGain(); o.frequency.value = 520 + (v.spo2 - 80) * 22; g.gain.value = 0;
        o.connect(g); g.connect(audio.destination); var t = audio.currentTime; g.gain.linearRampToValueAtTime(.05, t + .005); g.gain.linearRampToValueAtTime(0, t + .07); o.start(t); o.stop(t + .08); } catch(e) {}
    }
    function step(dt){
      if (!traces) resize();
      var speed = traces.wide ? 70 : 95, colDt = 2 / speed; /* 2 px per column */
      traces.forEach(function(tr, k){
        tr.acc += dt;
        while (tr.acc >= colDt){
          tr.acc -= colDt;
          if (k === 0){ var prev = phHR % 1; phHR += (v.hr || 0) / 60 * colDt; phRR += (v.rr || 0) / 60 * colDt; if (prev < .33 && phHR % 1 >= .33 || (phHR % 1) < prev && .33 > prev) beep(); }
          var val = k === 0 ? ecg(phHR % 1) : k === 1 ? pleth((phHR - .08 + 1) % 1) : .5 - .5 * Math.cos(2 * Math.PI * (phRR % 1));
          tr.buf[tr.cur] = val; tr.cur = (tr.cur + 1) % tr.buf.length; tr.buf[(tr.cur + 3) % tr.buf.length] = NaN;
        }
      });
    }
    function trace(tr, x0, y0, h, col){
      ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.beginPath(); var pen = false;
      for (var i = 0; i < tr.buf.length; i++){ var val = tr.buf[i]; if (isNaN(val)) { pen = false; continue; } var x = x0 + i * 2, y = y0 + h * .82 - val * h * .78; if (!pen) { ctx.moveTo(x, y); pen = true; } else ctx.lineTo(x, y); }
      ctx.stroke();
    }
    function num(label, val, col, x, y, size, al){
      ctx.fillStyle = '#8f86a0'; ctx.font = '600 ' + Math.max(10, size * .26) + 'px Poppins,sans-serif'; ctx.fillText(label, x, y);
      ctx.fillStyle = al ? '#FF4D6D' : col; ctx.font = '700 ' + size + 'px ui-monospace,Menlo,"DejaVu Sans Mono",monospace'; ctx.fillText(val, x, y + size * 1.02);
    }
    function draw(now){
      if (!traces) resize();
      ctx.fillStyle = '#06040A'; ctx.fillRect(0, 0, W, H);
      var blink = Math.floor(now / 500) % 2 === 0, A = alarm;
      var hrA = v.hr > A.hr[1] || v.hr < A.hr[0], spA = v.spo2 < A.spo2, rrA = v.rr > A.rr[1] || v.rr < A.rr[0];
      ctx.font = '600 11px Poppins,sans-serif'; ctx.fillStyle = '#8f86a0';
      if (traces.wide){
        var th = (H - 24) / 3, x0 = 12;
        ['II', 'PLETH', 'RESP'].forEach(function(l, k){ ctx.fillStyle = '#8f86a0'; ctx.fillText(l, x0, 14 + k * th + 2); });
        trace(traces[0], x0, 10, th * .9, '#3BE38B'); trace(traces[1], x0, 10 + th, th * .8, '#43C6F0'); trace(traces[2], x0, 10 + 2 * th, th * .7, '#F5D33A');
        var nx = Math.round(W * .6), cw = (W - nx - 8) / 2, s = Math.min(34, H * .2);
        num('HR', Math.round(v.hr), '#3BE38B', nx, 18, s, hrA && blink); num('SpO₂ %', Math.round(v.spo2), '#43C6F0', nx + cw, 18, s, spA && blink);
        num('RR', Math.round(v.rr), '#F5D33A', nx, 18 + s * 1.7, s * .85, rrA && blink); num('NIBP', v.bp || '—', '#FF7A93', nx + cw, 18 + s * 1.7, s * .6, false);
        ctx.fillStyle = '#8f86a0'; ctx.font = '600 11px Poppins,sans-serif';
        ctx.fillText('CRT ' + Math.round(v.crt) + 's  T ' + (+v.temp).toFixed(1) + '°  ' + (v.avpu || ''), nx, H - 22);
        if (v.o2) { ctx.fillStyle = '#43C6F0'; ctx.fillText(v.o2, nx, H - 8); }
      } else {
        var tH = H * .52, h3 = tH / 3;
        ['II', 'PLETH', 'RESP'].forEach(function(l, k){ ctx.fillStyle = '#8f86a0'; ctx.fillText(l, 12, 16 + k * h3); });
        trace(traces[0], 12, 8, h3 * .92, '#3BE38B'); trace(traces[1], 12, 8 + h3, h3 * .8, '#43C6F0'); trace(traces[2], 12, 8 + 2 * h3, h3 * .7, '#F5D33A');
        ctx.strokeStyle = '#231d2e'; ctx.beginPath(); ctx.moveTo(0, tH + 6); ctx.lineTo(W, tH + 6); ctx.stroke();
        var y = tH + 22, s2 = Math.min(46, W * .11), half = W / 2;
        num('HR /min', Math.round(v.hr), '#3BE38B', 14, y, s2, hrA && blink); num('SpO₂ %', Math.round(v.spo2), '#43C6F0', half + 6, y, s2, spA && blink);
        y += s2 * 1.55; var s3 = s2 * .72;
        num('RR /min', Math.round(v.rr), '#F5D33A', 14, y, s3, rrA && blink); num('NIBP mmHg', v.bp || '—', '#FF7A93', half + 6, y, s3 * .8, false);
        ctx.fillStyle = '#8f86a0'; ctx.font = '600 12px Poppins,sans-serif';
        ctx.fillText('CRT ' + Math.round(v.crt) + ' s   T ' + (+v.temp).toFixed(1) + '°C   AVPU ' + (v.avpu || ''), 14, H - 12);
        if (v.o2) { ctx.fillStyle = '#43C6F0'; ctx.textAlign = 'right'; ctx.fillText(v.o2, W - 12, H - 12); ctx.textAlign = 'left'; }
      }
      if ((spA || hrA) && blink) { ctx.fillStyle = '#FF4D6D'; ctx.font = '700 12px Poppins,sans-serif'; ctx.textAlign = 'right'; ctx.fillText('▲ ALARM', W - 12, 16); ctx.textAlign = 'left'; }
    }
    return {
      resize: resize, step: step, draw: draw,
      set: function(nv, al){ v = nv; if (al) alarm = al; },
      show: function(b){ visible = b; },
      sound: function(b){ sound = b; },
      unlock: function(){ try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); if (audio.state === 'suspended') audio.resume(); } catch(e) {} }
    };
  }

  /* ---------------- one run of a case ---------------- */
  function run(sim, live, opts, onClose){
    var mode = opts.mode || 'self';
    var ov = document.createElement('div'); ov.className = 'psim-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', sim.title);
    ov.innerHTML = '<div class="psim-top"><div><b>' + esc(sim.title) + (mode === 'live' ? ' · Live session' : '') + '</b><br><span>' + esc(sim.patient.age + ' · ' + sim.patient.weight + ' · ' + sim.patient.sex) + '</span></div>' +
      '<button class="psim-tb first" type="button" data-t="voice"></button><button class="psim-tb" type="button" data-t="beep"></button><button class="psim-tb" type="button" data-t="close">Close</button></div>' +
      '<div class="psim-stage"><div class="psim-story"></div><div class="psim-monwrap"><canvas class="psim-cv"></canvas></div></div>' +
      '<div class="psim-ctrl"><button type="button" data-c="restart" title="Back to the start of this part" aria-label="Restart">\u21BA Restart</button><button type="button" data-c="back" title="Back 5 seconds" aria-label="Back 5 seconds">\u25C0\u25C0 5s</button><button type="button" data-c="play" class="pp" aria-label="Pause">\u275A\u275A Pause</button><button type="button" data-c="fwd" title="Forward 5 seconds" aria-label="Forward 5 seconds">5s \u25B6\u25B6</button><button type="button" data-c="end" title="Skip to the question" aria-label="Skip">Skip \u25B6|</button><span class="tm"></span></div>' +
      '<div class="psim-body"><div class="psim-now"></div></div>';
    document.body.appendChild(ov); var prevOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    var stage = ov.querySelector('.psim-stage'), story = ov.querySelector('.psim-story'), now = ov.querySelector('.psim-now');
    var mon = Monitor(ov.querySelector('.psim-cv')), voiceOn = pref('pccn_sim_voice', false), beepOn = pref('pccn_sim_beep', true), vo = new Audio();
    mon.sound(beepOn); mon.unlock();
    function labels(){ ov.querySelector('[data-t="voice"]').textContent = voiceOn ? '🔊 Voice on' : '🔇 Voice off'; ov.querySelector('[data-t="beep"]').textContent = beepOn ? '♫ Monitor sound on' : '♫ Monitor sound off'; }
    labels();
    var closed = false;
    function close(){ closed = true; vo.pause(); ov.remove(); document.body.style.overflow = prevOverflow; window.removeEventListener('resize', mon.resize); if (onClose) onClose(); }
    ov.querySelector('[data-t="close"]').addEventListener('click', close);
    ov.querySelector('[data-t="voice"]').addEventListener('click', function(){ voiceOn = !voiceOn; setPref('pccn_sim_voice', voiceOn); labels(); if (voiceOn && clip) { vo.src = 'sims/live/' + sim.id + '/voice/' + clipName + '.m4a'; try { vo.currentTime = Math.max(0, tNow()); } catch(e) {} vo.play().catch(function(){}); } else vo.pause(); });
    ov.querySelector('[data-t="beep"]').addEventListener('click', function(){ beepOn = !beepOn; setPref('pccn_sim_beep', beepOn); mon.sound(beepOn); mon.unlock(); labels(); });
    window.addEventListener('resize', mon.resize);

    /* ----- clip player ----- */
    var clip = null, clipName = '', clipStart = 0, clipDone = null, actionText = '', segIdx = -1, lineState = '', monShown = false, lastFrame = performance.now();
    var paused = false, pauseAt = 0, startAt = 0;
    function tNow(){ return paused ? pauseAt : (performance.now() - clipStart) / 1000; }
    function footVid(){ return story.querySelector('video'); }
    function setPP(){ var b = ov.querySelector('[data-c="play"]'); if (b) { b.textContent = paused ? '\u25B6 Play' : '\u275A\u275A Pause'; b.setAttribute('aria-label', paused ? 'Play' : 'Pause'); } }
    function pauseClip(){ if (paused || !clip) return; pauseAt = tNow(); paused = true; vo.pause(); var v = footVid(); if (v) v.pause(); setPP(); }
    function resumeClip(){ if (!paused || !clip) return; paused = false; if (pauseAt >= clip.duration) pauseAt = startAt; clipStart = performance.now() - pauseAt * 1000; if (voiceOn && pauseAt < clip.duration) { try { vo.currentTime = pauseAt; } catch(e) {} vo.play().catch(function(){}); } var v = footVid(); if (v) v.play().catch(function(){}); setPP(); }
    function seek(t){
      if (!clip) return; t = Math.max(startAt, Math.min(clip.duration, t));
      if (paused) pauseAt = t; else clipStart = performance.now() - t * 1000;
      segIdx = -1; lineState = '';
      if (voiceOn && !paused && t < clip.duration) { try { vo.currentTime = t; } catch(e) {} vo.play().catch(function(){}); } else vo.pause();
    }
    function vitalsAt(t){
      var tl = clip.vitals, cur = tl[0].v, prev = tl[0].v, tc = 0;
      for (var i = 0; i < tl.length; i++) if (tl[i].t <= t) { prev = i ? tl[i - 1].v : tl[i].v; cur = tl[i].v; tc = tl[i].t; }
      var f = Math.min(1, (t - tc) / 2.5), o = {};
      ['hr', 'rr', 'spo2', 'crt', 'temp'].forEach(function(k){ var a = +prev[k], b = +cur[k]; o[k] = (isFinite(a) && isFinite(b)) ? a + (b - a) * f : cur[k]; });
      o.bp = f < .5 ? prev.bp : cur.bp; o.avpu = f < .5 ? prev.avpu : cur.avpu; o.o2 = cur.o2; return o;
    }
    function play(name, act, done){
      clip = live.clips[name]; clipName = name; actionText = act || ''; clipDone = done; segIdx = -1; lineState = '';
      if (!clip) { done(); return; }
      /* the 'your action' card is not shown (the typed answer is already on screen); kept only when the senior nurse steps in */
      startAt = (!rescuing && clip.segs[0] && clip.segs[0].panel.kind === 'action') ? clip.segs[0].t1 : 0;
      clipStart = performance.now() - startAt * 1000; paused = false; setPP(); mon.set(vitalsAt(startAt), clip.alarm);
      vo.pause(); if (voiceOn) { vo.src = 'sims/live/' + sim.id + '/voice/' + name + '.m4a'; try { vo.currentTime = startAt; } catch(e) {} vo.play().catch(function(){}); }
      now.innerHTML = '';
      ov.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function skip(){ if (!clip) return; seek(clip.duration); }
    ov.querySelector('.psim-ctrl').addEventListener('click', function(e){
      var b = e.target.closest('[data-c]'); if (!b || !clip) return; var c = b.getAttribute('data-c'), t = tNow();
      if (c === 'play') { if (paused) resumeClip(); else if (t >= clip.duration) seek(startAt); else pauseClip(); }
      else if (c === 'restart') { if (paused) { paused = false; setPP(); } seek(startAt); }
      else if (c === 'back') seek(t - 5);
      else if (c === 'fwd') seek(t + 5);
      else if (c === 'end') seek(clip.duration);
    });
    function renderSeg(sg, i){
      var p = sg.panel, k = p.kind, h = '';
      var lines = function(){ return '<div class="txt">' + sg.lines.map(function(l, j){ return '<span class="s" data-j="' + j + '">' + esc(l.text) + ' </span>'; }).join('') + '</div>'; };
      story.className = 'psim-story' + ({ quote: ' quote', action: ' act', decision: ' dec', end: ' end', footage: ' foot' }[k] || '');
      if (k === 'title') h = '<div class="eb">' + esc(p.eyebrow) + '</div><h2>' + esc(p.title) + '</h2><div class="sub">' + esc(p.sub) + '</div><div class="chips">' + (p.chips || []).map(function(c){ return '<span>' + esc(c) + '</span>'; }).join('') + '</div>';
      else if (k === 'quote') h = '<div class="wrap"><div class="who">' + esc(p.who) + '</div>' + lines() + '</div>';
      else if (k === 'action') h = '<div class="eb">' + (rescuing ? 'The senior nurse steps in' : mode === 'live' ? 'The team’s action' : 'Your action') + '</div><div class="txt">' + esc(actionText || p.body) + '</div>';
      else if (k === 'decision') h = '<div class="eb">' + esc(p.eyebrow) + '</div><h2>' + esc(p.title) + '</h2>' + lines();
      else if (k === 'footage') h = '<div class="lbl">' + esc(p.label || 'Clinical footage') + '</div><video muted playsinline autoplay loop src="sims/media/' + esc(sg.footage) + '"></video><div class="cap"></div>';
      else h = '<div class="eb">' + esc(p.eyebrow || '') + '</div>' + lines();
      story.innerHTML = h;
      var vid = story.querySelector('video'); if (vid && paused) vid.removeAttribute('autoplay'); if (vid && !paused) { var pr = vid.play(); if (pr && pr.catch) pr.catch(function(){}); }
    }
    function frame(ts){
      if (closed) return;
      var dt = Math.min(.1, (ts - lastFrame) / 1000); lastFrame = ts;
      if (clip){
        var t = tNow(), segs = clip.segs, i = segs.length - 1;
        for (var k = 0; k < segs.length; k++) if (t < segs[k].t1) { i = k; break; }
        if (i !== segIdx) { segIdx = i; renderSeg(segs[i], i); }
        var sg = segs[i], on = sg.lines.map(function(l){ return t >= l.t0 ? 1 : 0; }).join('');
        if (on !== lineState) { lineState = on; story.querySelectorAll('.s').forEach(function(s){ s.classList.toggle('on', on[+s.getAttribute('data-j')] === '1'); });
          var cap = story.querySelector('.cap'); if (cap) { var cur = ''; sg.lines.forEach(function(l){ if (t >= l.t0) cur = l.text; }); cap.textContent = cur; } }
        if (clip.monitorOn !== null && clip.monitorOn !== undefined && t >= clip.monitorOn && !monShown) { monShown = true; stage.classList.add('mon'); mon.resize(); requestAnimationFrame(function(){ mon.resize(); stage.classList.add('shown'); }); mon.show(true); }
        lastV = vitalsAt(Math.min(t, clip.duration)); mon.set(lastV, clip.alarm);
        var tm = ov.querySelector('.psim-ctrl .tm'); if (tm) { var sh = Math.min(t, clip.duration); var ppb = ov.querySelector('[data-c="play"]'); if (ppb && !paused) ppb.textContent = t >= clip.duration ? '\u25B6 Replay' : '\u275A\u275A Pause'; tm.textContent = Math.floor(sh / 60) + ':' + ('0' + Math.floor(sh % 60)).slice(-2) + ' / ' + Math.floor(clip.duration / 60) + ':' + ('0' + Math.floor(clip.duration % 60)).slice(-2); }
        if (t >= clip.duration && clipDone) { var f = clipDone; clipDone = null; f(); }
      }
      if (monShown) { mon.step(dt); mon.draw(ts); }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    /* ----- decisions ----- */
    var N = sim.decisions.length, di = 0, tried = [], path = [], answers = [], probed = false, judgeOk = null;
    fetch(judgeUrl(), { method: 'GET' }).then(function(r){ return r.json(); }).then(function(j){ judgeOk = !!j.enabled; }).catch(function(){ judgeOk = false; });

    function facultyPanel(){
      if (mode !== 'live') return '';
      var d = sim.decisions[di];
      return '<details class="psim-fac"><summary>Faculty panel — choose the limb yourself</summary>' + d.options.map(function(o, i){
        return '<div class="fo"><button type="button" class="psim-btn ghost" style="padding:6px 12px;min-height:34px;font-size:12.5px;" data-force="' + i + '">Run</button><div>' + (o.best ? '<span class="star">★ </span>' : '') + esc(o.text) + '</div></div>';
      }).join('') + '<p class="psim-note">★ moves the case on. Learners do not see this panel.</p></details>';
    }
    function ask(msg){
      var d = sim.decisions[di];
      var lab = tried.length ? 'The situation has changed \u2014 what do you do now?' : ({ Impression: 'Your impression', Intervention: 'Your intervention' }[d.title] || 'Your answer');
      now.innerHTML = '<div class="psim-ans"><label for="psimA">' + esc(mode === 'live' ? lab.replace(/^Your /, 'The group\u2019s ') : lab) + '</label>' +
        '<p class="hint">Type it as you would say it at the bedside.</p>' +
        (msg ? '<div class="probe">' + esc(msg) + '</div>' : '') +
        '<textarea id="psimA" maxlength="800" placeholder="Type your answer here"></textarea>' +
        '<div class="row"><button type="button" class="psim-btn" data-act="send">Submit</button><span class="stat"></span></div>' + facultyPanel() + '</div>';
      var ta = now.querySelector('textarea'), btn = now.querySelector('[data-act="send"]'), stat = now.querySelector('.stat');
      setTimeout(function(){ try { ta.focus({ preventScroll: true }); } catch(e) {} var y = now.getBoundingClientRect().top + ov.scrollTop - 90; ov.scrollTo({ top: Math.max(0, y), behavior: 'smooth' }); }, 80);
      ta.addEventListener('keydown', function(e){ if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) btn.click(); });
      now.querySelectorAll('[data-force]').forEach(function(b){ b.addEventListener('click', function(){ take(+b.getAttribute('data-force'), ta.value.trim() || sim.decisions[di].options[+b.getAttribute('data-force')].text, true); }); });
      btn.addEventListener('click', function(){
        var txt = ta.value.trim(); if (txt.length < 3) { stat.textContent = 'Type what you would do.'; return; }
        btn.disabled = true; stat.textContent = 'Reading your answer…';
        if (judgeOk === false) return choices(txt);
        fetch(judgeUrl(), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ set: window.PCCN_SIM_SET || '', sim: sim.id, decision: di, answer: txt, probed: probed, after: tried.length ? lastOutcome : '', now: lastV && monShown ? { hr: Math.round(lastV.hr), rr: Math.round(lastV.rr), spo2: Math.round(lastV.spo2), bp: lastV.bp, o2: lastV.o2 || '' } : null }) })
          .then(function(r){ return r.json(); })
          .then(function(j){
            if (j.choice !== undefined && j.choice !== null) return take(j.choice, txt);
            if (j.probe) { probed = true; answers.push({ d: di, text: txt, probe: j.probe }); return ask(j.probe); }
            if (j.none) { probed = false; return ask('Nothing in that changes the child’s condition yet. What do you do?'); }
            choices(txt);
          }).catch(function(){ choices(txt); });
      });
    }
    function choices(txt){
      var d = sim.decisions[di];
      now.innerHTML = '<div class="psim-ans"><label>Which of these is closest to what you would do?</label>' + (txt ? '<p class="hint">You wrote: “' + esc(txt) + '”</p>' : '') +
        shuffle(d.options.map(function(o, i){ return i; })).map(function(i){ return '<button type="button" class="psim-opt" data-i="' + i + '">' + esc(d.options[i].text) + '</button>'; }).join('') + facultyPanel() + '</div>';
      now.querySelectorAll('.psim-opt').forEach(function(b){ b.addEventListener('click', function(){ take(+b.getAttribute('data-i'), txt || sim.decisions[di].options[+b.getAttribute('data-i')].text); }); });
      now.querySelectorAll('[data-force]').forEach(function(b){ b.addEventListener('click', function(){ take(+b.getAttribute('data-force'), txt, true); }); });
    }
    var rescuing = false, lastV = null, lastOutcome = '';
    function take(i, txt, forced){
      var d = sim.decisions[di], o = d.options[i]; if (!o) return;
      var repeat = !o.best && tried.indexOf(i) !== -1; lastOutcome = o.outcome || '';
      probed = false; tried.push(i); answers.push({ d: di, text: txt, limb: i, forced: !!forced });
      mon.unlock();
      var wrongs = tried.filter(function(x){ return !d.options[x].best; }).length;
      var next = function(){
        if (o.best) { path.push(tried.slice()); tried = []; di++; if (di >= N) return ending(); return ask(); }
        if (wrongs >= 2) return rescue();   /* never more than two attempts: the senior nurse steps in and the case moves on */
        ask();
      };
      if (repeat) return next();            /* same limb again: do not replay the same deterioration */
      play('d' + (di + 1) + 'o' + i, txt, next);
    }
    function rescue(){
      var d = sim.decisions[di], bi = -1; d.options.forEach(function(x, k){ if (x.best) bi = k; });
      rescuing = true; tried.push(bi); answers.push({ d: di, text: '(The senior nurse stepped in)', limb: bi, rescue: true });
      play('d' + (di + 1) + 'o' + bi, d.options[bi].text, function(){ rescuing = false; path.push(tried.slice()); tried = []; di++; if (di >= N) return ending(); ask(); });
    }
    function ending(){
      var detours = path.reduce(function(a, p){ return a + p.length - 1; }, 0), smooth = detours <= 1;
      play(smooth ? 'end_smooth' : 'end_detour', '', function(){ finish(smooth, detours); });
    }
    function finish(smooth, detours){
      var firstTime = path.filter(function(p){ return p.length === 1; }).length;
      var rec = { completedAt: new Date().toISOString(), path: path, firstTime: firstTime, detours: detours, of: N, mode: mode,
        answers: answers.map(function(a){ return { d: a.d, t: String(a.text || '').slice(0, 400), l: a.limb === undefined ? null : a.limb, p: a.probe || null, f: a.forced || undefined }; }) };
      if (mode !== 'live') {
        persist(sim, rec);
        var need = BYMOD[sim.module] || [sim.id];
        if (need.every(function(x){ return !!saved(x); })) document.dispatchEvent(new CustomEvent('pccn:step', { detail: { id: 'sim' } }));
      }
      var rows = sim.decisions.map(function(d, k){
        var best = d.options.filter(function(o){ return o.best; })[0];
        var mine = answers.filter(function(a){ return a.d === k && a.limb !== undefined; });
        return '<div class="psim-row"><h5>' + (k + 1) + '. ' + esc(d.title) + '</h5>' +
          mine.map(function(a){ return '<p class="pa"><q>' + esc(a.text) + '</q><br><i>→ ' + esc(d.options[a.limb].outcome) + '</i></p>'; }).join('') +
          '<div class="tp"><b>Teaching point.</b> ' + esc(best.note) + '</div></div>';
      }).join('');
      now.innerHTML = '<div class="psim-db"><div class="psim-end"><b>What happened next</b><br>' + esc(smooth ? sim.ending.smooth : sim.ending.detour) + '</div><h3>' + (mode === 'live' ? 'The team’s path through the case' : 'Your path through the case') + '</h3>' + rows +
        '<h3>Debrief</h3><ol>' + sim.debrief.map(function(q){ return '<li>' + esc(q) + '</li>'; }).join('') + '</ol>' +
        '<h3>Take-home</h3><ul>' + sim.takeHome.map(function(q){ return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>' +
        '<h3>References</h3><ul class="psim-refs">' + sim.references.map(function(q){ return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px;"><button type="button" class="psim-btn" data-act="again">Run the case again</button><button type="button" class="psim-btn ghost" data-act="close">Back to the module</button></div></div>';
      now.querySelector('[data-act="again"]').addEventListener('click', function(){ closed = true; vo.pause(); ov.remove(); document.body.style.overflow = prevOverflow; run(sim, live, opts, onClose); });
      now.querySelector('[data-act="close"]').addEventListener('click', close);
    }
    play('intro', '', function(){ ask(); });
  }

  /* ---------------- launcher on the module page ---------------- */
  var canLive = /[?&]live=1\b/.test(location.search);
  function launcher(el){
    var ids = (el.getAttribute('data-sims') || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
    el.innerHTML = '<div class="psim-launch"></div>'; var wrap = el.firstChild;
    function draw(){
      Promise.all(ids.map(function(id){ return Promise.all([load(id), loadLive(id)]).catch(function(){ return null; }); })).then(function(pairs){
        wrap.innerHTML = pairs.map(function(pr, k){
          if (!pr) return '<div class="psim-card"><p>Scenario ' + esc(ids[k]) + ' could not be loaded. Refresh the page.</p></div>';
          var s = pr[0], r = saved(s.id);
          return '<div class="psim-card"><span class="psim-tag">Virtual simulation · ' + esc(s.duration) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.subtitle) + '</p>' +
            '<p style="font-size:13px;color:#6B5D82;">You type what you would do at each step; the case follows your answer.</p>' +
            (r ? '<div class="psim-done">✓ Completed ' + new Date(r.completedAt).toLocaleDateString() + '</div>' : '') +
            '<div style="margin-top:auto;padding-top:8px;"><button type="button" class="psim-btn" data-k="' + k + '">' + (r ? 'Run again' : 'Start the case') + '</button>' +
            (canLive ? '<br><button type="button" class="psim-live-link" data-live="' + k + '">Run as a live session (faculty)</button>' : '') + '</div></div>';
        }).join('');
        wrap.querySelectorAll('[data-k]').forEach(function(b){ b.addEventListener('click', function(){ var pr = pairs[+b.getAttribute('data-k')]; run(pr[0], pr[1], { mode: 'self' }, draw); }); });
        wrap.querySelectorAll('[data-live]').forEach(function(b){ b.addEventListener('click', function(){ var pr = pairs[+b.getAttribute('data-live')]; run(pr[0], pr[1], { mode: 'live' }, draw); }); });
      });
    }
    draw(); el._draw = draw;
  }

  function init(){
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    document.querySelectorAll('.pccn-sim[data-sims]').forEach(launcher);
    if (window.PCCN_AUTH) PCCN_AUTH.onChange(function(u){
      var db = PCCN_AUTH.db(); if (!u || !db) return;
      db.collection('users').doc(u.uid).get().then(function(d){
        var data = d.exists ? d.data() : {}, p = data.progress || {}, changed = false, roles = data.roles || {};
        Object.keys(p).forEach(function(m){ var s = p[m] && p[m].sim; if (!s) return; Object.keys(s).forEach(function(id){ if (!saved(id)) { try { localStorage.setItem('pccn_sim_' + id, JSON.stringify(s[id])); changed = true; } catch(e) {} } }); });
        return db.collection('admins').doc(u.uid).get().then(function(a){
          var fac = a.exists || roles.organiser || roles.director || roles.faculty;
          if (fac && !canLive) { canLive = true; changed = true; }
          if (changed) document.querySelectorAll('.pccn-sim[data-sims]').forEach(function(el){ if (el._draw) el._draw(); });
        });
      }).catch(function(){});
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
