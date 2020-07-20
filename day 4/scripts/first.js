for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log(`number is ${i} and fizzbuzz`);
    }
    else if(i%5==0){
        console.log(`number is ${i} and buzz`)
    }
    else if(i%3==0 ){
        console.log(`number is ${i} and fizz`)
    }
}