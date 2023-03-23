const firstPassword=document.getElementById("password");
const cnfPassword=document.getElementById("cnfPassword");
const submit_btn=document.getElementById("submit-btn");
const msg1=document.getElementById("msg1");
const msg2=document.getElementById("msg2");
submit_btn.addEventListener("click",()=>{
    if(firstPassword.value===""){
        alert("Enter Password");
    }if(firstPassword.value===cnfPassword.value){
        alert("Loging Succesfully");
    }else{
        alert("Invalid Password");
    }
})