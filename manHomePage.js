document.querySelector("#cancel").addEventListener("click", function(){
    document.querySelector("#searchBar").style.display = "none";
})
document.querySelector(".search").addEventListener("click", function(){
    document.querySelector("#searchBar").style.display = "block";
})

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".navbar").style.top = "0";
//   } else {
//     document.querySelector(".navbar").style.top = "-10px";
//   }
//   prevScrollpos = currentScrollPos;
// }


document.querySelector(".signin").addEventListener("click", function(){
    document.querySelector(".loginbox").style.display = "block";
})

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