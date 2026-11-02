import {greetings as wish,pi,arr} from './welcome.js';
 
wish("ashwini");
console.log("PI is ",pi);
 function greetings(name){
    console.log(`Good Morning ${name}`);    
}
greetings("raushan");
for(let x of arr){
    console.log(x);
}