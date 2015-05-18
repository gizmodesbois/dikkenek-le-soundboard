$(document).on('keydown', function (e) {
  if (e.keyCode == 80) {        // P
    var file = 'ogg/philippe.ogg'
  } else if (e.keyCode == 74) {// J
    var file = 'ogg/je-sais.ogg'
  } else if (e.keyCode == 86) { // V
    var file = 'ogg/viens-ici.ogg'
  } else if (e.keyCode == 84) { // T
    var file = 'ogg/ta-gueule.ogg'
  } else if (e.keyCode == 69) { // E
    var file = 'ogg/sale-encule.ogg'
  } else if (e.keyCode == 83) { // S
    var file = 'ogg/salaud.ogg'
  } else if (e.keyCode == 89) { // Y
    var file = 'ogg/vas-y.ogg'
  } else if (e.keyCode == 67) { // C
    var file = 'ogg/petit-con.ogg'
  } else if (e.keyCode == 77) { // M
    var file = 'ogg/mourir-connard.ogg'
  } else if (e.keyCode == 70) { // F
    var file = 'ogg/mon-frere.ogg'
  }
  var audio = new Audio(file);
  audio.play();
});

$(document).ready(function(){
  $('li').on('touchstart', function(){
    var file = $(this).attr('data-sound');
    var audio = new Audio('ogg/' + file + '.ogg');
    audio.play();
  });
});
