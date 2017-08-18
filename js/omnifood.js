$(document).ready(function(){

    /* STICKY NAVIGATION */
    $(".js-section-features").waypoint(function(direction){
        if(direction == "down") {
            $("nav").addClass("sticky");
        }else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "6%"
    });

    /*SCROLL TO */
    $(".js-scroll-to-plans").on("click", function(){
        $("html, body").animate({scrollTop: $(".js-plans").offset().top}, 1000);
    });

      $(".js-show-more").on("click", function(){
        $("html, body").animate({scrollTop: $(".js-section-features").offset().top}, 1000);
    });

    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({scrollTop: $(hash).offset().top}, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    /*ANIMATION ON SCROLL*/
    $(".js-wp-1").waypoint(function(direction){
        $(".js-wp-1").addClass("animated fadeIn");
    }, {
        offset: "75%"
    });

    $(".js-wp-2").waypoint(function(direction){
        $(".js-wp-2").addClass("animated fadeInUp");
    },{
        offset: "75%"
    });

    $(".js-wp-3").waypoint(function(direction){
        $(".js-wp-3").addClass("animated lightSpeedIn");
    }, {
        offset: "75%"
    });

    /*RESPONSIVE NAVIGATION*/

    $(".js-nav-icon").on("click", function(){
        var nav = $(".main-nav");
        var icon = $(".js-nav-icon i");

        nav.slideToggle(200);

        if(icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        }else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });

});