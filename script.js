const inputText = document.getElementById("Input_data");
const addTask = document.getElementById("Add_Input");
const list = document.getElementById("todoList");

const todo =[];
addTask.addEventListener("click",()=>{
    const text = inputText.value;
    if(text!=""){
        todo.push(text);
        inputText.value="";
        list.innerHTML="";
        todo.forEach((item)=>{
            const li = document.createElement("li");
            li.innerText=item;
            list.appendChild(li);
        })

    }
},true);