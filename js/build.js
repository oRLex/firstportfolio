$(function(){console.log("ham"),$("._hamburger").click(function(){$("._nav").slideToggle()})}),$(document).ready(function(){$('a[href^="#"]').on("click",function(o){o.preventDefault();var e=this.hash,i=$(e);$("html, body").stop().animate({scrollTop:i.offset().top},1100,"swing",function(){window.location.hash=e})})}),console.log("module 1 done"),$(document).ready(function(){$(".btn-portfolio").click(function(){var o=$(this).attr("data-filter");"all"==o?$(".filter").show("1000"):($(".filter").not("."+o).hide("1000"),$(".filter").filter("."+o).show("1000"))})}),console.log("start module 3 logic"),$(document).ready(function(){$(".slider").slick({infinite:!0,arrows:!1,slidesToShow:2,slidesToScroll:1,slidesPerRow:2,arrows:!0,dots:!1,appendArrows:".slider-nav",prevArrow:$(".prev"),nextArrow:$(".next"),responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})});