const para=document.getElementById("paragraph");
const words=para.textContent.split(" ");
for(let i=0;i<words.length;i++){
    if(words[i].length>8&&words[i].length<10){
        words[i]="<span style='background:green'>"+words[i]+"</span>";
    }
    if(words[i].length>9&&words[i].length<15){
        words[i]="<span style='background:yellow'>"+words[i]+"</span>";
    }
}
para.innerHTML=words.join(" ");
