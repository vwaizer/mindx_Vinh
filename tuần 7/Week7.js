//1
{
    let nOfQuestion1 = 3.3;

    if (typeof nOfQuestion1 == "number") {
        if (nOfQuestion1 - (Math.floor(nOfQuestion1)) < 1) {
            console.log(nOfQuestion1 + " không là số nguyên");
        }
        else {
            console.log(nOfQuestion1 + " là số nguyên");
        }
    }
    else {
        console.log(nOfQuestion1 + " không là số nguyên");
    }
}
//2
{
    let nOfQuestion2 = 2;
    if (nOfQuestion2 > 2 && typeof nOfQuestion2 == "number") {
        let check = true;
        for (let i = 2; i < nOfQuestion2; i++) {

            if (nOfQuestion2 % i == 0) {
                check = false;
                break;
            }
        }
        if (check) {
            console.log(nOfQuestion2 + " là số nguyên tố ");
        }
        else {
            console.log(nOfQuestion2 + " không là số nguyên tố ");
        }

    }
    else if (nOfQuestion2 == 2 && typeof nOfQuestion2 == "number") {
        console.log("2 là số nguyên tố ");
    }
    else { console.log(nOfQuestion2 + " không là số nguyên tố "); }
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