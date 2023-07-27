function limit(element)
{
    var max_chars = 0;
         
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
var countDownDate = new Date("Jul 28, 2023 16:00:00").getTime();

    
    var timeFunction = setInterval(function() {

    var now = new Date().getTime();
    var timeLeft = countDownDate - now;
        
  
    timeLeft=Math.floor((timeLeft % (1000 * 60)) / 1000);
    // Display the message when countdown is over
    if (timeLeft == 0) {
        clearInterval(timeFunction);
        document.getElementById("timeLeft").innerHTML = "TIME UP!!";
        document.getElementById("inputChar").disabled=true;
        document.getElementById("button").disabled=true;

    }
    else{
       
        document.getElementById("timeLeft").innerHTML= `Time left: ${timeLeft}` ;
    }
    }, 1000);
let answer="abcdefg";
let counterButton=3;
let correctCounter=7;
let inputString="";
function checkFunction(){
    let input=document.getElementById("inputChar").value;
    if(input == ""){
        return;
    }
    if(answer.includes(input) == true && inputString.includes(input) == false){
        inputString+=input;
        document.getElementById(`${input}`).innerHTML=input;
        correctCounter--;
        if(correctCounter == 0)
        {
            alert("Thành công");
            return;
        }
    }
    else{
        counterButton--;
        
        document.getElementById("counter").innerHTML=`You have <span style=" color: red;">${counterButton} </span> guess(es)remaining`
        if(counterButton == 0)
        {
            document.getElementById("inputChar").disabled=true;
            document.getElementById("button").disabled=true;
        }
    }
}
