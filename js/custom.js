/*******************
    services
********************/
$(function(){
  new WOW().init();
});
/*******************
    Team

********************/
$(function(){
  $("#team-members").owlCarousel({
    item:3,
    autoplay:true,
    smartSpeed:700,
    loop:true
  });
});