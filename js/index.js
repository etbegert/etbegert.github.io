$(function() {
   var pull = $('#pull');
   menu = $('nav ul');
   menuHeight = men.height();
   
   $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
   });
});

$(window).resize(function() {
   var w = $(window).width();
   if( w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
   }
});