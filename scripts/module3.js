console.log('start module 3 logic');
$(document).ready(function(){
      $('.slider').slick({
       infinite: true,
       	arrows: false,
		  slidesToShow: 2, // Shows a three slides at a time
		  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
		  slidesPerRow: 2,
		  arrows: true, // Adds arrows to sides of slider
		  dots: false,
		  appendArrows: '.slider-nav',
		  prevArrow: $('.prev'),
		  nextArrow: $('.next'),
	 // Adds the dots on the bottom
		   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });
    });
