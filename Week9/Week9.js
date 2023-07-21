const dom=document
// let searchObject=this.document.getElementById("search");
// function searchFunction(){
    

// let searchInput=searchObject.ariaValueMax;
// console.log(searchInput)
// }
// searchObject.addEventListener("change",searchFunction())
let classObject=this.document.getElementsByClassName("navigation");
// function dashBoardFunction(){
//     dom.getElementById('header').innerHTML="halo";
// }
// function teamFunction(){
//    dom.getElementById("header").innerHTML="hello";
// }
// function navFunction(valueObject){
//     console.log(valueObject.innerHTML)
//     dom.getElementById('header').innerHTML=valueObject.innerHTML;
// }
// for(let i=0;i<5;i++){
//     classObject[i].addEventListener("click",navFunction(classObject[i]))
// }

let headerObject=this.document.getElementById('header')
for(let i=0;i<classObject.length;i++){
    let contentObject=classObject[i].innerHTML
     classObject[i].addEventListener("click",function(){
        headerObject.innerHTML=contentObject

    })
}
//b
 let searchObject=this.document.getElementById("search");
 searchObject.addEventListener("change",function(e){
    console.log(e)

    dom.getElementById("context").innerHTML=e.target.value;
 })

