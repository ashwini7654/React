//import {greetings } from './welcome.js';
import {salaam, pi, arr } from './welcome.js';
salaam("ashwini");//greetings ko salaam kehne se koi fark nahi padta, koi bhi naam ho sakta hai, import me greetings ko salaam rename kiya hai

function greetings(name){
    console.log(`Good Morning ${name}`);
}
greetings("rahul");
console.log("PI is ",pi);

for(let x of arr){
    console.log(x);
}