

var sound1 = new Howl({
  urls: ['audio/audio_1.mp3']
});

var sound2 = new Howl({
    urls: ['audio/audio_2.mp3']
});

var sound3 = new Howl({
    urls: ['audio/audio_3.mp3']
});
var sound4 = new Howl({
    urls: ['audio/audio_4.mp3']
});
var sound5 = new Howl({
    urls: ['audio/audio_5.mp3']
});
var sound6 = new Howl({
    urls: ['audio/audio_6.mp3']
});
var sound7 = new Howl({
    urls: ['audio/audio_7.mp3']
});
var sound8 = new Howl({
    urls: ['audio/audio_8.mp3']
});
var sound9 = new Howl({
    urls: ['audio/audio_9.mp3']
});
var sound10 = new Howl({
    urls: ['audio/audio_10.mp3']
});
var sound11 = new Howl({
    urls: ['audio/audio_11.mp3']
});
var sound12 = new Howl({
    urls: ['audio/audio_12.mp3']
});
var sound13 = new Howl({
    urls: ['audio/audio_13.mp3']
});
var sound14 = new Howl({
    urls: ['audio/audio_14.mp3']
});
var sound15 = new Howl({
    urls: ['audio/audio_15.mp3']
});
var sound16 = new Howl({
    urls: ['audio/audio_16.mp3']
});
var sound17 = new Howl({
    urls: ['audio/audio_17.mp3']
});
var sound18 = new Howl({
    urls: ['audio/audio_18.mp3']
});
var sound19 = new Howl({
    urls: ['audio/audio_19.mp3']
});
var sound20 = new Howl({
    urls: ['audio/audio_20.mp3']
});
var sound21 = new Howl({
    urls: ['audio/audio_21.mp3']
});
var sound22 = new Howl({
    urls: ['audio/audio_22.mp3']
});
var sound23 = new Howl({
    urls: ['audio/audio_23.mp3']
});
var sound24 = new Howl({
    urls: ['audio/audio_24.mp3']
});
var sound25 = new Howl({
    urls: ['audio/audio_25.mp3']
});
var sound26 = new Howl({
    urls: ['audio/audio_26.mp3']
});
var sound27 = new Howl({
    urls: ['audio/audio_27.mp3']
});
var sound28 = new Howl({
    urls: ['audio/audio_28.mp3']
});
var sound29 = new Howl({
    urls: ['audio/audio_29.mp3']
});
var sound30 = new Howl({
    urls: ['audio/audio_30.mp3']
});
var sound31 = new Howl({
    urls: ['audio/audio_31.mp3']
});
var sound32 = new Howl({
    urls: ['audio/audio_32.mp3']
});
var sound33 = new Howl({
    urls: ['audio/audio_33.mp3']
});
var sound34 = new Howl({
    urls: ['audio/audio_34.mp3']
});
var sound35 = new Howl({
    urls: ['audio/audio_35.mp3']
});
var sound36 = new Howl({
    urls: ['audio/audio_36.mp3']
});




// creates the Square object
function Square(x,y, sound, on) {
    this.x = x,
    this.y = y,
    this.sound = sound, 
    this.on = false
};

// create some Squares

// column 1
var square1_1 = new Square(1, 1, sound36);
var square1_2 = new Square(1, 2, sound35);
var square1_3 = new Square(1, 3, sound34);
var square1_4 = new Square(1, 4, sound33);
var square1_5 = new Square(1, 5, sound32);
var square1_6 = new Square(1, 6, sound31);
var square1_7 = new Square(1, 7, sound30);
var square1_8 = new Square(1, 8, sound29);
var square1_9 = new Square(1, 9, sound28);
var square1_10 = new Square(1, 10, sound27);
var square1_11 = new Square(1, 11, sound26);
var square1_12 = new Square(1, 12, sound25);
var square1_13 = new Square(1, 13, sound24);
var square1_14 = new Square(1, 14, sound23);
var square1_15 = new Square(1, 15, sound22);
var square1_16 = new Square(1, 16, sound21);
var square1_17 = new Square(1, 17, sound20);
var square1_18 = new Square(1, 18, sound19);
var square1_19 = new Square(1, 19, sound18);
var square1_20 = new Square(1, 20, sound17);
var square1_21 = new Square(1, 21, sound16);
var square1_22 = new Square(1, 22, sound15);
var square1_23 = new Square(1, 23, sound14);
var square1_24 = new Square(1, 24, sound13);
var square1_25 = new Square(1, 25, sound12);
var square1_26 = new Square(1, 26, sound11);
var square1_27 = new Square(1, 27, sound10);
var square1_28 = new Square(1, 28, sound9);
var square1_29 = new Square(1, 29, sound8);
var square1_30 = new Square(1, 30, sound7);
var square1_31 = new Square(1, 31, sound6);
var square1_32 = new Square(1, 32, sound5);
var square1_33 = new Square(1, 33, sound4);
var square1_34 = new Square(1, 34, sound3);
var square1_35 = new Square(1, 35, sound2);
var square1_36 = new Square(1, 36, sound1);




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





