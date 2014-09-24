(function() {
  $(function() {
    $('#slider').Swipe().data('Swipe');
    return $('nav#menu ul.nav li a.drop').on('click', function(event) {
      event.preventDefault();
      if (!($(this).hasClass('active'))) {
        $('nav#menu ul.nav li ul').hide();
        $('nav#menu ul.nav li a').removeClass('active');
        $('nav#menu ul.nav li a i').removeClass('fa-times').addClass('fa-caret-down');
        $(this).parent().find('ul').fadeIn(200);
        $(this).find('i').removeClass('fa-caret-down').addClass('fa-times');
        return $(this).addClass('active');
      } else {
        $(this).parent().find('ul').hide();
        $(this).find('i').removeClass('fa-times').addClass('fa-caret-down');
        return $(this).removeClass('active');
      }
    });
  });

}).call(this);
