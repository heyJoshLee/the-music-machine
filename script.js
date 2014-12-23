var playing = true;

$('.pauseButton').click(function() {
    $(this).toggleClass('play');
    playing = !playing;
});

$(document).ready(function() {
     $.ajax({url: 'page1.html',
            success: function(data) {
            $("#page_container").html(data)  
            }
})
})

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

var instrumentNames = ["bells", "daft", "synth", "piano", "perc"];


// create bellsArray and fill it
var bellsArray = [];
var daftArray = [];
var synthArray = [];
var pianoArray = [];
var percArray = [];

var page1Buttons = [];
var page2Buttons = [];
var page3Buttons = [];
var page4Buttons = [];
var page5Buttons = [];





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

var createDaft = function () {
    var i = 0;
    for(i; i <= 35; i ++) {
        var addSound =   'audio/daft_'+ numMp3Array[i] + '.mp3';
        daftArray[i] = new Howl({
            urls: [addSound]
        });
    }  
}();

//create an array and the fill the array with buttons
var fillPage2Buttons = function (){
    //fill a colomn of buttons
        var rows = 1;
        for(rows; rows <= 16; rows += 1) {
        var i = 0;
        for(i; i <= 35; i ++) {
            page2Buttons[page2Buttons.length] = new Button(rows, i + 1, daftArray[i]);
        } 
        }
}();

// create synthArray and fill it

var createSynth= function () {
    var i = 0;
    for(i; i <= 35; i ++) {
        var addSound =   'audio/synth_'+ numMp3Array[i] + '.mp3';
        synthArray[i] = new Howl({
            urls: [addSound]
        });
    }  
}();

//create an array and the fill the array with buttons
var fillPage3Buttons = function (){
    //fill a colomn of buttons
        var rows = 1;
        for(rows; rows <= 16; rows += 1) {
        var i = 0;
        for(i; i <= 35; i ++) {
            page3Buttons[page3Buttons.length] = new Button(rows, i + 1, synthArray[i]);
        } 
        }
}();

// create pianoArray and fill it
var createPiano= function () {
    var i = 0;
    for(i; i <= 35; i ++) {
        var addSound =   'audio/piano_'+ numMp3Array[i] + '.mp3';
        pianoArray[i] = new Howl({
            urls: [addSound]
        });
    }  
}();


//create an array and the fill the array with buttons
var fillPage4Buttons = function (){
    //fill a colomn of buttons
        var rows = 1;
        for(rows; rows <= 16; rows += 1) {
        var i = 0;
        for(i; i <= 35; i ++) {
            page4Buttons[page4Buttons.length] = new Button(rows, i + 1, pianoArray[i]);
        } 
        }
}();


// create pianoArray and fill it
var createPerc= function () {
    var i = 0;
    for(i; i <= 35; i ++) {
        var addSound =   'audio/perc_'+ numMp3Array[i] + '.mp3';
        percArray[i] = new Howl({
            urls: [addSound]
        });
    }  
}();


//create an array and the fill the array with buttons
var fillPage5Buttons = function (){
    //fill a colomn of buttons
        var rows = 1;
        for(rows; rows <= 16; rows += 1) {
        var i = 0;
        for(i; i <= 35; i ++) {
            page5Buttons[page5Buttons.length] = new Button(rows, i + 1, percArray[i]);
        } 
        }
}();



var BPM = 120;
$(document).ready(function() {
    $('#currentBPMDiv').html("Current BPM:" +  BPM);
})

$('#BPMInput').change(function() {
    var inputValue = $('#BPMInput').val();
    if (inputValue > 10 && inputValue < 1001) {
        BPM = $('#BPMInput').val();
        $('#currentBPMDiv').html("Current BPM:" + BPM);
    } else {alert("Please enter a whole number between 10 and 1000.");
           }
});



var BPMFactor;

var currentBeat = 1;

