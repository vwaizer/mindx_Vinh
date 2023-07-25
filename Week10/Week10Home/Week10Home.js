let inputData=[];

function submitFunction(){
    
    
   inputData.push(document.getElementById("input").value);
   
    localStorage.setItem("inputData",inputData)
    displayFunction()
}
function checkFunction(getData){
    let checkedData=getData[getData.length-1];
    for(let i=0;i<getData.length-1;i++){
        if(checkedData== getData[i]){
            return true;  
            
        }

    }
    return false;
}
function displayFunction(){
    let getData=[];
    getData=sortedFunction(inputData);

        if(checkFunction(getData)){
            let outputData=getData[getData.length-1];
            console.log(outputData)
            let index=outputData+"Index";
            document.getElementById(index).style.textDecoration="line-through";
            getData.pop();
        }
        else{
            
            let outputData=getData[getData.length-1];
            console.log(outputData)
            document.getElementById("context").innerHTML+=`<li id="${outputData}Index">${outputData}</li>`;
        }
    

}
function sortedFunction(inputData){
    let resultData=[];
    for(let i =0;i<inputData.length;i++){
        if(inputData[i] == ','){
            continue;
        }
        else
        {resultData.push(inputData[i]);}
    }
    return resultData;
}

