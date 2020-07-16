// script.js
//

const quest = document.querySelector ('#input-quest');
const love = document.querySelector ('#input-love');
const foe= document.querySelector ('#input-enemy');


const food = document.querySelector ('#food');
const job = document.querySelector ('#job');
const equip = document.querySelector ('#equip');

const story = document.querySelector ('#story');

const input = document.querySelector('#form');
const output = document.querySelector('#output');


const submit = document.querySelector('#button-cancel');
submit.addEventListener("click",y) ;


const submit = document.querySelector('#button-submit');
submit.addEventListener("click",s) ;




function y
(){
 
var select = document.getElementById('food');
var foodValue = parseInt(select.options[select.selectedIndex].value);

var select = document.getElementById('job');
var jobValue = parseInt(select.options[select.selectedIndex].value);

var select = document.getElementById('equip');
var equipValue = parseInt(select.options[select.selectedIndex].value);
const roll = Math.abs( foodValue - equipValue + jobValue);
}

function s(){

    
if (roll===0){

    let finishedStory = ""
    finishedStory += "You have choosen to 0 " + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===1){

    let finishedStory = ""
    finishedStory += "You have choosen to 1 " + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===2){

    let finishedStory = ""
    finishedStory += "You have choosen to 2 " + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===3){

    let finishedStory = ""
    finishedStory += "You have choosen to 3 " + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===4){

    let finishedStory = ""
    finishedStory += "You have choosen to 4" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===5){

    let finishedStory = ""
    finishedStory += "You have choosen to  5" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===6){

    let finishedStory = ""
    finishedStory += "You have choosen to 6 " + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===7){

    let finishedStory = ""
    finishedStory += "You have choosen to  7" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===8){

    let finishedStory = ""
    finishedStory += "You have choosen to 8" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===9){

    let finishedStory = ""
    finishedStory += "You have choosen to 9" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===10){

    let finishedStory = ""
    finishedStory += "You have choosen to 10" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===11){

    let finishedStory = ""
    finishedStory += "You have choosen to 11" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else if ( roll===12){

    let finishedStory = ""
    finishedStory += "You have choosen to 12" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
else {

    let finishedStory = ""
    finishedStory += "You have choosen to 13" + quest.value + " . "
    finishedStory += "You have choosen to " + job.value + " . "
    finishedStory += "You have choosen to " + love.value + " . "
    finishedStory += "You have choosen to " + equip.value + " . "
    finishedStory += "You have choosen to " + quest.value + " . "

    story.innerHTML = finishedStory
}
}
// const again = document.querySelector('#again');
// again.addEventListener("click", resetPage, false);
// window.addEventListener("keydown", keydownHandler, false);

// function keydownHandler(event) {
//     console.log("Enter key pressed");
// }
// document.querySelector('#input-quest').focus();
// const submit = document.getElementById('button-submit');

console.log(roll);
 
// function checkComplete()