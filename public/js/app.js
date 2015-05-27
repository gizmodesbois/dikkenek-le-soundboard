var fileFormat = "ogg";
var mp3Test = new Audio();
var canPlayMP3 = (typeof mp3Test.canPlayType === "function" && mp3Test.canPlayType("audio/ogg") !== "");
if (!canPlayMP3) {
    fileFormat = "mp3";
}

fileFormat = "mp3";

$(document).ready(function(){
  $('li').on('click', function(){
    var file = $(this).attr('data-sound');
    var audio = new Audio(fileFormat + '/' + file + '.' + fileFormat);
    audio.play();
  });

  $('[data-keyboard="true"]').each(function(){
    var key = $(this).attr('data-key');
    var file = $(this).attr('data-sound');
    Mousetrap.bind(key, function(e) {
        var audio = new Audio(fileFormat + '/' + file + '.' + fileFormat);
        audio.play();
    });
  });

});
