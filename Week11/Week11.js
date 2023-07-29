 import { addFunction,minusFunction,multiFunction,divideFunction } from "./lib.js";
 let N=20;
let evenOrOdd=(N)=>{
    if(N%2 ==0){
        console.log("Even");
    }
    else{
        console.log("odd");

}
}
let PositiveOrNegative=(numberOfQuestion2)=>{
    if (typeof numberOfQuestion2 == "number") {
        if (numberOfQuestion2 > 0) {
            console.log(numberOfQuestion2 + " là số dương");
        }
        else if (numberOfQuestion2 < 0) {
            console.log(numberOfQuestion2 + " là số âm");
        }
        else
        {
            console.log("là số 0");
        }
    }
    else {
        console.log("không phải là số ")
    }
}
let NTFunction=(nOfQuestion2)=>{
    if (nOfQuestion2 > 2 && typeof nOfQuestion2 == "number") {
        let check = true;
        for (let i = 2; i < nOfQuestion2; i++) {

            if (nOfQuestion2 % i == 0) {
                check = false;
                break;
            }
        }
        if (check) {
            console.log(nOfQuestion2 + " là số nguyên tố ");
        }
        else {
            console.log(nOfQuestion2 + " không là số nguyên tố ");
        }

    }
    else if (nOfQuestion2 == 2 && typeof nOfQuestion2 == "number") {
        console.log("2 là số nguyên tố ");
    }
    else { console.log(nOfQuestion2 + " không là số nguyên tố "); }
}
let NTLowerThanN=(N)=>{
    for(let i=2;i<N;i++)
        {
            let checkNumber=true;
            
            for(let j=2;j<i;j++){
                if (i % j == 0) {
                   checkNumber=false;
                   break;
                }
                

            }
            if (checkNumber){
                console.log("SỐ nguyên tố dưới "+i);
            }

        }
}
let evenZeroToN=(N)=>{
    for(let i=0;i<N;i=i+2){
        console.log(i);
    }
}
let oddOneToN=(N)=>{
    for(let i =1;i<N;i=i+2){
        console.log(i);
    }
}
let primeNumberToN=(input)=>{
    if (input <= 0 || typeof input != "number") {
        console.log(" không có số chính phương");
    }
    else {
        let counter=0;
        for (let i = 1; i <= input; i++) {
            if (i * i <= input) {

                counter++;

            }
        }
        console.log(counter);
    }
}
console.log("even or odd");
 evenOrOdd(N);
 console.log("positive or negative");
PositiveOrNegative(N);
console.log("số nguyên tố")
NTFunction(N);
console.log(`số nguyên tố nhỏ hơn ${N}`);
 NTLowerThanN(N);
 console.log(`số chẵn tới ${N} `);
 evenZeroToN(N);
 console.log(`số lẻ tới ${N}`);
 oddOneToN(N);
 console.log(`số chính phương dưới ${N}`);
 primeNumberToN(N);
// //2------------------------------
console.log("câu 2");
let dayOfMonth=(N)=>{
    let dayOfWeek = N;
    switch (dayOfWeek) {
        case 1: console.log("31 ngày"); break;
        case 2: console.log("28 hoặc 29 ngày"); break;
        case 3: console.log("31 ngày"); break;
        case 4: console.log("30 ngày"); break;
        case 5: console.log("31 ngày"); break;
        case 6: console.log("30 ngày"); break;
        case 7: console.log("31 ngày"); break;
        case 8: console.log("31 ngày"); break;
        case 9: console.log("30 ngày"); break;
        case 10: console.log("31 ngày"); break;
        case 11: console.log("30 ngày"); break;
        case 12: console.log("31 ngày"); break;
        default: console.log("Không phải tháng trong năm ");
    }
}
dayOfMonth(2);
dayOfMonth(8);
dayOfMonth(12);
// //3----------------------------------
console.log("câu 3");
let a =Math.floor(Math.random()*2001)+1;
let b;
if(Math.random() < 0.5){
     b=Math.floor(Math.random()*-101);

}
else{
     b=Math.floor(Math.random()*101);
}
console.log(`a= ${a} ;b= ${b}`);
console.log("add:"+addFunction(a,b));
console.log("minus:"+minusFunction(a,b));
console.log("multi:"+multiFunction(a,b));
console.log("divide:"+divideFunction(a,b));

