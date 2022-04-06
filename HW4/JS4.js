//Задача 1
/*
let mass = [4,-9,0,105,-6,7,25,-17,18]
let negative = []
for (const num of mass) {
    if(mass[num] < 0){
        negative.push(mass[num])
    }
}
document.write(negative)*/
//Задача 2
/*
let mass = []
let min = 0
let max = 0
let temp = 0
for(let i = 0; i <= 6; i++){
    x = (Math.floor(Math.random()*300)+5)
    mass.push(x)
    if(mass[min] > mass[i]){
        min = i;
    }
    if(mass[max] < mass[i]){
        max = i;
    }

}
document.write(mass)
temp = mass[min];
mass[min] = mass[max];
mass[max] = temp
document.write("<br>")
document.write(mass)
*/
/*let mass2 = []
let string = "1"
while (string != "0"){
   string = prompt("Введите строку")
   if(mass2.indexOf(string) === -1){
      mass2.push(string)
   }
}
*/
