
// creates the Button object
function Button(x,y, sound, on) {
    this.x = x,
    this.y = y,
    this.sound = sound, 
    this.on = false
}

// hower.js is retuning funky values when adding intergers and the number 0.
// Ex. 0 + 1 = 01, 0 + 5 = 05. This is only happening when using howler.js. 
// I'm using this array to fix this
var numMp3Array = [
    36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19,
    18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ];

// create bellsArray and fill it
var bellsArray = [];
var createBells = function () {
    var i = 0;
    for(i; i <= 35; i ++) {
        var addSound =   'audio/bells_'+ numMp3Array[i] + '.mp3';
        bellsArray[i] = new Howl({
            urls: [addSound]
        });
    }  
}();

//create an array and the fill the array with buttons
var page1Buttons = [];
var fillPage1Buttons = function (){
    //fill a colomn of buttons
        var rows = 1;
        for(rows; rows <= 16; rows += 1) {
        var i = 0;
        for(i; i <= 35; i ++) {
            page1Buttons[page1Buttons.length] = new Button(rows, i + 1, bellsArray[i]);
        } 
        }
}();

var BPM = 60;

var currentBeat = 1;
var runTIme = function () {
    setInterval(function() {
        if(currentBeat > 16) {
            currentBeat = 1;
        } 
        
        $('#light' + currentBeat).animate({opacity:1}, 200);
        $('#showTime').html(currentBeat);
        
        var j = 0;
        while(j < page1Buttons.length) {
            if (page1Buttons[j].x === currentBeat && page1Buttons[j].on === true)
                page1Buttons[j].sound.play();
                j += 1;
        }
        $('#light' + currentBeat).animate({opacity:.25}, 400);
            currentBeat += 1;
        
        
    }, 500);
    }();
    


/************************************************//************************************************//************************************************/


var selectedVoice;

var changeVoice = function () {
    var h = 36;
    $.each(page1Buttons, function(index, selectedVoice) {
        index.sound = selectedVoice + h;
        h -= 1;
    });
};


/************************************************//************************************************//************************************************/


var currentId;
var currentObject;
$('.square').click(function() {
    $(this).toggleClass('on');
    currentId = $(this).attr("data-id");
    page1Buttons[currentId].on = !page1Buttons[currentId].on;
});

