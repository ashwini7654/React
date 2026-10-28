import { greetings as wishes, PI, arr } from "./welcome.js";
function greetings(name) {
  console.log(`Good Morning ${name}`);
}
greetings("Deepak");
wishes("Amit");
console.log("PI is ", PI);
for (let n of arr) {
  console.log(n);
}
