let choice = Number(prompt("choose operation you want to perform\n1.addition\n2.subtraction\n3.multicplication\n4.division\n5.square root\n6.percentage"));
if (choice>0 && choice<=6){
    switch(choice){
        case 1:
            let num1 = Number(prompt("enter first number"));
            let num2 = Number(prompt("enter second number"));
            result = num1 + num2;
            console.log(result);
            break;
        case 2:
            let num3 = Number(prompt("enter first number"));
            let num4 = Number(prompt("enter second number"));
            result = num3 - num4;
            console.log(result);
            break;
        case 3:
            let num5 = Number(prompt("enter first number"));
            let num6 = Number(prompt("enter second number"));
            result = num5 * num6;
            console.log(result);
            break;
        case 4:
            let num7 = Number(prompt("enter first number"));
            let num8 = Number(prompt("enter second number"));
            result = num7 / num8;
            console.log(result);
            break;
        case 5:
            let num9 = Number(prompt("enter number"));
            result = Math.sqrt(num9);
            console.log(result);
            break;
        case 6:
            let num10 = Number(prompt("how much percentage"));
            let num11 = Number(prompt("of"));
            result = num10/100 * num11;
            console.log(result);
            break;

    }
}