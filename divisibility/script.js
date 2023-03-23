let arr=[1,2,3,4,5,6,9,12,15,33,30,50,92,90,99];
for(let i=0;i<=arr.length;i++){
    if(arr[i]%3!==0){
        continue;
    }
    if(arr[i]%2==0){
        continue;
    }
    console.log(arr[i]);
}