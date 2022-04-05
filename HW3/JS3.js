let count = parseInt(prompt("Введите количества товара"))
if(count % 100 >10 && count % 100 <20){
    document.write(`${count}  товаров`)
}else {
    if (count % 10 === 1) {
        document.write(`${count}  товар`)
    }
    if (count % 10 >= 2 && count % 10 <= 4) {
        document.write(`${count}  товара`)
    }
    if (count % 10 >= 5 && count % 10 <= 9 || count % 10 === 0) {
        document.write(`${count}  товаров`)
    }
}



