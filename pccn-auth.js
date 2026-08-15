(function(){
  if (!window.firebase || !window.PCCN_FIREBASE_CONFIG) {
    console.warn('PCCN_AUTH: Firebase SDK or config not loaded — auth disabled on this page.');
    return;
  }
  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(window.PCCN_FIREBASE_CONFIG);
  }
  var auth = firebase.auth();
  var db = (firebase.firestore ? firebase.firestore() : null);
  var listeners = [];
  var resolvedUser;
  var hasResolvedOnce = false;
  var pendingRequireLogin = false;

  function renderNav(user){
    var area = document.getElementById('navAuthArea');
    if (!area) return;
    if (user) {
      var name = user.displayName || (user.email || '').split('@')[0];
      area.innerHTML =
        '<a href="PCCN_My_Courses.html" class="pill-outline">' + name + '</a>' +
        '<button type="button" id="navLogoutBtn" class="btn btn-pink btn-sm" style="border:none;cursor:pointer;">Log Out</button>';
      var btn = document.getElementById('navLogoutBtn');
      if (btn) btn.addEventListener('click', function(){ PCCN_AUTH.logout(); });
    } else {
      area.innerHTML =
        '<a href="PCCN_Login.html" class="pill-outline">Log In</a>' +
        '<a href="PCCN_Register.html" class="btn btn-pink btn-sm">Register</a>';
    }
  }

  auth.onAuthStateChanged(function(user){
    resolvedUser = user || null;
    hasResolvedOnce = true;
    renderNav(resolvedUser);
    listeners.forEach(function(cb){ cb(resolvedUser); });
    if (pendingRequireLogin && !resolvedUser) {
      pendingRequireLogin = false;
      var next = encodeURIComponent(window.location.pathname.split('/').pop() + window.location.search);
      window.location.href = 'PCCN_Login.html?next=' + next;
    }
  });

  window.PCCN_AUTH = {
    onChange: function(cb){ listeners.push(cb); if (hasResolvedOnce) cb(resolvedUser); },
    currentUser: function(){ return resolvedUser; },
    requireLogin: function(){
      if (hasResolvedOnce) {
        if (!resolvedUser) {
          var next = encodeURIComponent(window.location.pathname.split('/').pop() + window.location.search);
          window.location.href = 'PCCN_Login.html?next=' + next;
        }
      } else {
        pendingRequireLogin = true;
      }
    },
    logout: function(){
      auth.signOut().then(function(){ window.location.href = 'PCCN_Landing_Page.html'; });
    },
    db: function(){ return db; },
    auth: function(){ return auth; }
  };
})();
