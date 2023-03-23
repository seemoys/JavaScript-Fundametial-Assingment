const items=[
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];

let count=0;
let addBtn=document.getElementById("add-btn");
let delBtn=document.getElementById("del-btn");
let ul=document.getElementById("list");
ul.style.color="yellow";
function add(){
    if(count<items.length){
        let listItems=document.createElement("li");
        listItems.innerText=items[count];
        ul.appendChild(listItems);
        count++;
        
    }else{
        alert("All Items Have Been Added");
    }
    
};
document.getElementById("add-btn").addEventListener("click",add);




/*
addBtn.onclick=()=>{
    if(count<items.length){
        let listItems=document.createElement("li");
        listItems.innerText=items[count];
        ul.appendChild(listItems);
        count++;
    }else{
        alert("All Items Have Been Added");
    }
};
delBtn.onclick=()=>{
    list.removeChild(list.lastChild);
    count--;
};

/*
<!-- 20. Dynamically Adding List Items to an Ordered List. -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Dynamically Adding List Items to an Ordered List.</title>
</head>
<body>
<ol id="listOfLearningObjectives"></ol>
<button id="addListItem">Add list Item</button>
<p id="message" style="color: green"></p>
<!-- JS Starts -->
<script>
const arrayOfListItems = [
"HTML and Semantics",
"Starting with CSS",
"Working Template",
"Mobile responsive webpages",
"Grid and Flex-box in CSS",
"Projects using HTML & CSS",
"Version Control and Git",
"Getting Started with JavaScript",
"Advance JavaScript",
"Working with DOM",
"Making Projects using HTML, CSS and JavaScript",
"Understanding Fundamental of Computer Science",
"Getting Started with Database",
"Understanding the Database",
"Starting with NodeJS and Express",
"Understanding React and its Fundamentals",
"Understanding Hooks and Routers",
"Starting and Completing Full Fledge Projects",
];
const list = document.getElementById("listOfLearningObjectives");
const button = document.getElementById("addListItem");
const message = document.getElementById("message");
function addListItem() {
const indexOfLastElementAdded = list.children.length;
const newItem = document.createElement("li");
if (arrayOfListItems[indexOfLastElementAdded + 1]) {
newItem.textContent = arrayOfListItems[indexOfLastElementAdded + 1];
list.appendChild(newItem);
} else {
message.innerHTML = "All Items Added";
}
}
button.addEventListener("click", addListItem);
</script>
<!-- JS Ends -->
</body>
</html>

I have sent you the solution of this assignment , Just check and compare your code with this solution
*/