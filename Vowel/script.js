let Name=String(prompt("Enter Your Name"));
let count=0;
for(let i=0;i<Name.length;i++){
    var ch=Name.charAt(i);
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
        count++;
    }
    
}
console.log(count);
