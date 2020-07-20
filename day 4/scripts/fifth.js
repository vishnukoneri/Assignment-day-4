let sales = Number(prompt("enter total sales"));
let totalCommision = 0
if(sales >= 0 && sales <= 5000){
    totalCommision = sales * 2/100;
    console.log(`Total commision = ${totalCommision}`);
}
else if(sales >= 5001 && sales <= 10000){
    totalCommision = (sales-5000) * 5/100 + 100;
    console.log(`Total commision = ${totalCommision}`);
}
if(sales >= 10001 && sales <= 20000){
    totalCommision = (sales-10000) *7/100 + 350;
    console.log(`Total commision = ${totalCommision}`);
}
if(sales >= 20000){
    totalCommision = (sales-20000) *10/100 + 1050;
    console.log(`Total commision = ${totalCommision}`);
}