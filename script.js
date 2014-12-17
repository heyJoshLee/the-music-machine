
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


// create daftArray and fill it
var daftArray = [];
var createDaft = function () {
    var i = 0;
    for(i; i <= 35; i ++) {
        var addSound =   'audio/daft_'+ numMp3Array[i] + '.mp3';
        daftArray[i] = new Howl({
            urls: [addSound]
        });
    }  
}();

// create synthArray and fill it
var synthArray = [];
var createSynth= function () {
    var i = 0;
    for(i; i <= 35; i ++) {
        var addSound =   'audio/synth_'+ numMp3Array[i] + '.mp3';
        synthArray[i] = new Howl({
            urls: [addSound]
        });
    }  
}();



var BPM = 60;

$('#BPMInput').change(function() {
    var inputValue = $('#BPMInput').val();
    if (inputValue > 10 && inputValue < 300) {
        BPM = $('#BPMInput').val();
        $('#currentBPMDiv').html(BPM);
    }
});




var currentBeat = 1;
var runTime = function () {
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
        
        
    }, BPM * 16.6666666667);
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

// turn on and off buttons and toggle css button classes
$('.square').click(function() {
    $(this).toggleClass('on');
    var currentId = $(this).attr("data-id");
    page1Buttons[currentId].on = !page1Buttons[currentId].on;
});



var pageArray = []

var fillPageArray = function() {
    var i = 0;
    for (i; i < 4; i ++) {
     pageArray[i] = {
         pageNumber: i + 1,
         instrument: 'bells'
     };
    }}();

var currentPage = 1;
var currentPageButtons;

var changeInstrumentTo = 'not changed';

$('.sound_bank-selector ul li').click(function () {
    changeInstrumentTo = $(this).attr("data-id");
   // alert(changeInstrumentTo);
    $('.sound_bank-selector ul li').removeClass('selected_bank');
    $(this).addClass('selected_bank');
    
    
   var rows = 1;
   var loopCounter = 0;
   for(rows; rows <= 16; rows += 1) {
    var i = 0;
    for(i; i <= 35; i ++) {
        window['page1Buttons'][loopCounter]['sound'] = window[changeInstrumentTo][i];  
        loopCounter += 1;
    }
   }
});



/*****
$('.page_switcher').click(function() {
    $.ajax({url: $(this).attr("data-id"),
            success: function(data) {
            $("#playArea").html(data)  
            alert(data);
            }
})
})

*****/