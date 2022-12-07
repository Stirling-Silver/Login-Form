// JavaScript Code
document.getElementById("Login").addEventListener("click", Login);

//This code works

function Login() {
  //Login Processes
  let UsernameR = document.getElementById("Username").value;

  let PasswordR = document.getElementById("Password").value;

  if (UsernameR === `Admin` && PasswordR === `Key`) {
    Login = `Valid Login Credentials!`;
  } else if (UsernameR === `Admin`) {
    Login = `Invalid Password!`;
  } else if (PasswordR === `Key`) {
    Login = `Invalid Username!`;
  } else {
    Login = `Invalid Login Credentials!`;
  }
  let LeL = Login;
  document.getElementById("LeL").innerHTML = `${LeL}`;
}
