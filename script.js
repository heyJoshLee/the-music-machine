/*global $:false */

var globalVars = {
    playing: true,
    autoplay: true,
    currentPage: '1',
};



$('.pauseButton').click(function() {
    $(this).toggleClass('play');
    globalVars.playing = !globalVars.playing;
});


$("#auto_play_button").click(function() {
  
    globalVars.autoplay = !globalVars.autoplay;
    if (globalVars.autoplay) {
      $("#auto_play_span").html("On");
    } else {
         $("#auto_play_span").html("Off");
    }
});

// creates the Button object
function Button(x,y, sound, on) {
    this.x = x,
    this.y = y,
    this.sound = sound, 
    this.on = false,
    this.muted = false
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
            urls: [addSound],
            volume: 0.2
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
            urls: [addSound],
            volume: 1.4
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
    $('.page').hide();
    $('#page1Div').show();
    $('.mute').hide();
    $('.clear').hide();
    $('#mute_page' + globalVars.currentPage).show();
    $('#clear_page' + globalVars.currentPage).show();
});

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
    if (globalVars.playing) {
    clearInterval(interval);
    BPMFactor = 60000 / BPM;
    
    if(currentBeat > 16) {
        currentBeat = 1;
    }
    
    $('.light' + currentBeat).animate({opacity:1}, 200);
    $('#showTime').html(currentBeat);
    var j = 0;
        while(j < page1Buttons.length) {
            if (page1Buttons[j].x === currentBeat && page1Buttons[j].on === true && page1Buttons[j].muted === false)
                page1Buttons[j].sound.play();
                j += 1;
        }
    j = 0;
    while(j < page2Buttons.length) {
        if (page2Buttons[j].x === currentBeat && page2Buttons[j].on === true && page2Buttons[j].muted === false)
            page2Buttons[j].sound.play();
            j += 1;
    }
    j = 0;
    while(j < page3Buttons.length) {
        if (page3Buttons[j].x === currentBeat && page3Buttons[j].on === true && page3Buttons[j].muted === false)
            page3Buttons[j].sound.play();
            j += 1;
    }
    j = 0;
    while(j < page4Buttons.length) {
        if (page4Buttons[j].x === currentBeat && page4Buttons[j].on === true && page4Buttons[j].muted === false)
            page4Buttons[j].sound.play();
            j += 1;
    }
    j = 0;
    while(j < page5Buttons.length) {
        if (page5Buttons[j].x === currentBeat && page5Buttons[j].on === true && page5Buttons[j].muted === false)
            page5Buttons[j].sound.play();
            j += 1;
    }
        
        
        
        
        
        
        $('.light' + currentBeat).animate({opacity:0.25}, 400);
        currentBeat += 1;
        interval = setInterval(runTime, BPMFactor);
}
};
        var interval = setInterval(runTime, BPMFactor);




// changes class of sound_bank_selector

$('.page_switcher').click(function () {
    globalVars.currentPage = $(this).attr('id');
    $('.page_switcher').removeClass('selected_bank');
    $(this).addClass('selected_bank');
    $('.mute').hide();
    $('.clear').hide();
    $('#mute_page' + globalVars.currentPage).show();
    $('#clear_page' + globalVars.currentPage).show();
});
    


// turn on and off buttons and toggle css button classes

var down = false;
    $(document).mousedown(function() {
    down = true;
    }).mouseup(function() {
    down = false;  
    });
               
               
         
               

$(document).on('click', '#page1Div .square',function() {
    $(this).toggleClass('on_green');
    var currentId = $(this).attr("data-id");
    if(globalVars.autoplay && page1Buttons[currentId].on === false) {
        page1Buttons[currentId].sound.play();
    }
    page1Buttons[currentId].on = !page1Buttons[currentId].on;
    
});
 $('#page1Div .square').mouseover(function() {
       if(down == true) {
           $(this).addClass('on_green');
           var currentId = $(this).attr("data-id");
           if(globalVars.autoplay && page1Buttons[currentId].on === false) {
           page1Buttons[currentId].sound.play();
           }
           page1Buttons[currentId].on = !page1Buttons[currentId].on;
       } 
    });
         



$(document).on('click', '#page2Div .square',function() {
    $(this).toggleClass('on_blue');
    var currentId = $(this).attr("data-id");
    if(globalVars.autoplay && page2Buttons[currentId].on === false) {
        page2Buttons[currentId].sound.play();
    }
    page2Buttons[currentId].on = !page2Buttons[currentId].on;
});
 $('#page2Div .square').mouseover(function() {
       if(down == true) {
           $(this).addClass('on_blue');
           var currentId = $(this).attr("data-id");
           if(globalVars.autoplay && page2Buttons[currentId].on === false) {
           page2Buttons[currentId].sound.play();
           }
           page2Buttons[currentId].on = !page2Buttons[currentId].on;
       } 
    });
         

$(document).on('click', '#page3Div .square',function() {
    $(this).toggleClass('on_pink');
    var currentId = $(this).attr("data-id");
    if(globalVars.autoplay && page3Buttons[currentId].on === false) {
        page3Buttons[currentId].sound.play();
    }
    page3Buttons[currentId].on = !page3Buttons[currentId].on;
});
$('#page3Div .square').mouseover(function() {
       if(down == true) {
           $(this).addClass('on_pink');
           var currentId = $(this).attr("data-id");
           if(globalVars.autoplay && page3Buttons[currentId].on === false) {
           page3Buttons[currentId].sound.play();
           }
           page3Buttons[currentId].on = !page3Buttons[currentId].on;
       } 
    });


