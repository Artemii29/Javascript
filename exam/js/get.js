"use strict"
let tasksSection = document.getElementById("tasks")
let tasks = localStorage.getItem("tasks")

if(!tasks){
    document.write("В списке нет задач")
} else {
    tasks = JSON.parse(tasks)
    for (const task of tasks) {
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.innerText = task.addName + task.desciptionTask +"Выполнить к" + " " + task.date + task.users
        div.id = task.id
        div.append(p)
        tasksSection.append(div)
        div.style.backgroundColor ="orange"
        div.style.padding = "30px";
        div.addEventListener("click",function (event){
            console.log(event)
            if(div.getAttribute("selected") === null)
            {
                div.setAttribute("selected",true)
            }
            else{
                div.removeAttribute("selected")
            }
        })
    }
}
let butDel = document.getElementById("butDelete")
butDel.addEventListener("click", deleteTasks)
function deleteTasks (event){
    let taskDel = document.querySelectorAll("[selected]")
    let tasks = localStorage.getItem("tasks")
    tasks = JSON.parse(tasks)

    for (let task of taskDel) {
        tasks.splice(tasks.findIndex(t => t.id === task.id),1)
        task.remove()
    }
    localStorage.setItem("tasks",JSON.stringify(tasks))
}