var fileFormat = "ogg";
var mp3Test = new Audio();
var canPlayMP3 = (typeof mp3Test.canPlayType === "function" && mp3Test.canPlayType("audio/ogg") !== "");
if (!canPlayMP3) {
    fileFormat = "mp3";
}

$(document).ready(function(){
  $('[data-sound]').on('click', function(){
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

    $('.social-share').each(function(){
        var $shareButton = $(this);
        var $soundableElem = $shareButton.parent().find('[data-sound]');
        var file = $soundableElem.attr('data-sound');


        var baseUrl = window.location.href;
        var audioPath = fileFormat + '/' + file + '.' + fileFormat;
        var audioURL =  baseUrl + audioPath;


        var options = {

            twitter: {
                text:  "#dikkenek Je n'ai qu'une chose à dire ! ",
                via: 'henrottesimon'
            },

            facebook : {
                image: baseUrl + 'img/claudy.jpg'
            },
        };

        $shareButton.shareButtons(audioURL, options);

    });




});
