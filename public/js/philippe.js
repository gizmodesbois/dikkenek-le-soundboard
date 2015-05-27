var fileFormat = "ogg";
var mp3Test = new Audio();
var canPlayMP3 = (typeof mp3Test.canPlayType === "function" && mp3Test.canPlayType("audio/ogg") !== "");
if (!canPlayMP3) {
    fileFormat = "mp3";
}

fileFormat = "mp3";

$(document).on('keydown', function (e) {
  if (e.keyCode == 80) {        // P
    var file = fileFormat + '/philippe.' + fileFormat;
  } else if (e.keyCode == 74) {// J
    var file = fileFormat + '/je-sais.' + fileFormat;
  } else if (e.keyCode == 86) { // V
    var file = fileFormat + '/viens-ici.' + fileFormat;
  } else if (e.keyCode == 84) { // T
    var file = fileFormat + '/ta-gueule.' + fileFormat;
  } else if (e.keyCode == 69) { // E
    var file = fileFormat + '/sale-encule.' + fileFormat;
  } else if (e.keyCode == 81) { // Q
    var file = fileFormat + '/qui-a-tue.' + fileFormat;
  } else if (e.keyCode == 82) { // R
    var file = fileFormat + '/rien-a-foutre.' + fileFormat;
  } else if (e.keyCode == 83) { // S
    var file = fileFormat + '/salaud.' + fileFormat;
  } else if (e.keyCode == 65) { // A
    var file = fileFormat + '/alien.' + fileFormat;
  } else if (e.keyCode == 66) { // B
    var file = fileFormat + '/veux-ce-connard.' + fileFormat;
  } else if (e.keyCode == 68) { // D
    var file = fileFormat + '/vengeance.' + fileFormat;
  } else if (e.keyCode == 89) { // Y
    var file = fileFormat + '/vas-y.' + fileFormat;
  } else if (e.keyCode == 67) { // C
    var file = fileFormat + '/petit-con.' + fileFormat;
  } else if (e.keyCode == 77) { // M
    var file = fileFormat + '/mourir-connard.' + fileFormat;
  } else if (e.keyCode == 70) { // F
    var file = fileFormat + '/mon-frere.' + fileFormat;
  } else if (e.keyCode == 71) { // G
    var file = fileFormat + '/african-americany.' + fileFormat;
  } else if (e.keyCode == 72) { // H
    var file = fileFormat + '/payer.' + fileFormat;
  }
  var audio = new Audio(file);
  audio.play();
});

$(document).ready(function(){
  $('li').on('click', function(){
    var file = $(this).attr('data-sound');
    var audio = new Audio(fileFormat + '/' + file + '.' + fileFormat);
    audio.play();
  });
});
