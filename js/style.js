$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000
    });

    $(".filterable-place li").click(function () {
        $('.filterable-place li.active').removeClass('active');
        $(this).addClass('active');
        var data = $(this).data('place');

        if ($('.place div').hasClass(data)) {
            $(`.place div`).css("display", "none")
            $(`.place .${data}`).css("display", "block");
        }
    })


    $('.fa-solid.fa-play').click(function(){
        $('.fa-solid.fa-play').css('display', 'none');
        $('.videobar iframe').css('display', 'block');
    });

    $('.search').click(function(){
$('.searchbox').css("display", "flex");
    });


    $('.searchbox i').click(function(){
        $('.searchbox').css("display", "none"); 
    })

    $('.mode').click(function(){
        $('body').toggleClass('dark');
    })
});



