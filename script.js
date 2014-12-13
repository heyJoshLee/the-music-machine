function Square(x,y, sound, on) {
    this.x = x,
    this.y = y,
    this.sound = sound, 
    this.on = false;
};


var square1 = new Square(1, 2, 'audio_1.mp3')





var sound = new Howl({
  urls: ['audio_1.mp3', 'sound.ogg']
});

$('button').click(function() {
    sound.play();
});


var currentBeat = 1;
var runTIme = function () {
    setInterval(function() {
        if(currentBeat >= 4) {
            currentBeat = 0;
             $('#showTime').html(currentBeat);
        }
        currentBeat +=1;
        $('#showTime').html(currentBeat);
        
        
        
        if(square1.x == currentBeat && square1.on == true) {
            sound.play();
        }
        
        
        
    }, 1000);
    }();
    


$('#square_1').click(function() {
    square1.on = !(square1.on);
});

$('.square').click(function() {
    $(this).toggleClass('on');
    alert(square1.on);
});





