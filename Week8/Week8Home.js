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
 
    let resultObject = []
    let onlyObject = {}

   
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
            //   console.log(onlyObject)
           
         }
        
        
        resultObject.push(onlyObject)
        
         onlyObject={}

    })
    console.log(resultObject)
    

}
newArrayFunction(newArray)

