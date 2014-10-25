$ ->

    $('nav#menu ul.nav li a.drop').on 'click', (event)->
        event.preventDefault();
        if!($(@).hasClass('active'))
            $('nav#menu ul.nav li ul').hide()
            $('nav#menu ul.nav li a').removeClass('active')
            $('nav#menu ul.nav li a i').removeClass('fa-times fa-fw').addClass('fa-caret-down fa-fw')
            $(@).parent().find('ul').fadeIn(200)
            $(@).find('i').removeClass('fa-caret-down fa-fw').addClass('fa-times fa-fw')
            $(@).addClass('active')
        else
            $(@).parent().find('ul').hide()
            $(@).find('i').removeClass('fa-times fa-fw').addClass('fa-caret-down fa-fw')
            $(@).removeClass('active')


    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        dots: true,
        arrows: false,
        draggable: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-main'
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
