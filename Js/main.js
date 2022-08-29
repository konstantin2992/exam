$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        items: 3,
        center: true,
        loop: false,
        nav: true,
        navText: [
          '<i class="fas fa-arrow-circle-left fa-3x"></i>',
          '<i class="fas fa-arrow-circle-right fa-3x"></i>'
        ]
     });
});