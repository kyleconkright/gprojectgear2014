$ ->
    #mobile product swiper
    $('#slider').Swipe().data('Swipe');

    $('nav#menu ul.nav li a.drop').on 'click', (event)->
        event.preventDefault();
        if!($(@).hasClass('active'))
            $('nav#menu ul.nav li ul').hide()
            $('nav#menu ul.nav li a').removeClass('active')
            $('nav#menu ul.nav li a i').removeClass('fa-times').addClass('fa-caret-down')
            $(@).parent().find('ul').fadeIn(200)
            $(@).find('i').removeClass('fa-caret-down').addClass('fa-times')
            $(@).addClass('active')
        else
            $(@).parent().find('ul').hide()
            $(@).find('i').removeClass('fa-times').addClass('fa-caret-down')
            $(@).removeClass('active')
