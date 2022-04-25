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
            div.append(p)
            tasksSection.append(div)
            div.style.backgroundColor ="orange"
            div.style.padding = "30px";
            div.addEventListener("click",function (event){
                console.log(event)
                if(!event.target.matches('div')) return
                if(event.target.getAttribute("selected") === null)
                {
                    event.target.setAttribute("selected",true)
                }
                else{
                    event.target.removeAttribute("selected")
                }

            })
        }
    }


