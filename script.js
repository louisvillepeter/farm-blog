// script.js

const name = document.querySelector ('#name');
const vegtable = document.querySelector ('#vegtable');
const email= document.querySelector ('#email');
const fruit = document.querySelector ('#fruit');
const story = document.querySelector ('#story');
const video = document.getElementById ('video');

document.getElementById("button-submit").addEventListener("click", ValidateEmail, writeStory) ;


function ValidateEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

document.getElementById("button-submit").addEventListener("click", writeStory) ;

function Dropdown_Validation(ddlId) {
    var empty = document.getElementById(ddlId).value;

    if (empty == "0") {
        alert('Please select an item');
        return false;
    }
    return true;
}

function writeStory() {  

    let finishedStory = ""
    finishedStory += "Hello " + name.value + " "
    finishedStory += "I see your enjoy " + vegtable.value + " "
    finishedStory += "and you also like " + fruit.value + " . "
    finishedStory += "Can I email you at " + email.value + "  to offer you a great deal on some "+ fruit.value + " and some " + vegtable.value + "?"

    story.innerHTML = finishedStory
    video.style.display = "block";

}

document.getElementById("button-reset").onclick = function() {
    document.getElementById("email").value = "";
    document.getElementById("fruit").value = "";
    document.getElementById("vegtable").value = "";
    document.getElementById("name").value = "";
    
    video.style.display = "none";
   
    story.innerHTML  = "";
     $('a.stop-video').click(function(){
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
  };