var runTime = function () {
    if (playing) {
    clearInterval(interval);
    BPMFactor = 60000 / BPM;
    
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
    var j = 0;
    while(j < page2Buttons.length) {
        if (page2Buttons[j].x === currentBeat && page2Buttons[j].on === true)
            page2Buttons[j].sound.play();
            j += 1;
    }
    var j = 0;
    while(j < page3Buttons.length) {
        if (page3Buttons[j].x === currentBeat && page3Buttons[j].on === true)
            page3Buttons[j].sound.play();
            j += 1;
    }
    var j = 0;
    while(j < page4Buttons.length) {
        if (page4Buttons[j].x === currentBeat && page4Buttons[j].on === true)
            page4Buttons[j].sound.play();
            j += 1;
    }
    var j = 0;
    while(j < page5Buttons.length) {
        if (page5Buttons[j].x === currentBeat && page5Buttons[j].on === true)
            page5Buttons[j].sound.play();
            j += 1;
    }
        
        
        
        
        
        
        $('#light' + currentBeat).animate({opacity:.25}, 400);
        currentBeat += 1;
        interval = setInterval(runTime, BPMFactor);
}
}
        var interval = setInterval(runTime, BPMFactor);




// changes class of sound_bank_selector
var currentPage = 1;
$('.page_switcher').click(function () {
    currentPage = $(this).attr('id');
    $('.page_switcher').removeClass('selected_bank');
    $(this).addClass('selected_bank');
});
    


// turn on and off buttons and toggle css button classes

$(document).on('click', '#page1Div .square',function() {
    $(this).toggleClass('on_green');
    var currentId = $(this).attr("data-id");
    page1Buttons[currentId].on = !page1Buttons[currentId].on;
});

$(document).on('click', '#page2Div .square',function() {
    $(this).toggleClass('on_blue');
    var currentId = $(this).attr("data-id");
    page2Buttons[currentId].on = !page2Buttons[currentId].on;
});

$(document).on('click', '#page3Div .square',function() {
    $(this).toggleClass('on_pink');
    var currentId = $(this).attr("data-id");
    page3Buttons[currentId].on = !page3Buttons[currentId].on;
});


$(document).on('click', '#page4Div .square',function() {
    $(this).toggleClass('on_teal');
    var currentId = $(this).attr("data-id");
    page4Buttons[currentId].on = !page4Buttons[currentId].on;
});

$(document).on('click', '#page5Div .square',function() {
    $(this).toggleClass('on_yellow');
    var currentId = $(this).attr("data-id");
    page5Buttons[currentId].on = !page5Buttons[currentId].on;
});


/*****
$('.square').click(function() {
    $(this).toggleClass('on');
    var currentId = $(this).attr("data-id");
    page1Buttons[currentId].on = !page1Buttons[currentId].on;
});
****/


var pageArray = []

var fillPageArray = function() {
    var i = 0;
    for (i; i < 4; i ++) {
     pageArray[i] = {
         pageNumber: i + 1,
         instrument: 'bells'
     };
    }}();



//use current insturments
var updateButtons = function() {
    for(var i = 0; i < page1Buttons.length; i ++) {
        var checkButton = "#page1Div .square[data-id='" + i + "']";
        if(page1Buttons[i].on) {
        $(checkButton).addClass("on_green")
        }
    }

    for(var i = 0; i < page2Buttons.length; i ++) {
        var checkButton = "#page2Div .square[data-id='" + i + "']";
        if(page2Buttons[i].on) {
        $(checkButton).addClass("on_blue")
        }
    }

    for(var i = 0; i < page3Buttons.length; i ++) {
        var checkButton = "#page3Div .square[data-id='" + i + "']";
        if(page3Buttons[i].on) {
        $(checkButton).addClass("on_pink")
        }
    }

    for(var i = 0; i < page4Buttons.length; i ++) {
        var checkButton = "#page4Div .square[data-id='" + i + "']";
        if(page4Buttons[i].on) {
        $(checkButton).addClass("on_teal")
        }
    }    

    for(var i = 0; i < page5Buttons.length; i ++) {
        var checkButton = "#page5Div .square[data-id='" + i + "']";
        if(page5Buttons[i].on) {
        $(checkButton).addClass("on_yellow")
        }
    }       
}

    

$(document).on('click', '.page_switcher', function() {
    $.ajax({url: $(this).attr("data-id"),
            success: function(data) {
            $("#page_container").html(data)  
            updateButtons();
            }
})
})



// if instruemtn on = true
// add class to div with the same data id as the instrument



