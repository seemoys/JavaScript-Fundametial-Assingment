const bike=document.getElementById("bike");

let x=0;
let y=0;

function moveImage(xOffset,yOffset){
    x+=xOffset;
    y+=yOffset; 
    bike.style.transform=`translate(${x}px,${y}px)`;
}

document.addEventListener("keydown",function(event){
    switch(event.key){
        case "ArrowUp":moveImage(0,-10);
        break;

        case "ArrowDown":moveImage(0,10);
        break;

        case "ArrowLeft":moveImage(-10,0);
        break;

        case "ArrowRight":moveImage(10,0);
        break;
    }
});