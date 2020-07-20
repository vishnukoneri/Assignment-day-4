const student = {
    name:"helsenki",
    age:24,
    projects:{
        diceGame:"Two player dice game using javascript",
    }
}
const {name,age,projects:{diceGame}} = student;
console.log(name);
console.log(age);
console.log(diceGame);