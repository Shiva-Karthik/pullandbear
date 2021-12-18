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
    document.querySelector(".hellobox").style.display = "block";
    document.querySelector(".createaccountbox").style.display = "none";
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;
console.log(email,password)

var userCred = {
  emailAdd: email,
  pass: password,
  
};
userData.push(userCred);
localStorage.setItem("userDatabase", JSON.stringify(userData));
    
}

// register area

document.querySelector(".cancelbutton").addEventListener("click", function(){
    document.querySelector(".createaccountbox").style.display = "none";
})
document.querySelector(".register-submit-btn").addEventListener("click", function(){
    document.querySelector(".createaccountbox").style.display = "block";
    document.querySelector(".loginbox").style.display = "none";
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
document.querySelector(".hellobox").style.display = "block";
}

// hello

// function hello() {
//     window.location.href = "hello.html"
// }

document.querySelector(".cancelbutton").addEventListener("click", function(){
    document.querySelector(".hellobox").style.display = "none";
})
document.querySelector(".login-submit-btn").addEventListener("click", function(){
    document.querySelector(".hellobox").style.display = "block";
    document.querySelector(".loginbox").style.display = "none";
})

// logout

document.querySelector("#logout").addEventListener("click", function(){
    window.location.href = "manHomePage.html"
})

// login check details

document.querySelector(".login-submit-btn").addEventListener("click", login);
  var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
  console.log(regdUsers)
  function login() {
    var email = document.querySelector("#email").value;
    console.log(email)
    var password = document.querySelector("#password").value;
    var flag = true;
    console.log(password)
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].emailAdd === email && regdUsers[i].pass === password) {
        console.log("registered user");
        document.querySelector(".hellobox").style.display = "block";
      } else {
        flag = false;
        break;
      }
    }
    if(flag===false){
        alert("Wrong Email address or Password");
        window.location.href = "manHomePage.html"
    }
  }
