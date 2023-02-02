///////////// Задание 1 ////////////////////////

// let num1 = prompt("Введите первое число");
// alert(num1 <= 1);
// let num2 = prompt("Введите второе число");
// alert(num2 >= 3);


///////////// Задание 2 ///////////////////////////////

let num1 = prompt("Введите первое число");
if ((num1 <= 1) === true) {
    console.log('+++') & alert('+++');
} else {
    console.log('---') & alert('---');
}

let num2 = prompt("Введите второе число");
if ((num2 >= 3) === true) {
    console.log('+++') & alert('+++');
} else {
    console.log('---') & alert('---');
}


////////////// Задание 3 ////////////////////////////////

let day = Math.ceil(Math.random() * 31);
console.log(day);
if ((day > 0) && (day < 11)) {
    console.log(`Первая декада месяца`);
} else if ((day > 10) && (day < 21)) {
    console.log(`Вторая декада месяца`);
}
else console.log(`Третья декада месяца`);