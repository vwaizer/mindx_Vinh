const array = [
    [{ name: "Hoàng", score: 2 }, { name: "Long", score: 4 }],
    [{ name: "Tú", score: 100 }, { name: "Linh", score: 10 }],
    [{ name: "Ngọc", score: 1 }, { name: "Long Lê", score: 9 }]
]
function sortedArray(array) {
    let resultArray = []
    array.forEach(item => {
        item.forEach(x => resultArray.push(x))
    });

    resultArray.sort((a, b) => {
        return a.score - b.score;
    })
    console.log(resultArray)
}
sortedArray(array)
//2
let newArray = [
    ["Bai_01", "Bai_02", "Bai_03", "Bai_04"],
    ["Bai_01", "Bai_03"],
    ["Bai_02", "Bai_04", "Bai_01"],
    ["Bai_04", "Bai_02", "Bai_03", "Bai_01"],
    ["Bai_04", "Bai_03", "Bai_02", "Bai_01"]
]
function newArrayFunction(newArray) {
    // let firstObject={}
    // let secondObject={}
    // let thirdObject={}
    // let fourthObject={}
    // let fifthObject={}
    let resultObject = []
    let onlyObject = {}

    // Object.defineProperty(firstObject, proObject, {
    //     value: newArray[0][1],
    //     enumerable: true // set lại giá trị
    // });
    // Object.defineProperty(firstObject, newArray[0][2], {
    //     value: newArray[0][3],
    //     enumerable: true // set lại giá trị
    // });
    // let lengthOfFirstRow= newArray[0].length;
    //     for(let l =0 ;l<lengthOfFirstRow-1;l++){
    //         Object.defineProperty(firstObject,newArray[0][l],{
    //             value: newArray[0][l+1],
    //             enumerable: true
    //         });
    //     }

    //     let lengthOfSecondRow= newArray[1].length;
    //     for(let l =0 ;l<lengthOfSecondRow-1;l++){
    //         Object.defineProperty(secondObject,newArray[1][l],{
    //             value: newArray[1][l+1],
    //             enumerable: true
    //         });
    //     }
    //     let lengthOfThirdRow= newArray[2].length;
    //     for(let l =0 ;l<lengthOfThirdRow-1;l++){
    //         Object.defineProperty(thirdObject,newArray[2][l],{
    //             value: newArray[2][l+1],
    //             enumerable: true
    //         });
    //     }
    //     let lengthOfFourthRow= newArray[3].length;
    //     for(let l =0 ;l<lengthOfFourthRow-1;l++){
    //         Object.defineProperty(fourthObject,newArray[3][l],{
    //             value: newArray[3][l+1],
    //             enumerable: true
    //         });
    //     }
    //     let lengthOfFifthRow= newArray[4].length;
    //     for(let l =0 ;l<lengthOfFifthRow-1;l++){
    //         Object.defineProperty(fifthObject,newArray[4][l],{
    //             value: newArray[4][l+1],
    //             enumerable: true
    //         });

    //     }
    newArray.forEach(item => {
        console.log(item.length)
         let itemLength=item.length
         for(let i =0;i<itemLength;i=i+1) {
                let b=i+1;
                if(b>= itemLength){break;}
              Object.defineProperty(onlyObject, item[i], {
                 value: item[b],
                 enumerable: true
             })
              console.log(onlyObject)
           
         }
        
        
        resultObject.push(onlyObject)
        console.log(resultObject)
         onlyObject={}

    })
    // resultObject.push(firstObject,secondObject,thirdObject,fourthObject,fifthObject);
    

}
newArrayFunction(newArray)

