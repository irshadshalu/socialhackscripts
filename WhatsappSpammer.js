
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

// For loop to spam. edit to customize

for(i=0;i<10;i++) 
    send("How you doin? " +i);