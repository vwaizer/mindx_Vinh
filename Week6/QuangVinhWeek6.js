//2
var age = 18;
var nameSchool;
var studentScore=10;
let radius=5;
const PI=3.14;
let studentName;
//3
age="MindX Dream";
//4
var stringNumber1="Điểm 10";
var stringNumber2=" là điểm ";
var stringNumber3="tuyệt đối";
this.document.write(stringNumber1+stringNumber2+stringNumber3+"<br>");
//5
var result;
result=Math.pow(radius,2)*PI;
this.document.write("Diện tích hình tròn :"+result+"<br>");
//6
// tên của bạn 
var friendA={
    name:"A",
    age:18
}
var friendB={
    name:"Minh",
    age:19
}
var friendC={
    name:"Hoàng",
    age:20
}
var friendD={
    name:"Nhân",
    age:21
}
var friendE={
    name:"Tâm",
    age:22
}



//nối tên và tuổi
this.document.write("Tên: "+friendA.name+" Tuổi: "+friendA.age+"<br>");
this.document.write("Tên: "+friendB.name+" Tuổi: "+friendB.age+"<br>");
this.document.write("Tên: "+friendC.name+" Tuổi: "+friendC.age+"<br>");
this.document.write("Tên: "+friendD.name+" Tuổi: "+friendD.age+"<br>");
this.document.write("Tên: "+friendE.name+" Tuổi: "+friendE.age+"<br>");

//in chieu dai ten

var resultA= friendA.name.length;
this.document.write("chiều dài tên: "+resultA+"<br>");
var resultB= friendB.name.length;
this.document.write("chiều dài tên: "+resultB+"<br>");
var resultC= friendC.name.length;
this.document.write("chiều dài tên: "+resultC+"<br>");
var resultD= friendD.name.length;
this.document.write("chiều dài tên: "+resultD+"<br>");
var resultE= friendE.name.length;
this.document.write("chiều dài tên: "+resultE+"<br>");
//in tuoi trung binh
var resultAvegareAge=(friendA.age+ friendB.age+ friendC.age+friendD.age+friendE.age)/5
this.document.write("Tuổi trung bình : "+resultAvegareAge+"<br>");
//in ra màn hình tổng số tuổi
resultTotalAge =resultAvegareAge*5;
this.document.write("tổng số tuổi: "+resultTotalAge+"<br>");

