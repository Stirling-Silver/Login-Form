// JavaScript Code
document.getElementById(`Username`);
document.getElementById(`Password`);
document.addEventListener("click", Login);

//Login Processes
let U = prompt(`Enter your username:`);

let P = prompt(`Enter your password:`);

if (U === `Admin` && P === `Key`) {
  alert(`Valid!`);
} else {
  alert(`Invalid!`);
}
