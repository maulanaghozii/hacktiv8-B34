// Menentukan nilai ganjil dan genap
var number = 1;
while (number <=100){
    if(number % 2 != 0){
        console.log(number + ' is ODD');
    } else{
        console.log(number + ' is EVEN');
    } 
    number++
}

// Menentukan nilai kelipatan dari 3
for(numberA = 1; numberA<=100; numberA += 2){
    if(numberA % 3 == 0){
        console.log(numberA + ' KELIPATAN 3');
    } else{
        console.log("");
    }
}

// Menentukan nilai kelipatan dari 6
for(numberB = 1; numberB <= 100; numberB += 5){
    if(numberB % 6 == 0){
        console.log(numberB + ' KELIPATAN 6');
    } else {
        console.log(' ');
    }
}

// Menentukan nilai kelipatan dari 10
for(numberC = 1; numberC <= 100; numberC += 9){
    if(numberC % 10 == 0){
        console.log(numberC + ' KELIPATAN 10');
    } else{
        console.log(' ')
    }
}