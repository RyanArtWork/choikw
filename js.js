

window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.getElementById("bnav").style.padding= "0px 0px";
      document.getElementById("bnav").style.lineHeight= "50px";
      document.getElementById("bnav").style.fontSize= "1rem";

    } else {
      document.getElementById("bnav").style.padding= "0px 0px";
      document.getElementById("bnav").style.lineHeight= "300px";
      document.getElementById("bnav").style.fontSize= "1.5rem";

    }
  }



	
	
