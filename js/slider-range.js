  $(document).ready(function() {

  var doUpdate = function(event, ui) {
    $('#slide1 .slide-back').remove();
    $($('#slide1 a').get().reverse()).each(function(i) {
      var bg = '#fff';
      if (i == 1) {
        bg = '#00f';
      } else
        bg = '#0f0';

      $('#slide1').append($('<div></div>').addClass('slide-back').width($(this).offset().left - 3).css('background', bg));
    });
  };

  $('#slide1').slider({
    slide: doUpdate,
    change: doUpdate,
    min: 0,
    max: 100,
    values: [1, 50, 100]
  });

  doUpdate();
});