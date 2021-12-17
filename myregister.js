
document.querySelector(".createAccount-submit-btn").addEventListener("click", createAccount);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
function createAccount() {

var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;
console.log(email,password)

var userCred = {
  emailAdd: email,
  pass: password,
  
};
userData.push(userCred);
localStorage.setItem("userDatabase", JSON.stringify(userData));
window.location.href = "hello.html"
}