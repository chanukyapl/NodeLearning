let a =1,b=2;
let c=[1,2];
let sum=2;
console.log(sum);
for(let i=1;i<1000000;){
   i= genetatenext(c.slice(-1)[0],c.slice(-2)[0]);
   c.push(i);
   console.log(i);
    if(i%2===0){
        sum+=i;
    }
}
console.log(sum);
// console.log(c.slice(-1)[0],c.slice(-2)[0]);
console.log(4613732);
function genetatenext(a,b) {
  return a+b;
}