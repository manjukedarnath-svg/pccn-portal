// PCCN Certificate Course — shared authentication helper.
// Include this AFTER the Firebase compat SDK scripts and pccn-firebase-config.js:
//
//   <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
//   <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
//   <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
//   <script src="pccn-firebase-config.js"></script>
//   <script src="pccn-auth.js"></script>
//
// Every page that includes this script automatically gets its
// #navAuthArea updated to reflect whether someone is signed in.

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
  var resolvedUser; // undefined = not yet resolved, null = signed out, object = signed in
  var hasResolvedOnce = false;
  var pendingRequireLogin = false;

  function nn(n){ return String(n).padStart(2, '0'); }

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
    // Fire cb(user) every time auth state changes (including the first resolution).
    // user is null when signed out.
    onChange: function(cb){
      listeners.push(cb);
      if (hasResolvedOnce) cb(resolvedUser);
    },
    // Returns the current user, or undefined if auth state hasn't resolved yet.
    currentUser: function(){ return resolvedUser; },
    // Redirects to the Login page (preserving the current page as ?next=) if
    // nobody is signed in once auth state resolves. Safe to call immediately
    // on page load — it waits for the first resolution before deciding.
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
      auth.signOut().then(function(){
        window.location.href = 'PCCN_Landing_Page.html';
      });
    },
    db: function(){ return db; },
    auth: function(){ return auth; }
  };
})();
