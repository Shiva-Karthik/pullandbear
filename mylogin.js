  document.querySelector(".register-submit-btn").addEventListener("click", function(){
    window.location.href = "myregister.html";
  })

  document.querySelector(".login-submit-btn").addEventListener("click", login);
  var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
  console.log(regdUsers)
  function login() {
    var email = document.querySelector("#email").value;
    console.log(email)
    var password = document.querySelector("#password").value;
    console.log(password)
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].emailAdd === email && regdUsers[i].pass === password) {
        console.log("registered user");
        window.location.href = "hello.html";
      } 
    }
  }