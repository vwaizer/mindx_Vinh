//1
let newArray = [
    ["Bai_01", "Bai_02", "Bai_03", "Bai_04"],
    ["Bai_01", "Bai_03"],
    ["Bai_02", "Bai_04", "Bai_01"],
    ["Bai_04", "Bai_02", "Bai_03", "Bai_01"],
    ["Bai_04", "Bai_03", "Bai_02", "Bai_01"]
]
function searchObject(key,newArray,resultObject){
    console.log(key)
    for(let i=0;i<newArray.length;i++){
        for(let j=0;j< newArray[i].length;j++){
            let compareChar=String.fromCharCode(key[5].charCodeAt(0)+1);
            let comparedChar=String.fromCharCode(newArray[i][j][5].charCodeAt(0));
            
            if(compareChar  == comparedChar){
                console.log("before");
                Object.defineProperty(resultObject,key,{
                    value:newArray[i][j],
                    enumerable:true
                });
                console.log("chuan bi return");
                return true;
            }
        }
    }
    return false;

}
function newArrayFunction(newArray) {
     let resultObject={};
      let key ="Bai_01"
     let checkVariable=searchObject(key,newArray,resultObject)
     while(checkVariable){
        let finalChar=String.fromCharCode(key[5].charCodeAt(0)+1);
         key=key.replace(key[5],finalChar)
         checkVariable=searchObject(key,newArray,resultObject)
    
    }
          console.log(resultObject)
}

newArrayFunction(newArray)
//2
let profileObject= this.document.getElementById("Profile");
console.log(profileObject)
profileObject.addEventListener("click",function(){
    document.getElementById("context2").style.backgroundColor=" #2F80ED"
    document.getElementById("context2").innerHTML=`
        <div style="text-align:center; color:aliceblue">Success metrics</div>
    <ul>
       <li>Monthly Active Users Sending Invites</li> 
        <li>Invitees per Inviter</li>
       <li> Conversion Rate to New User</li>
       <li>Conversion Rate to New Guest</li> 
        <li>Conversion Rate to New Host</li>
        <li>Revenue Impact Potential</li>
    </ul>

    `
})
let homeObject=this.document.getElementById("Home");
homeObject.addEventListener("click",function(){
    document.getElementById("context2").innerHTML=``
    document.getElementById("context2").style.backgroundColor=""
})

let inputObject=this.document.getElementsByClassName("input")
inputObject[0].addEventListener("change",function(e){

    document.getElementById("context1").innerHTML+=e.target.value+"<br>";
    document.getElementById("context1").style.color="#2474E5";
})