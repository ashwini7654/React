
import {salaam, pi, arr } from './welcome.js';
salaam("ashwini");//greetings ko salaam kehne se koi fark nahi padta, koi bhi naam ho sakta hai, import me greetings ko salaam rename kiya hai


//import {greetings } from './welcome.js';
//yaha greetings name already ek function define krne bd greetings name ke import krne se error aayega, isliye greetings ko salaam rename kiya hai, import me
function greetings(name){
    console.log(`Good Morning ${name}`);
}
greetings("rahul");
console.log("PI is ",pi);

for(let x of arr){
    console.log(x);
}