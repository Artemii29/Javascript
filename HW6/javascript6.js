// Задача 4
let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

function temp(temp,i){
    for(let i = 0; i <= temp.length-1;i++){
    if (temp[i] > 500){
    return true}}}

alert(temperatures.some(temp))

/*
//Задача 1
let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
function perebor (arr1,arr2){
    if (arr1.length === arr2.length){
        return 0}
    if(arr1.length < arr2.length){
        return -1
    }
    return 1
}
alert(numbers.sort(perebor))
*/
//Задача 3
const first = ["Апрель", "Июль", "Октябрь", "Май"];
const second = ["Май", "Январь", "Декабрь", "Октябрь"];

function findBoth(arr1, arr2) {
    return arr1.filter(function functionToFilter(arrayElem) {
        return arr2.includes(arrayElem);
    });
}

alert(findBoth(first,second))
//Задача 2
const presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];

console.log(
    presents.sort(function (A, B) {
        return Math.random() - 0.5;
        console.log(Math.round(Math.random()));

        return Math.round(Math.random()) - 1;
    })
);

console.log(
    first.filter(function func(elem) {
        console.log(elem);
        return false;
    })
)