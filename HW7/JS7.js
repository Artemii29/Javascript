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
        return -1
    }
    if (a.title > b.title) {
        return 1;
    }

}
console.log(books.sort(sortBooks))
console.log(books)