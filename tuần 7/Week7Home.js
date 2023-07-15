//1
{
    this.document.write("1 <br>")
    let age = 18;

    if (age >= 18 && typeof age == "number") {
        this.document.write("Bạn đủ tuổi lái xe");
    }
    else {
        this.document.write("Bạn chưa đủ tuổi lái xe");
    }

}
//2
{
    this.document.write("<br>2<br>")
    let numberOfQuestion2 = -25;
    if (typeof numberOfQuestion2 == "number") {
        if (numberOfQuestion2 > 0) {
            this.document.write(numberOfQuestion2 + " là số dương");
        }
        else if (numberOfQuestion2 < 0) {
            this.document.write(numberOfQuestion2 + " là số âm");
        }
        else
        {
            this.document.write("là số 0");
        }
    }
    else {
        this.document.write("không phải là số ")
    }
}
//3
{
    this.document.write("<br>3<br>")
    let numberOfQuestion3 = 15;

    if (numberOfQuestion3 % 3) {
        this.document.write(numberOfQuestion3 + " không chia hết cho 3 và 5")
    }
    else if (numberOfQuestion3 % 5) {
        this.document.write(numberOfQuestion3 + " không chia hết cho 3 và 5")
    }
    else {
        this.document.write(numberOfQuestion3 + " chia hết cho 3 và 5 ")
    }
}
//4
{
    this.document.write("<br>4 <br>");
    let dayOfWeek = 7;
    switch (dayOfWeek) {
        case 1: this.document.write("Thứ 2"); break;
        case 2: this.document.write("thứ 3"); break;
        case 3: this.document.write("thứ 4"); break;
        case 4: this.document.write("thứ 5"); break;
        case 5: this.document.write("thứ 6"); break;
        case 6: this.document.write("thứ 7"); break;
        case 7: this.document.write("chủ nhật"); break;
        default: this.document.write("Không phải ngày trong tuần ");
    }
}
//5
{
    this.document.write("<br>5 <br>")
    let nOfQuestion5 = 25;
    let sum = 0;
    for (let i = 0; i < nOfQuestion5; i++) {
        sum = sum + i;
    }
    this.document.write("kết quả là " + sum);
}
//6
{
    this.document.write("<br>6<br> ")
    let resultOfQuestion6 = "1";
    for (let i = 2; i < 11; i++) {
        if (i == 5) {
            continue;
        }
        resultOfQuestion6 = resultOfQuestion6 + "," + i;
    }
    this.document.write(resultOfQuestion6);
}
//7
{
    this.document.write("<br> 7 <br>")
    for (let i = 1; i <= 20; i++) {
        if (i % 3) {

        }
        else {
            this.document.write(i + " là số chia hết cho 3")
            break;
        }
    }
}
//8 
{
    this.document.write("<br> 8 <br>")
    this.document.write("câu lệnh lặp lại 100 lần vì i chạy từ 0 đến 99")
}
//9
{   this.document.write("<br> 9 <br>")
    this.document.write("do-while sẽ là trong vòng lặp rồi kiểm tra thay vì kiểm tra xong mới chạy vòng lặp như while")
}
 