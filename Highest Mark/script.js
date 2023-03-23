function calculateHighestMark(){
    let first=document.getElementById("firstMark").value;
    let second=document.getElementById("secondMark").value;
    let third=document.getElementById("thirdMark").value;
    let fourth=document.getElementById("fourthMark").value;
    let fifth=document.getElementById("fifthMark").value;

    first=parseInt(first);
    second=parseInt(second);
    third=parseInt(third);
    fourth=parseInt(fourth);
    fifth=parseInt(fifth);

    let marks=new Array();
    marks.push(first);
    marks.push(second);
    marks.push(third);
    marks.push(fourth);
    marks.push(fifth);

    let highest=0;
    for(let i=0;i<marks.length;i++){
        if(marks[i]>highest){
            highest=marks[i];
        }
    }
    document.getElementById("result").innerText=highest;
}