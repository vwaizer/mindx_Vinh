export const addFunction=(a,b)=>{
    return a+b;
}
export const minusFunction=(a,b)=>{
    return a-b;
}
export const multiFunction=(a,b)=>{
    return a*b;
}
export const divideFunction=(a,b)=>{
    if(b ==0){
        alert("lỗi tại b");
        return;
    }
    else{
        return a/b;
    }
}
