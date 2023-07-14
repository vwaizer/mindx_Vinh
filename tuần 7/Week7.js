//1
{
    let NOfQuestion1 = 3.15569;

    if (typeof NOfQuestion1 == "number") {
        if (NOfQuestion1 - (Math.ceil(NOfQuestion1)) < 1) {
            console.log(NOfQuestion1 + " không là số nguyên");
        }
        else {
            console.log(NOfQuestion1 + " là số nguyên");
        }
    }
    else {
        console.log(NOfQuestion1 + " không là số nguyên");
    }
}
//2
{
    let NOfQuestion2 = 2;
    if (NOfQuestion2 > 2 && typeof NOfQuestion2 == "number") {
        let check = true;
        for (let i = 2; i < NOfQuestion2; i++) {

            if (NOfQuestion2 % i == 0) {
                check = false;
                break;
            }
        }
        if (check) {
            console.log(NOfQuestion2 + " là số nguyên tố ");
        }
        else {
            console.log(NOfQuestion2 + " không là số nguyên tố ");
        }

    }
    else if (NOfQuestion2 == 2 && typeof NOfQuestion2 == "number") {
        console.log("2 là số nguyên tố ");
    }
    else { console.log(NOfQuestion2 + " không là số nguyên tố "); }
}
//3
{
    
    let number = 0;
    if (typeof number == "number") {
        if (number % 2) {
            console.log(number + "là số lẻ");
        }
        else { console.log(number + " là số chẵn"); }
    }
    else {console.log("không phải là number");}
}
//4
{
    let input = "12";
    let result = "0";
    
    if (input <= 0 || typeof input != "number") {
        console.log(" không có số chính phương");
    }
    else {
        for (let i = 1; i <= input; i++) {
            if (i * i <= input) {
                result = result + "," + i * i;

            }
        }
        console.log(result);
    }
}