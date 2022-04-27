/*
let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];
let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];
function generateTable(mas){
    let table = document.createElement("table")
    let i = 0;
    let row = table.insertRow(i++)
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse"
    table.style.margin = "10px"
    for (let prop in mas[0]) {
        let cell =  document.createElement("th")
        cell.style.border = "1px solid black";
        cell.style.backgroundColor = "#FF69B4" ;
        cell.style.padding = "5px 10px"
        cell.innerText = prop.toUpperCase()
        row.append(cell)
    }
    for (let item of mas) {
        let row = table.insertRow(i++)
        let j = 0;
        row.setAttribute("style","tr:nth-child(2n){background:#e8edff;}")
        for (let prop in item) {
            let cell = row.insertCell(j++)
            cell.style.border = "1px solid black";
            cell.style.padding = "5px 10px"
            cell.innerText = item[prop]
        }
    }
    return table;
}
let tableArea = document.getElementById("tables")
tableArea.append(generateTable(articles))
tableArea.append(generateTable(goods))



function generateField(n){
    if(n>3){
        let table = document.createElement("table")
        for(let i = 0;i <= n; i++){

            for(let i = 0;i <= n; i++){

            }
        }
    }
}*/
let article =  [
    {
        title: "Нейросеть может читать текст быстрее человека",
        image: "https://picsum.photos/id/22/1000/1000"
    },
    {
        title: "Пять сервисов, которые помогут написать статью за 5 минут",
        image: "https://picsum.photos/id/24/1000/1000"
    },
    {
        title: "Названы основные правила движения поездов",
        image: "https://picsum.photos/id/28/1000/1000"
    },
    {
        title: "Самая посещаемая достопримечательность мира",
        image: "https://picsum.photos/id/27/1000/1000"
    },
    {
        title: "Появился новый термин для обозначения радиоволн",
        image: "https://picsum.photos/id/29/1000/1000"
    },
    {
        title: "В России появится новый вид бумаги",
        image: "https://picsum.photos/id/30/1000/1000"
    }
];
function search (mas){
    let elements = document.createElement("div")

}
let divElem = document.getElementById("divv")
divElem.append(search(article))