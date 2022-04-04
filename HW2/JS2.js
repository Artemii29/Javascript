/*
//задача 1
let count = prompt("Количество верных ответов")
if(count >= 90 && count <= 100){
    console.log("отлично")
}
if(count >= 60 && count <= 89){
    console.log("хорошо")
}
if(count >= 40 && count <= 59){
    console.log("удолетворитнельно")
}
if(count >= 0 && count <= 39){
    console.log("попробуйте еще раз")
}
//задача 2
let code = prompt("Введите номер купона");
let sum = prompt("Введите сумму покупки");
switch (code){
    case"4653":
     alert(sum * 0.7)
        break
    case"5698":
    case"5111":
        alert(sum * 0.8)
        break
    case"6922":
    case"6113":
    case"6099":
        alert(sum * 0.9)
        break

} */
//задача 4
/*
let specnumb =1
let randNumb = (Math.floor(Math.random() *9) + 1);
alert(randNumb)
specnumb = parseInt(prompt("Введите число"));
if( specnumb !== 0) {
    while(specnumb !== 0) {
        if (specnumb === randNumb) {
            alert("Вы угадали")
            specnumb = 0
            break
        }
        if (specnumb < randNumb) {
            alert("Загаданное число больше")
            specnumb = parseInt(prompt("Введите число"));
        }
        if (specnumb > randNumb) {
            alert("Загаданное число меньше")
            specnumb = parseInt(prompt("Введите число"));
        }
        if(specnumb === 0){
            alert("Выход из программы")
        }

    }
}
else{
    alert("Выход из программы")
} */
//задача 3
/*
let plates = prompt("Введите количество тарелок")
let detergent = prompt("Введите количество моющего средства")
let plate = parseInt(plates)
let detergen = parseInt(detergent)
if(detergent >= 0.5 && plates >= 1) {
    while (detergen >= 0.5 && plate >= 1) {
        plate = plate - 1;
        detergen = detergen - 0.5;
        alert(` Осталось моющего средства ${detergen}`)
    }
    alert(` Осталось тарелок ${plate}`)
//создаю новую переменные
//late должна каждый раз становитьс меньше на 0.
}
else{
    alert("Чего-то не хватает")
} */