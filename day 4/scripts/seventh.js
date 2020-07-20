let n = prompt("enter a number till which u want to find prime number");
for(let i = 2;i<=n;i++){
    let flag = true;
    if(i>1){
        for(let j=2;j<=i-1;j++){
            if((i%j)==0){
                flag =false;
                break;
            }
        }
    }
    if(flag == true){
        console.log(`${i} is a prime number`);
    }
    else{
        console.log(`${i} is not a prime number`);
    }
}