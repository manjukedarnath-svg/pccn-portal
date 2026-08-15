// PCCN Certificate Course — shared mobile nav toggle.
// Include this right after each page's <nav>...</nav> block.
(function(){
  document.querySelectorAll('.pccn-nav-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      var nav = btn.closest('.pccn-nav');
      if (nav) nav.classList.toggle('nav-open');
    });
  });
  document.querySelectorAll('.pccn-nav-links a').forEach(function(a){
    a.addEventListener('click', function(){
      var nav = a.closest('.pccn-nav');
      if (nav) nav.classList.remove('nav-open');
    });
  });
})();
