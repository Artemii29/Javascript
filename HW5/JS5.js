function range(start,end,step = 1){
    let mass = []
    for(let i = start; i <= end;i+=step){
        mass.push(i)
        if(step < 0){
            alert("step не может быть отрицательным" )
            return
        }
        if(start < end){
        alert("Будет пустой массив")
        }
    }
    return mass
}
console.log(range(12 , 1, 2))

//Задача 2

function checkSpam(text, ...spamWords) {
    let wordsArray = text.split(" ");
    let spamCounter = 0;

    for (const spamWord of spamWords) {
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].toUpperCase() === spamWord.toUpperCase()) spamCounter++;
            if (spamCounter >= 5) return spamCounter;
        }
    }
    return spamCounter;
}
console.log(checkSpam("car super CAR ","car"))
