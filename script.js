$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
        $(".arrow").addClass("flip");
    } else {
        $(".arrow").removeClass("flip");
    }
});