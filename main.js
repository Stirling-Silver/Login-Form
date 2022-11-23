// JavaScript Code
let LoginEL = document.getElementById("Login");
document.getElementById(`Username`);
document.getElementById(`Password`);
document.getElementById("Login").addEventListener("click", Login);

//This code works

function Login() {
  //Login Processes
  let UsernameR = document.getElementById("Username").value;

  let PasswordR = document.getElementById("Password").value;

  if (UsernameR === `Admin` && PasswordR === `Key`) {
    LoginEL = `Valid Login Credentials!`;
  } else {
    LoginEL = `Invalid Login Credentials!`;
  }
  let LeL = LoginEL;
  document.getElementById("LeL").innerHTML = `${LeL}`;
}
