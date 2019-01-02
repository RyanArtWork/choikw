

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

		
  $(document).ready(function() {
		
		var scrollLink = $('.scroll');
	
		// Smooth scrolling
		scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 100 );
		});
		
		// Active link switching
		$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();
		
		scrollLink.each(function() {
			
			var sectionOffset = $(this.hash).offset().top - 300;
			
			if ( sectionOffset <= scrollbarLocation ) {
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
			}
		})
		
		})
		
	})	


	
