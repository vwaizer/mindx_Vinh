function Total2Number(){
    var firstNumber=this.document.getElementById("firstNumber").valueAsNumber;
    var secondNumber=this.document.getElementById("secondNumber").valueAsNumber;
   var resultTotal=firstNumber+ secondNumber;
   document.getElementById("resultTotal2Number").innerHTML = resultTotal;
}
function Perimeter(){
    const Pi=3.14;
    var radius=this.document.getElementById("radius").valueAsNumber;
    var resultPerimeter=radius*radius*Pi;
    document.getElementById("resultPerimeter").innerHTML = resultPerimeter;
}
function CheckOddOrEven(){
    var checkNumber=this.document.getElementById("checkOddOrEven").valueAsNumber;
    if(checkNumber%2){
        document.getElementById("resultCheckOddOrEven").innerHTML = "ODD";
    }
    else{
        document.getElementById("resultCheckOddOrEven").innerHTML = "Even";
    }
}
function ConnectString(){
    var firstString=this.document.getElementById("firstString").value;
    var secondString=this.document.getElementById("secondString").value;
    document.getElementById("resultConnectString").innerHTML = firstString+secondString;
}
function FindWordInString(){
    var string=this.document.getElementById("string").value;
    var word=this.document.getElementById("word").value;
    if(string.includes(word)){
        document.getElementById("resultFindWordInString").innerHTML = "True";
    }
    else{
        document.getElementById("resultFindWordInString").innerHTML = "False";
    }
}
function CheckNullOfString(){
    var stringLength=this.document.getElementById("stringLength").value;
    if(stringLength.length){
        document.getElementById("resultCheckNullOfString").innerHTML = "Not Null";
    }
    else
    {
        document.getElementById("resultCheckNullOfString").innerHTML = "Null";
    }
}
function CheckPositiveOrNegative(){
    var checkNumber=this.document.getElementById("checkPositiveOrNegative").valueAsNumber;
    if(checkNumber>0){
        document.getElementById("resultCheckPositiveOrNegative").innerHTML = "Positive";
    }
    else{
        if(checkNumber<0){
            document.getElementById("resultCheckPositiveOrNegative").innerHTML = "Negative";
        }
        document.getElementById("resultCheckPositiveOrNegative").innerHTML = "Not Positive And Negative";
    }
}
function Calculate(){
    var number1=this.document.getElementById("number1").valueAsNumber;
    var number2=this.document.getElementById("number2").valueAsNumber;
    var resultADD=number1+number2;
    var resultMinus=number1-number2;
    var resultMul=number1*number2;
    var resultDiv;
    if(number1 == 0){
        resultDiv=0;
    }
    else{
        if(number2 == 0){
            resultDiv="NaN";
        }
        else{
            resultDiv=number1/number2;
        }
    }
    document.getElementById("resultADD").innerHTML = "ADD: "+resultADD;
    document.getElementById("resultMinus").innerHTML = "Minus: "+resultMinus;
    document.getElementById("resultMul").innerHTML = "Mul: "+resultMul;
    document.getElementById("resultDiv").innerHTML = "Div: "+resultDiv;
}