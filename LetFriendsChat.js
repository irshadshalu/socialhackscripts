// Get chat list .
var activeChats=document.getElementsByClassName("emojitext ellipsify");
//var person1="Aiswarya M";
//var person1="Athira Unnikrishnan Gec";
var person2="Felix Josemon";
var person1="Raman NV";

// for send function to select input
function dispatch(target, eventType, char) {
var evt = document.createEvent("TextEvent");    
evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
target.focus();
target.dispatchEvent(evt);
}

// enters input and clicks button
function send(msg){
a=document.getElementsByClassName('input')[1];
dispatch(a,"textInput",msg);
document.getElementsByClassName('icon-send')[0].click();
}


// focuses person 1 and sends msg
function focusP1(msg){
    for(i=0;i<activeChats.length;i++){
    // console.log(activeChats[i].title);
        if(activeChats[i].title==person1){
            activeChats[i].click();
            break;
        }
    }
setTimeout(function(){send(msg);},500);
    return false;
}

// focuses person 2 and sends msg
function focusP2(msg){
    for(i=0;i<activeChats.length;i++){
    // console.log(activeChats[i].title);
        if(activeChats[i].title==person2){
            activeChats[i].click();
            break;
        }
    }
setTimeout(function(){send(msg);},500);
return false;
}

// sends person 1 msg. waits for reply, sends it to person2
function start1(msg){
    focusP1(msg);
    setTimeout(function(){
        var prev=document.getElementsByClassName("emojitext selectable-text").length;
        var timer1=setInterval(function (){
            if(document.getElementsByClassName("emojitext selectable-text").length>prev) {
                console.log(document.getElementsByClassName("emojitext selectable-text")[document.getElementsByClassName("emojitext selectable-text").length-1].innerHTML);

                clearInterval(timer1);
                start2(document.getElementsByClassName('emojitext selectable-text')[document.getElementsByClassName('emojitext selectable-text').length-1].innerHTML);
            }
        },1500);
    },500);
}

// sends person 2 msg. waits for reply, sends it to person1
function start2(msg){
        focusP2(msg);
        setTimeout(function(){
            var prev=document.getElementsByClassName('emojitext selectable-text').length;
            var timer2=setInterval(function (){
                if(document.getElementsByClassName('emojitext selectable-text').length>prev) {
                    console.log(document.getElementsByClassName('emojitext selectable-text')[document.getElementsByClassName('emojitext selectable-text').length-1].innerHTML);
                    clearInterval(timer2);

                    start1(document.getElementsByClassName('emojitext selectable-text')[document.getElementsByClassName('emojitext selectable-text').length-1].innerHTML);
                }
            },1500);
    },500);
}
