!function(a){"use strict";function i(){function i(i){var n="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";i.each(function(){var i=a(this),o=i.data("delay"),e="animated "+i.data("animation");i.css({"animation-delay":o,"-webkit-animation-delay":o}),i.addClass(e).one(n,function(){i.removeClass(e)})})}var n=a(".slider-active");n.on("init",function(n,o){var e=a(".single-slider:first-child").find("[data-animation]");i(e)}),n.on("beforeChange",function(n,o,e,s){var t=a('.single-slider[data-slick-index="'+s+'"]').find("[data-animation]");i(t)}),n.slick({autoplay:!1,autoplaySpeed:1e4,dots:!1,fade:!0,arrows:!1,responsive:[{breakpoint:767,settings:{dots:!1,arrows:!1}}]})}var n=a(window);n.on("load",function(){a(".page-loader").delay(350).fadeOut("slow")});var o=a(window),e=a("#sticky-header");o.on("scroll",function(){var a=o.scrollTop();a<1?e.removeClass("sticky"):e.addClass("sticky")}),a(".navbar-toggle").on("click",function(){a(".navbar-nav").addClass("mobile_menu")}),a(".navbar-nav li a").on("click",function(){a(".navbar-collapse").removeClass("show")}),i(),a(".app-active").slick({slidesToShow:5,slidesToScroll:1,dots:!0,arrows:!1,centerMode:!0,centerPadding:0,autoplay:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1}}]}),a.scrollUp({scrollName:"scrollUp",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="ti-rocket"></i>',activeOverlay:!1}),(new WOW).init()}(jQuery);