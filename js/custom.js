/**
 * Created by PA_VSridha on 10/5/2016.
 */

$(document).ready(function () {

    //Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                console.log(target.offset().top)
                $('html, body').animate({
                    scrollTop: target.offset().top - 200
                }, 1200);
                return false;
            }
        }
    });
    $('html').scrollspy(function () {
        console.log("abc")
    })

    var refresh = function () {
        $(".wrapper > *").css("opacity", "1");
        $(".wrapper > *").removeClass("animated zoomIn")

        console.log("asdpoands")
    }
    $('.navbar-fixed-top > .container > ul > li > a').click(function (event) {
        refresh()
        console.log("e")
        var a = event.target.attributes[1].nodeValue;
        if (a !== '#') {
            window.location.href = a;
            console.log(a)
            $(a).addClass("animated zoomIn")
            $(a).siblings().css("opacity", "0.2");
        }

    })
    $(".wrapper").click(refresh);

    $(document).on('scroll', 'html', refresh)


})