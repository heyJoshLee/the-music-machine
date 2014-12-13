

var sound1 = new Howl({
  urls: ['audio_1.mp3']
});

var sound2 = new Howl ({
    urls: ['audio/audio_2.mp3']
});




// creates the Square object
function Square(x,y, sound, on) {
    this.x = x,
    this.y = y,
    this.sound = sound, 
    this.on = false
};

// create some Squares
var square1 = new Square(1, 1, sound1);
var square2 = new Square(1, 2, sound2);
var square3 = new Square(1, 3, sound2);
var square4 = new Square(1, 4, sound2);
var square5 = new Square(1, 5, sound2);
var square6 = new Square(2, 1, sound1);



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
            square1.sound.play();
        }
        if(square6.x == currentBeat && square6.on == true) {
            square6.sound.play();
        }
        
        
        
    }, 1000);
    }();
    


$('#square_1').click(function() {
    square1.on = !(square1.on);
});

    

$('#square_6').click(function() {
    square6.on = !(square6.on);
});    

$('.square').click(function() {
    $(this).toggleClass('on');
    $(this).on = !($(this.on))
    alert(square1.on);
});





