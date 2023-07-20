//a
let A=["Apple","Strawberry","Banana"]
A.splice(1,1,"Rose","Tulip")
this.document.write(A)
//b
let B=["Apple_Version1","Strawberry_Version1","Banana_Version1"]
let C= A
let i=0
while(i <B.length){
    C.push(B[i])
    i++
}
this.document.write("<br>"+C+"<br>")
//c
C.splice(2,1)
this.document.write("<br>"+C+"<br>")
//d
let objArray=[
    {
        name: "dad",
        age: 18
    },
    {
        name: "mom",
        age:19
    },
    {
        name:"brother",
        age:20
    },
    {
        name:"sister",
        age:22
    },
    {
        name:"children",
        age:30
    },
]
let nameArray="";
let counterOfNameArray=0;
while(counterOfNameArray<5){
    nameArray=nameArray+objArray[counterOfNameArray].name+" ";
    counterOfNameArray++;
}
this.document.write("<br>"+nameArray+"<br>")
let averageAge=0
let counterOfAverageAge=0
while(counterOfAverageAge<5){
    averageAge=averageAge+objArray[counterOfAverageAge]['age']

    counterOfAverageAge++;
}

this.document.write("average age: "+ averageAge/5)
//2
const secondObjectArray=[
    {
        name:"Ngoc",
        homework:
        [
            {
                
                    cauA:2,
                    cauB:3
                
            },
            {
                
                    cauA:4,
                    cauB:5
                
            },
            {
                
                    cauA:6,
                    cauB:7
                
            }
        ]

    }
]

function returnObjectValue(secondObjectArray,weekNumber){
     let resultOfFunction =[] 
    // switch (weekNumber){
    //     case 1: resultOfFunction=secondObjectArray[0].homework[0].Week1;break;
    //     case 2: resultOfFunction=secondObjectArray[0].homework[1].Week2;break;
    //     case 3: resultOfFunction=secondObjectArray[0].homework[2].Week3;break;
    // }
    // return "cauA: "+resultOfFunction.cauA+" cauB:"+resultOfFunction.cauB
    secondObjectArray[0].homework.forEach(item => {
        resultOfFunction.push( item.cauA +" "+ item.cauB)
        
    })
    console.log(resultOfFunction)
}
// this.document.write("<br>"+returnObjectValue(secondObjectArray,3))
this.document.write(secondObjectArray)

