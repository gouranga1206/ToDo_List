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
            const input = document.createElement("input");
            const button1 = document.createElement("button");
            const button2 = document.createElement("button");
            const iEdit = document.createElement("i");
            const iDelete = document.createElement("i");
            iEdit.className="fa-solid fa-pen";
            iDelete.className="fa-solid fa-trash-can";
            button1.appendChild(iEdit);
            button2.appendChild(iDelete);
            const attr = document.createAttribute("Style");
            attr.value=[
               'color: white ; font-size: 1rem; padding-left: 1rem ; font-family:\"PT Sans\",sans-serif;'
            ];
            input.setAttributeNode(attr);
            input.readOnly=true;
            input.id = "task";
            input.type="text";
            input.value=item;
            li.appendChild(input);
            li.appendChild(button1);
            li.appendChild(button2);
            list.appendChild(li);
            button1.addEventListener("click",()=>{
                input.readOnly=false;
                input.focus();
                input.addEventListener("blur",()=>{
                    input.readOnly=true; 
                    const str ="";
                    const index = todo.lastIndexOf(item);
                    todo.splice(index,1,str.concat(input.value));
                })
            })
            button2.addEventListener("click",()=>{
                const index = todo.lastIndexOf(item);
                todo.splice(index,1);
                list.removeChild(li);
            }
            )}
        )}
    else{
        alert("Please enter a task");
    }   
})
    