$(document).on('click', '#page4Div .square',function() {
    $(this).toggleClass('on_teal');
    var currentId = $(this).attr("data-id");
    if(globalVars.autoplay && page4Buttons[currentId].on === false) {
        page4Buttons[currentId].sound.play();
    }
    page4Buttons[currentId].on = !page4Buttons[currentId].on;
});
$('#page4Div .square').mouseover(function() {
       if(down == true) {
           $(this).addClass('on_teal');
           var currentId = $(this).attr("data-id");
           if(globalVars.autoplay && page4Buttons[currentId].on === false) {
           page4Buttons[currentId].sound.play();
           }
           page4Buttons[currentId].on = !page4Buttons[currentId].on;
       } 
    });


$(document).on('click', '#page5Div .square',function() {
    $(this).toggleClass('on_yellow');
    var currentId = $(this).attr("data-id");
    if(globalVars.autoplay && page5Buttons[currentId].on === false) {
        page5Buttons[currentId].sound.play();
    }
    page5Buttons[currentId].on = !page5Buttons[currentId].on;
});
$('#page5Div .square').mouseover(function() {
       if(down == true) {
           $(this).addClass('on_yellow');
           var currentId = $(this).attr("data-id");
           if(globalVars.autoplay && page5Buttons[currentId].on === false) {
           page5Buttons[currentId].sound.play();
           }
           page5Buttons[currentId].on = !page5Buttons[currentId].on;
       } 
    });



var pageArray = [];

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
    var i;
    var checkButton;
    for(i = 0; i < page1Buttons.length; i ++) {
        checkButton = "#page1Div .square[data-id='" + i + "']";
        if(page1Buttons[i].on) {
        $(checkButton).addClass("on_green");
        }
    }

    for(i = 0; i < page2Buttons.length; i ++) {
        checkButton = "#page2Div .square[data-id='" + i + "']";
        if(page2Buttons[i].on) {
        $(checkButton).addClass("on_blue");
        }
    }

    for(i = 0; i < page3Buttons.length; i ++) {
        checkButton = "#page3Div .square[data-id='" + i + "']";
        if(page3Buttons[i].on) {
        $(checkButton).addClass("on_pink");
        }
    }

    for(i = 0; i < page4Buttons.length; i ++) {
        checkButton = "#page4Div .square[data-id='" + i + "']";
        if(page4Buttons[i].on) {
        $(checkButton).addClass("on_teal");
        }
    }    

    for(i = 0; i < page5Buttons.length; i ++) {
        checkButton = "#page5Div .square[data-id='" + i + "']";
        if(page5Buttons[i].on) {
        $(checkButton).addClass("on_yellow");
        }
    }       
};

    
$(".page_switcher").click(function() {
    $(".page").hide();
    var useID = "page" + $(this).attr('id') + "Div";
    $('#' + useID).show(); 
    
});



$('.mute').click(function() {
    $(this).toggleClass('button_off');
    var k;
    switch (globalVars.currentPage){
        case '1':
            k = 0;
            for(k; k < page1Buttons.length; k++){
                page1Buttons[k].muted = !page1Buttons[k].muted;
            }
            break;
        case '2':
            k = 0;
            for(k; k < page2Buttons.length; k++){
                page2Buttons[k].muted = !page2Buttons[k].muted;
            }
            break;
        case '3':
            k = 0;
            for(k; k < page3Buttons.length; k++){
                page3Buttons[k].muted = !page3Buttons[k].muted;
            }
            break;
        case '4':
            k = 0;
            for(k; k < page4Buttons.length; k++){
                page4Buttons[k].muted = !page4Buttons[k].muted;
            }
            break;
        case '5':
            k = 0;
            for(k; k < page5Buttons.length; k++){
                page5Buttons[k].muted = !page5Buttons[k].muted;
            }
            break;    
    }
});

$('.clear').click(function() {
    var k;
    switch (globalVars.currentPage){
        case '1':
            k = 0;
            for(k; k < page1Buttons.length; k++){
                page1Buttons[k].on = false;
            }
                $('#page1Div .square').removeClass('on_green');
            break;
        case '2':
            k = 0;
            for(k; k < page2Buttons.length; k++){
                page2Buttons[k].on = false;
            }
                $('#page2Div .square').removeClass('on_blue');
            break;
        case '3':
            k = 0;
            for(k; k < page3Buttons.length; k++){
                page3Buttons[k].on = false;
            }
                $('#page3Div .square').removeClass('on_pink');
            break;
         case '4':
            k = 0;
            for(k; k < page4Buttons.length; k++){
                page4Buttons[k].on = false;
            }
                $('#page4Div .square').removeClass('on_teal');
            break;
        case '5':
            k = 0;
            for(k; k < page5Buttons.length; k++){
                page5Buttons[k].on = false;
            }
                $('#page5Div .square').removeClass('on_yellow');
            break;
    }});
            









