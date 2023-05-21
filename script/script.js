function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
    document.querySelector('.dark').classList.toggle('open')
}

/* scroll hide */
var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.querySelector(".scroll-to-hide").classList.remove("hide");
        } else {
          document.querySelector(".scroll-to-hide").classList.add("hide");
        }
        prevScrollpos = currentScrollPos;
      }
