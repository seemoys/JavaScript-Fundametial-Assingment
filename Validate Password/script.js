function validate(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const msg=document.getElementById("validate");
   if(email.includes("@") && password.length>=8){
    msg.innerText="Valid UserName & PassWord";
    msg.style.color="green";
   }else{
    msg.innerText="InValid UserName or PassWord";
    msg.style.color="red";
   }
}
document.getElementById("submit-btn").addEventListener("click",validate);