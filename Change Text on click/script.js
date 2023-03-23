let isPWSkills=false;
let heading=document.getElementById("heading");
heading.style.color="crimson";
heading.style.fontFamily="cursive";
function toggleText(){
    let heading=document.getElementById("heading");
    
    if(isPWSkills){
        heading.innerText="“The most affordable learning platform”";
    }else{
        heading.innerText="“PW Skills”";
    }
    isPWSkills=!isPWSkills;
}
let toggleBtn=document.getElementById("toggle-btn");
toggleBtn.addEventListener("click",toggleText);

/*
These below code is to explain you, you can use it according to your problem.

HTML Code :

<!DOCTYPE html>
<html>
<head>
  <title>Toggle Heading Text</title>
</head>
<body>
  <h1 id="heading">The most affordable learning platform</h1>
  <button id="toggle-btn">Toggle Text</button>
  <script src="script.js"></script>
</body>
</html>


here is the Javascript code :


let isPWSkills = false; // initially set to false

function toggleText() {
  let heading = document.getElementById("heading");
  if (isPWSkills) {
    heading.innerText = "The most affordable learning platform";
  } else {
    heading.innerText = "PW Skills";
  }
  isPWSkills = !isPWSkills; // toggle the boolean value
}

let toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", toggleText);

In this code, we start by defining a boolean variable isPWSkills and setting it to false, which represents the initial state of the heading text.

Next, we define the toggleText function, which is called whenever the button is clicked. This function gets a reference to the heading element using document.getElementById, and then checks the value of isPWSkills. If it is true, it sets the heading text to "The most affordable learning platform", otherwise it sets it to "PW Skills". It then toggles the value of isPWSkills by negating it with !.

Finally, we get a reference to the button element using document.getElementById, and add an event listener to it using addEventListener. This listener calls the toggleText function whenever the button is clicked.
*/