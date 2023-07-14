{
    var firstNumber=6;
    var secondNumber=5;
   var resultTotal=firstNumber+ secondNumber;
   document.getElementById("resultTotal2Number").innerHTML = resultTotal;
}
{
    const PI=3.14;
    var radius=56;
    var resultPerimeter=radius*radius*PI;
    document.getElementById("resultPerimeter").innerHTML = resultPerimeter;
}
{
    var checkNumber=5;
    if(checkNumber%2){
        document.getElementById("resultCheckOddOrEven").innerHTML = "ODD";
    }
    else{
        document.getElementById("resultCheckOddOrEven").innerHTML = "Even";
    }
}
{
    var firstString="hahah";
    var secondString="adada";
    document.getElementById("resultConnectString").innerHTML = firstString+secondString;
}
{
    var string="yeah yeah";
    var word="h";
    if(string.includes(word)){
        document.getElementById("resultFindWordInString").innerHTML = "True";
    }
    else{
        document.getElementById("resultFindWordInString").innerHTML = "False";
    }
}
{
    var stringLength="adadadsadsda";
    if(stringLength.length){
        document.getElementById("resultCheckNullOfString").innerHTML = "Not Null";
    }
    else
    {
        document.getElementById("resultCheckNullOfString").innerHTML = "Null";
    }
}
{
    var checkNumber=58;
    if(checkNumber>0){
        document.getElementById("resultCheckPositiveOrNegative").innerHTML = "Positive";
    }
    else{
        if(checkNumber<0){
            document.getElementById("resultCheckPositiveOrNegative").innerHTML = "Negative";
        }
        else{
        document.getElementById("resultCheckPositiveOrNegative").innerHTML = "Not Positive And Negative";
        }
    }
}
{
    var number1=26;
    var number2=15;
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