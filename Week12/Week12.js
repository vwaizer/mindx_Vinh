function limit(element)
{
    var max_chars = 0;
         
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}

function timeFunction(timeLeft){
    // var countDownDate = new Date("Jul 30, 2023 1:00:00").getTime();

    
     var timeFunction = setInterval(function() {

    // var now = new Date().getTime();
    // var timeLeft = countDownDate - now;
        timeLeft--;
  
    // timeLeft=Math.floor((timeLeft % (1000 * 60)) / 1000);
    // Display the message when countdown is over
    if (timeLeft == 0 ||localStorage.getItem("win")==5) {
        if( localStorage.getItem("win")==5){
            clearInterval(timeFunction);
      
            document.getElementById("inputChar").disabled=true;
            document.getElementById("button").disabled=true;
    
        }
        else{
            clearInterval(timeFunction);
        document.getElementById("timeLeft").innerHTML = "TIME UP!!";
        document.getElementById("inputChar").disabled=true;
        document.getElementById("button").disabled=true;
        }
        

    }
    else{
       
        document.getElementById("timeLeft").innerHTML= timeLeft ;
    }
    }, 1000);
}
let answer="caphe";
let counterButton=3;
let correctCounter=answer.length;
let inputString="";
timeFunction(59);
function checkFunction(){
    let input=document.getElementById("inputChar").value;
    if(input == ""){
        return;
    }
    if(answer.includes(input) == true && inputString.includes(input) == false){
        inputString+=input;
       
        correctCounter--;
        document.getElementById("beneathButton").innerHTML="bạn nhập đúng";
        document.getElementById(`${input}`).innerHTML=input;
        if(correctCounter == 0)
        {
            clearInterval(timeFunction);
            document.getElementById("inputChar").disabled=true;
            document.getElementById("button").disabled=true;
            alert("Thành công");
            localStorage.setItem("win",5);

            return;
        }
    }
    else{
        counterButton--;
        document.getElementById("beneathButton").innerHTML="bạn nhập sai";
        document.getElementById("counter").innerHTML=`You have <span style=" color: red;">${counterButton} </span> guess(es)remaining`
        if(counterButton == 0)
        {
            clearInterval(timeFunction);
            document.getElementById("inputChar").disabled=true;
            document.getElementById("button").disabled=true;
        }
    }
}
