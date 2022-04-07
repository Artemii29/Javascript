/*function range(start,end,step = 1){
    let mass = []
    for(let i = start; i <= end;i+=step){
        mass.push(i)
    }
    return mass
}
console.log(range(3 , 9,2))
*/
//Задача 2
function checkSpam(text, ...spamWords) {
    let wordsArray = text.split(" ");
    let spamCounter = 0;

    for (const spamWord of spamWords) {
        for (let i = 0; i <= wordsArray.length; i++) {
            if (wordsArray[i] === spamWord) spamCounter++;
            if (spamCounter >= 5) return spamCounter;
        }
    }
    return spamCounter;
}
