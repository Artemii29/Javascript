
let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getItems (items,from,to){
    let newItems = {}
    for (const itemsKey in items) {
        if(items[itemsKey].price >= from && items[itemsKey].price < to)  {
            newItems[itemsKey] = items[itemsKey]
        }
    }
    return newItems
}
console.log(getItems(items,1500,3100))
function buy(obj,itemTitle,countToCart){
    for (const objKey in obj) {
        if(obj[objKey].title === itemTitle && obj[objKey].count - countToCart > 0 ){
            obj[objKey].count -= countToCart
            return true
        }
        else {
            console.log("Количество не позволяет")
            return false
        }
    }
}
console.log(buy(items,"Пианино",10))

console.log(items)
// Задача 3
let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];
function sortBooks (a,b){
   if( a.title === b.title){
       return 0;
   }
    if( a.title < b.title){
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }

}
console.log(books.sort(sortBooks))
console.log(books)

let animals = [
    {
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": {"vaccinations": true, "passport": true}
    },
    {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "additional_info": {"vaccinations": false, "passport": false}
    },
    {
        "name": "Макс",
        "age": 2,
        "color": "белый",
        "additional_info": {"vaccinations": false, "passport": true}
    },
    {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "additional_info": {"vaccinations": true, "passport": true}
    }
];
function proverka(object){
    let mass=[]
    for (let obj of object) {
        if(obj.additional_info.vaccinations === true){
            mass.push(obj)
        }
    }
    return mass
}
console.log(proverka(animals))

function col (color){
    let mass = []
    for (let obj of color) {
        if(mass.indexOf(obj.color) === -1){
            mass.push(obj.color)
        }
    }
    return mass
}
console.log(col(animals))

function col (color){
    let mass = []
    for (let obj of color) {
        if(mass.includes(obj.color) === false){
            mass.push(obj.color)
        }
    }
    return mass
}
console.log(col(animals))