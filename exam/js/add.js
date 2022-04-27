let datee = document.getElementById("date");
let dataWarning = document.getElementById("data_warning");

datee.addEventListener('input',function (){
    let now = new Date();
    let userDate = new Date(datee.value);
    console.log(now.getTime())
if(userDate.getTime() <= now.getTime()){
    dataWarning.innerText = "Дата не может быть в прошлом"
}})
let addUserButton = document.getElementById("add-user")
addUserButton.addEventListener("click",addUser )
function addUser() {
    let user = document.createElement("div");
    let input = document.createElement("input");
    let button = document.createElement("button");
    let users = document.querySelector("#users");
    button.setAttribute('type', 'button')
    button.innerText = "X"
    input.placeholder = "Введите имя участника"
    button.addEventListener("click",deleteUser)
    function deleteUser() {
        user.remove()
    }
    user.append(input);
    user.append(button);
    users.append(user);
}

let form = document.getElementById("form")
form.addEventListener("submit",addTask)
function addTask(event) {
    event.preventDefault();
    let addName = document.getElementById("task").value
    let desciptionTask = document.getElementById("descriptionTask").value
    let date = document.getElementById("date").value
    let users = Array.from(document.querySelectorAll("#users input")).map(u => u.value)
    console.log(users)
    let taskObj = {
        addName,
        desciptionTask,
        date,
        users
    }
    // получил значение по ключу tasks
    let tasks = localStorage.getItem("tasks");
    // если tasks не равен null, преобразовываю JSON строку
    if(tasks) tasks = JSON.parse(tasks);
    //если tasks, равен null то создаем пустой массив
    else tasks = [];
    tasks.push(taskObj)
    console.log(JSON.stringify(tasks))
    localStorage.setItem("tasks",JSON.stringify(tasks))

}
