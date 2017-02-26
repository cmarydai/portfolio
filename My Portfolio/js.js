$(document).ready(function () {
    
    //Mobile Menu Slide
    $(".menubutton").click(function () {
        $(".mobileMenu").slideToggle("slow")
    });

    // Smooth Anchor Transition
    $('a[href^=#]').on("click", function (e) {
        var t = $(this.hash);
        var t = t.length && t || $('[name=' + this.hash.slice(1) + ']');
        if (t.length) {
            var tOffset = t.offset().top;
            $('html,body').animate({
                scrollTop: tOffset - 20
            }, 'slow');
            e.preventDefault();
        }
    });
});