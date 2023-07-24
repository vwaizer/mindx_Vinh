

function changeFunction(){
    
        document.getElementsByClassName("replaceable")[0].style.display="none";
        document.getElementsByClassName("replaceable")[1].style.display="none";
        document.getElementsByClassName("replace")[0].style.display="flex";
        document.getElementsByClassName("replace")[1].style.display="flex";
    
}
let checkedItem=localStorage.getItem("checked");
   console.log(checkedItem);
   if(checkedItem){
    changeFunction();
   }
//changeFunction()
function loginFunction(){
    window.location.href="/mindx_Vinh/Week10/Week10LoginPage.html"
   

}

let userName="abcd";
localStorage.setItem("username",userName)
let password="1234";
localStorage.setItem("password",password)


function checkFunction()
{
    let inputUserName=document.getElementById("username").value;
    let inputPassword=document.getElementById("password").value;
    
    if(inputUserName == userName && inputPassword==password ){
    
       
        
         let checked=true;
         
         localStorage.setItem("checked",checked)
         window.location.href="/mindx_Vinh/Week10/Week10FirstPage.html"
         
         
        
    }
    else{
        let contextObject=document.getElementById("contextLogin");
        let childObject=document.createElement("div");
        childObject.innerHTML=alert("Dang nhap that bai");
        contextObject.appendChild(childObject);
        let checked=false;
        localStorage.setItem("checked",checked);
        window.location.href="/mindx_Vinh/Week10/Week10FirstPage.html"
    }
}
//-----search
if(document.getElementById("search")){
let searObject=document.getElementById("search");
let listOfSearch=[];
searObject.addEventListener("change",function(e){
        if(listOfSearch.length <=5){
            console.log(e.target.value);
            listOfSearch.push(e.target.value);
            console.log(listOfSearch)
            document.getElementById("context").innerHTML+=e.target.value+"<br>";
        }
        else{
            alert("het dung luong");
        }
    
})
localStorage.setItem("listOfSearch",listOfSearch);}


// if(window.location=="/mindx_Vinh/Week10/Week10FirstPage.html" && checkedVariable== true){
//         let replaceWithText=document.createElement("div");
//     let replaceJustImg=document.createElement("div");
//     let listOfClass=document.getElementsByClassName("replaceable");
   
//         replaceWithText.innerHTML=
//         `<img src="https://marketplace.canva.com/EAE85lQzbGg/1/0/1600w/canva-%C4%91en-v%C3%A0-tr%E1%BA%AFng-v%C3%B2ng-tr%C3%B2n-logo-c%C3%A1-nh%C3%A2n-7C4em2-vmHs.jpg"
//         width="50%">
//     <div class="container4">
        
//         <p style="color: white; font-weight: bold;">Iris Paul</p>
//         <p><a href="" style="color: white; ">View Profile</a></p>
//         `
//         replaceJustImg.innerHTML=`<img src="https://marketplace.canva.com/EAE85lQzbGg/1/0/1600w/canva-%C4%91en-v%C3%A0-tr%E1%BA%AFng-v%C3%B2ng-tr%C3%B2n-logo-c%C3%A1-nh%C3%A2n-7C4em2-vmHs.jpg"
//         width="50%">`
//         listOfClass[0].innerHTML=``;
//         listOfClass[1].innerHTML=``;
//         listOfClass[0].appendChild(replaceJustImg)
//         listOfClass[1].appendChild(replaceWithText)
// }



