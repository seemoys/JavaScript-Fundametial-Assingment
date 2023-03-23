// !Remove Duplicate from array.
// ! Using for of .
let items = [1, 2,"suman", 3, 4, 2, 3,"suman", 5, 6, 1,"ram","ram","sanu","sanu"];
let removedDuplicateItems=[];
for(value of items){
  if(removedDuplicateItems.indexOf(value)===-1){
    removedDuplicateItems.push(value);
    items=removedDuplicateItems;
  }
}
console.log(items);

// ! Using for of  Using Include.

// let items = [1, 2, 3, 4, 2, 3, 5, 6, 1,"ram","ram","sanu","sanu"];
// let removedDuplicateItems=[];
// for(value of items){
//   if(!removedDuplicateItems.includes(value)){
//     removedDuplicateItems.push(value);
    
//   }
// }
// console.log(removedDuplicateItems);










