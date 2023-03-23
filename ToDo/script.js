const userTask=document.getElementById("user-task");
const addBtn=document.getElementById("add-btn");
const taskList=document.getElementById("task-list");

function toDo(){
  if(userTask.value !== ""){
    const newItems=document.createElement("li");
    newItems.innerText=userTask.value;
    taskList.appendChild(newItems);
    userTask.value="";
    newItems.style.color="yellow";
    newItems.style.fontSize="25px";
    newItems.style.textTransform="uppercase";
    newItems.style.textShadow="2px 2px 2px black";
  }else{
    alert("Add Your Task");
  }
}

addBtn.addEventListener("click", toDo);
