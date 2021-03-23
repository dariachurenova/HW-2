const a = Number(prompt("Введите число a"));
const b = Number(prompt("Введите число b"));
if (a > b || a === b) {
    console.log(a);
} else {
    console.log(b);
}


const value = +prompt("Введите число");
if ((value % 10) % 2 === 0) {
    console.log("Четное");
}
else {
    console.log("Нечетное");
}
console.log("Последняя цифра = ", value % 10);


const name = prompt("Как вас зовут?");
console.log(name);
const age = Number(prompt("Сколько вам лет?"));
console.log(age);
if (confirm("Алкоголь употребляем?")) {
    if (age < 18) {
        console.log(name, ",", "Ты что?! Маме расскажу!");
    } else if (age >= 18 && age <= 40) {
        console.log(name, ",", "Только водку с пивом не мешай...");
    } else if (age > 40) {
        console.log(name, ",", "Не злоупотребляйте");
    }
} else {
    console.log(name, ",", "Так держать!");
}
