/* PCCN branching virtual simulation.
   Usage on a module page:  <div class="pccn-sim" data-sims="s1,s2"></div>  then <script src="pccn-sim.js"></script>
   Scenario files: sims/<id>.json. Each choice moves the case along its own limb: the learner sees what happens
   to the child (narrative + monitor), never a right/wrong label. If the child is not yet safe, the same decision
   point returns with the situation as it now stands. Path and first-choice count are saved quietly to
   localStorage (pccn_sim_<id>) and, when signed in, to users/{uid}.progress.modNN.sim.<id>. */
(function(){
  var CSS = '' +
  '.psim-launch{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));}' +
  '.psim-card{background:#fff;border:1px solid #EEE4EC;border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:8px;}' +
  '.psim-card h3{margin:0;font-size:18px;color:#1F0938;}' +
  '.psim-card p{margin:0;color:#5A4A68;font-size:14px;}' +
  '.psim-tag{align-self:flex-start;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:999px;background:#FBF1E4;color:#8A5410;}' +
  '.psim-done{font-size:12.5px;color:#0F6B52;font-weight:600;}' +
  '.psim-btn{appearance:none;border:0;border-radius:999px;padding:12px 20px;font:700 14px Poppins,-apple-system,sans-serif;background:#D6246E;color:#fff;cursor:pointer;min-height:44px;}' +
  '.psim-btn.ghost{background:transparent;color:#1F0938;border:1.5px solid #1F0938;}' +
  '.psim-ov{position:fixed;inset:0;z-index:99990;background:#FBF8FA;overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:Poppins,-apple-system,sans-serif;color:#1F0938;}' +
  '.psim-head{position:sticky;top:0;z-index:2;}' +
  '.psim-top{background:#1F0938;color:#fff;padding:10px 16px;display:flex;align-items:center;gap:12px;}' +
  '.psim-top b{font-size:15px;}.psim-top span{font-size:12px;color:#c9b9d4;}' +
  '.psim-x{margin-left:auto;background:rgba(255,255,255,.12);color:#fff;border:0;border-radius:999px;padding:8px 14px;font:600 13px Poppins,sans-serif;cursor:pointer;}' +
  '.psim-mon{background:#0E0A14;color:#fff;display:grid;grid-template-columns:repeat(7,1fr);gap:1px;padding:0;border-bottom:3px solid #D6246E;}' +
  '.psim-v{padding:8px 6px;text-align:center;background:#0E0A14;transition:background .6s;}' +
  '.psim-v small{display:block;font:600 10px ui-monospace,Menlo,monospace;letter-spacing:.08em;color:#9A8BA8;}' +
  '.psim-v b{display:block;font:700 20px ui-monospace,Menlo,monospace;}' +
  '.psim-v.hr b{color:#3BE38B}.psim-v.spo2 b{color:#43C6F0}.psim-v.rr b{color:#F5D33A}.psim-v.bp b{color:#FF6B8B}.psim-v.crt b,.psim-v.temp b,.psim-v.avpu b{color:#E9E1F0}' +
  '.psim-v.flash{background:#4A1A3A;}' +
  '@media (max-width:560px){.psim-mon{grid-template-columns:repeat(4,1fr);}.psim-v b{font-size:17px;}}' +
  '.psim-body{max-width:760px;margin:0 auto;padding:18px 16px 60px;}' +
  '.psim-feed > div{margin:0 0 12px;}' +
  '.psim-stem{background:#fff;border:1px solid #EEE4EC;border-radius:14px;padding:16px;}' +
  '.psim-quote{border-left:4px solid #D4882A;background:#FBF1E4;border-radius:0 12px 12px 0;padding:12px 14px;font-style:italic;color:#5A3A10;}' +
  '.psim-exam{font-size:14px;color:#4A3B5C;background:#F4EEF7;border-radius:12px;padding:12px 14px;}' +
  '.psim-step{font:700 11px ui-monospace,Menlo,monospace;letter-spacing:.1em;text-transform:uppercase;color:#D6246E;margin-top:18px !important;}' +
  '.psim-you{background:#1F0938;color:#fff;border-radius:14px 14px 4px 14px;padding:12px 14px;margin-left:12%;font-size:14.5px;}' +
  '.psim-you small{display:block;font:600 10.5px ui-monospace,Menlo,monospace;letter-spacing:.08em;color:#c9b9d4;margin-bottom:4px;}' +
  '.psim-then{background:#fff;border:1px solid #EEE4EC;border-radius:14px 14px 14px 4px;padding:12px 14px;margin-right:12%;font-size:14.5px;}' +
  '.psim-ask{background:#fff;border:2px solid #1F0938;border-radius:16px;padding:16px;margin-top:6px;}' +
  '.psim-ask h4{margin:0 0 6px;font-size:16px;}.psim-ask p{margin:0 0 12px;color:#4A3B5C;font-size:14.5px;}' +
  '.psim-opt{display:block;width:100%;text-align:left;background:#FBF8FA;border:1.5px solid #E2D6EA;border-radius:12px;padding:12px 14px;margin:0 0 8px;font:500 14.5px/1.45 Poppins,-apple-system,sans-serif;color:#1F0938;cursor:pointer;min-height:44px;}' +
  '.psim-opt:hover,.psim-opt:focus-visible{border-color:#D6246E;background:#fff;}' +
  '.psim-end{background:#EBF8F4;border:1px solid #BFE6D8;border-radius:14px;padding:16px;}' +
  '.psim-db h3{font-size:18px;margin:26px 0 10px;}' +
  '.psim-db ol,.psim-db ul{padding-left:20px;margin:0;}.psim-db li{margin:0 0 8px;font-size:14.5px;}' +
  '.psim-row{background:#fff;border:1px solid #EEE4EC;border-radius:14px;padding:14px;margin:0 0 10px;}' +
  '.psim-row h5{margin:0 0 8px;font-size:14px;}' +
  '.psim-row .pa{font-size:13.5px;color:#4A3B5C;margin:0 0 6px;padding-left:12px;border-left:3px solid #E2D6EA;}' +
  '.psim-row .tp{font-size:13.5px;background:#F4EEF7;border-radius:10px;padding:10px 12px;margin-top:8px;}' +
  '.psim-refs{font-size:12.5px;color:#6A5A78;}';

  var LABELS = [['hr','HR'],['spo2','SpO₂'],['rr','RR'],['bp','BP'],['crt','CRT'],['temp','Temp'],['avpu','AVPU']];
  var modNo = (location.pathname.match(/Module(\d\d)/) || [0, '00'])[1];
  var cache = {};

  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function load(id){ if (!cache[id]) cache[id] = fetch('sims/' + id + '.json', { cache: 'no-cache' }).then(function(r){ if (!r.ok) throw new Error(r.status); return r.json(); }); return cache[id]; }
  function saved(id){ try { return JSON.parse(localStorage.getItem('pccn_sim_' + id) || 'null'); } catch(e) { return null; } }
  function shuffle(a){ a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(k, v){ if (v == null || v === '') return '—'; if (k === 'spo2') return v + '%'; if (k === 'crt') return v + ' s'; if (k === 'temp') return v + '°'; return v; }

  function persist(sim, rec){
    try { localStorage.setItem('pccn_sim_' + sim.id, JSON.stringify(rec)); } catch(e) {}
    if (!window.PCCN_AUTH) return;
    var u = PCCN_AUTH.currentUser(), db = PCCN_AUTH.db(); if (!u || !db) return;
    var key = 'mod' + (sim.module || modNo), payload = { progress: {} }; payload.progress[key] = { sim: {} }; payload.progress[key].sim[sim.id] = rec;
    db.collection('users').doc(u.uid).set(payload, { merge: true }).catch(function(e){ console.warn('sim save failed', e && e.code); });
  }

  function run(sim, onClose){
    var v = JSON.parse(JSON.stringify(sim.vitals));
    var path = [], di = 0, tried = [];
    var ov = document.createElement('div'); ov.className = 'psim-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', sim.title);
    ov.innerHTML = '<div class="psim-head"><div class="psim-top"><div><b>' + esc(sim.title) + '</b><br><span>' + esc(sim.patient.age + ' · ' + sim.patient.weight + ' · ' + sim.patient.sex) + '</span></div><button class="psim-x" type="button">Close</button></div>' +
      '<div class="psim-mon">' + LABELS.map(function(l){ return '<div class="psim-v ' + l[0] + '" data-k="' + l[0] + '"><small>' + l[1] + '</small><b></b></div>'; }).join('') + '</div></div>' +
      '<div class="psim-body"><div class="psim-feed"></div><div class="psim-now"></div></div>';
    document.body.appendChild(ov); var prevOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    var feed = ov.querySelector('.psim-feed'), now = ov.querySelector('.psim-now');
    function close(){ ov.remove(); document.body.style.overflow = prevOverflow; if (onClose) onClose(); }
    ov.querySelector('.psim-x').addEventListener('click', close);

    function monitor(changed){
      LABELS.forEach(function(l){
        var cell = ov.querySelector('.psim-v[data-k="' + l[0] + '"]'); cell.querySelector('b').textContent = fmt(l[0], v[l[0]]);
        if (changed && changed.indexOf(l[0]) !== -1) { cell.classList.add('flash'); setTimeout(function(){ cell.classList.remove('flash'); }, 1400); }
      });
    }
    function add(cls, html){ var d = document.createElement('div'); d.className = cls; d.innerHTML = html; feed.appendChild(d); return d; }
    function apply(delta){
      var ch = [];
      Object.keys(delta || {}).forEach(function(k){ if (k === 'note') return; if (String(v[k]) !== String(delta[k])) ch.push(k); v[k] = delta[k]; });
      monitor(ch);
    }

    add('psim-stem', esc(sim.stem));
    add('psim-quote', esc(sim.parent));
    add('psim-exam', esc(sim.vitals.note));
    monitor();

    function ask(){
      var d = sim.decisions[di];
      var remaining = d.options.map(function(o, i){ return i; }).filter(function(i){ return tried.indexOf(i) === -1; });
      var again = tried.length > 0;
      now.innerHTML = '<div class="psim-ask"><h4>' + esc(again ? 'The situation has changed' : d.title) + '</h4><p>' + esc(again ? 'What do you do now?' : d.prompt) + '</p>' +
        shuffle(remaining).map(function(i){ return '<button type="button" class="psim-opt" data-i="' + i + '">' + esc(d.options[i].text) + '</button>'; }).join('') + '</div>';
      if (!again) { var s = document.createElement('div'); s.className = 'psim-step'; s.textContent = 'Decision ' + (di + 1) + ' of ' + sim.decisions.length + ' · ' + d.title; feed.appendChild(s); }
    }
    now.addEventListener('click', function(e){
      var b = e.target.closest('.psim-opt'); if (!b) return;
      var d = sim.decisions[di], i = +b.getAttribute('data-i'), o = d.options[i];
      tried.push(i);
      add('psim-you', '<small>YOU</small>' + esc(o.text));
      apply(o.vitals);
      add('psim-then', esc(o.outcome || ''));
      if (o.best) { path.push(tried.slice()); tried = []; di++; }
      if (di >= sim.decisions.length) return finish();
      ask();
      var y = now.getBoundingClientRect().top + ov.scrollTop - ov.querySelector('.psim-head').offsetHeight - 120; ov.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    });

    function finish(){
      var firstTime = path.filter(function(p){ return p.length === 1; }).length;
      var detours = path.reduce(function(a, p){ return a + p.length - 1; }, 0);
      var smooth = detours <= 1;
      add('psim-end', '<b>What happened next</b><br>' + esc(smooth ? sim.ending.smooth : sim.ending.detour));
      var rec = { completedAt: new Date().toISOString(), path: path, firstTime: firstTime, detours: detours, of: sim.decisions.length };
      persist(sim, rec);
      var rows = sim.decisions.map(function(d, k){
        var best = d.options.filter(function(o){ return o.best; })[0];
        return '<div class="psim-row"><h5>' + (k + 1) + '. ' + esc(d.title) + '</h5>' +
          path[k].map(function(i){ return '<p class="pa">' + esc(d.options[i].text) + '<br><i>→ ' + esc(d.options[i].outcome) + '</i></p>'; }).join('') +
          '<div class="tp"><b>Teaching point.</b> ' + esc(best.note) + '</div></div>';
      }).join('');
      now.innerHTML = '<div class="psim-db"><h3>Your path through the case</h3>' + rows +
        '<h3>Debrief</h3><ol>' + sim.debrief.map(function(q){ return '<li>' + esc(q) + '</li>'; }).join('') + '</ol>' +
        '<h3>Take-home</h3><ul>' + sim.takeHome.map(function(q){ return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>' +
        '<h3>References</h3><ul class="psim-refs">' + sim.references.map(function(q){ return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px;"><button type="button" class="psim-btn" data-act="again">Run the case again</button><button type="button" class="psim-btn ghost" data-act="close">Back to the module</button></div></div>';
      now.querySelector('[data-act="again"]').addEventListener('click', function(){ ov.remove(); document.body.style.overflow = prevOverflow; run(sim, onClose); });
      now.querySelector('[data-act="close"]').addEventListener('click', close);
    }
    ask();
  }

  function launcher(el){
    var ids = (el.getAttribute('data-sims') || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
    el.innerHTML = '<div class="psim-launch"></div>'; var wrap = el.firstChild;
    function draw(){
      Promise.all(ids.map(function(id){ return load(id).catch(function(){ return null; }); })).then(function(sims){
        wrap.innerHTML = sims.map(function(s, k){
          if (!s) return '<div class="psim-card"><p>Scenario ' + esc(ids[k]) + ' could not be loaded. Refresh the page.</p></div>';
          var r = saved(s.id);
          return '<div class="psim-card"><span class="psim-tag">Virtual simulation · ' + esc(s.duration) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.subtitle) + '</p>' +
            (r ? '<div class="psim-done">✓ Completed ' + new Date(r.completedAt).toLocaleDateString() + '</div>' : '') +
            '<div style="margin-top:auto;padding-top:8px;"><button type="button" class="psim-btn" data-k="' + k + '">' + (r ? 'Run again' : 'Start the case') + '</button></div></div>';
        }).join('');
        wrap.querySelectorAll('[data-k]').forEach(function(b){ b.addEventListener('click', function(){ run(sims[+b.getAttribute('data-k')], draw); }); });
      });
    }
    draw();
  }

  function init(){
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    document.querySelectorAll('.pccn-sim[data-sims]').forEach(launcher);
    /* pull account copies so completion shows on a new device */
    if (window.PCCN_AUTH) PCCN_AUTH.onChange(function(u){
      var db = PCCN_AUTH.db(); if (!u || !db) return;
      db.collection('users').doc(u.uid).get().then(function(d){
        var p = (d.exists && d.data().progress) || {}, changed = false;
        Object.keys(p).forEach(function(m){ var s = p[m] && p[m].sim; if (!s) return; Object.keys(s).forEach(function(id){ if (!saved(id)) { try { localStorage.setItem('pccn_sim_' + id, JSON.stringify(s[id])); changed = true; } catch(e) {} } }); });
        if (changed) document.querySelectorAll('.pccn-sim[data-sims]').forEach(launcher);
      }).catch(function(){});
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
