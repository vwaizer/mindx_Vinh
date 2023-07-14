//1
{
    let N = 5;
    if (Number.isInteger(N)) {
        console.log(N + " là số nguyên");
    }
    else {
        console.log(N + " không là số nguyên");
    }
}
//2
{
    let N = 1;
    if (N > 2) {
        let check = true;
        for (let i = 2; i < N; i++) {

            if (N % i == 0) {
                check = false;
                break;
            }
        }
        if (check) {
            console.log(N + " là số nguyên tố ");
        }
        else{
            console.log(N + " không là số nguyên tố ");
        }

    }
    else if (N == 2) {
        console.log("2 là số nguyên tố ");
    }
    else { console.log(N + " không là số nguyên tố "); }
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
    let result="0";
    if (input <= 0) {
        console.log("không có số chính phương");
    }
    else {
        for (let i = 1; i <= input; i++) {
            if (i * i <= input) {
                result=result+","+i*i;
                
            }
        }
        console.log(result);
    }
}