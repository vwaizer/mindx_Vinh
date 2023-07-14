//1
{
    let NOfQuestion1 = 3.15569;

    if (typeof NOfQuestion1 == "number") {
        if (Math.abs(Math.floor(NOfQuestion1) - NOfQuestion1) < 1) {
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
    let NOfQuestion2 = 1;
    if (NOfQuestion2 > 2) {
        let check = true;
        for (let i = 2; i < NOfQuestion2; i++) {

            if (NOfQuestion2 % i == 0) {
                check = false;
                break;
            }
        }
        if (check) {
            console.log(N + " là số nguyên tố ");
        }
        else {
            console.log(N + " không là số nguyên tố ");
        }

    }
    else if (NOfQuestion2 == 2) {
        console.log("2 là số nguyên tố ");
    }
    else { console.log(NOfQuestion2 + " không là số nguyên tố "); }
}
//3
{
    let number = 0;
    if (number % 2) {
        console.log(number + "là số lẻ");
    }
    else { console.log(number + " là số chẵn"); }
}
//4
{
    let input = 25;
    let result = "0";
    if (input <= 0) {
        console.log("không có số chính phương");
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