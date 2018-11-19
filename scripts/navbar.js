'use strict';
$(document).ready(function () {

    const toggleNav = () => {
        
    }
  let mainNav=$('#main-nav');
  let navbarToggle=$('#navbar-toggle');
  mainNav.hide();

  navbarToggle.click(function(){
    if(navbarToggle.hasClass('active')){
      mainNav.hide();
      navbarToggle.removeClass('active');
    }else{
      mainNav.css('display', 'flex');
      navbarToggle.addClass('active');
    }
  });

  // Select all links with hashes
//   $('a[href*="#"]')
//     // Remove links that don't actually link to anything
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function(event) {
//       // On-page links
//       if (
//         location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
//         &&
//         location.hostname === this.hostname
//       ) {
//         // Figure out element to scroll to
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         // Does a scroll target exist?
//         if (target.length) {
//           // Only prevent default if animation is actually gonna happen
//           event.preventDefault();
//           mainNav.hide();
//           navbarToggle.removeClass('active');
//           $('html, body').animate({
//             scrollTop: target.offset().top - 80
//           }, 1000, function() {
//             // Callback after animation
//             // Must change focus!
//             var $target = $(target);
//             $target.focus();
//             if ($target.is(":focus")) { // Checking if the target was focused
//               return false;
//             } else {
//               $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//               $target.focus(); // Set focus again
//             }
//           });
//         }
//       }
//     });
});