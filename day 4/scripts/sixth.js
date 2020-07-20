let num = prompt(`enter the number`);
while (true){
    if(num<=100 || num == null || num == ""){
        console.log(`Correct Number: ${num}`);
        break;
    }
    else{
        num = prompt(`enter the number`);
        continue;
    }

}