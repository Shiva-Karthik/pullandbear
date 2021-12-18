document.querySelector("#return").addEventListener("click", function(){
    window.location.href = "paymentMode.html"
});

document.querySelector("#heading").addEventListener("click", function(){
    window.location.href = "manHomePage.html";
});

document.querySelector("#contact").addEventListener("click", function(){
    window.location.href = "contact.html";
});

document.querySelector("#back").addEventListener("click", function(){
    window.location.href = "paymentMode.html";
});

document.querySelector("#continue").addEventListener("click", function(){
var person = prompt("Please enter your OTP", "");
if(person == "1234"){
    alert("Payment Successful !\nThank you for shopping");
    window.location.href = "manHomePage.html";
}
else{
    alert("Wrong OTP, Try Again");
}  
});

var arr = JSON.parse(localStorage.getItem("cart"))||[];
var totalAmount =  0;
arr.map(function(el){
    // // image input
    var image = document.createElement("img");
    image.setAttribute("src", el.image);
    image.style.width = "100%";
    image.style.height = "100%";
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div1.append(image);
    var div2 = document.createElement("div");
    div.append(div1, div2);
    document.querySelector("#productInfo").append(div);
    // div.style.border = "1px solid red";
    div1.style.width = "25%";
    div2.style.width = "70%";
    div.style.display = "flex";
    div1.style.padding = "5px";
    // div1.style.border = "1px solid black";
    // div2.style.border = "1px solid teal";
    div2.style.marginLeft = "10px";
    div.style.marginBottom = "20px";
    

    var div21 = document.createElement("div");
    var h4 = document.createElement("h4")
    h4.textContent = el.name;
    div21.append(h4);
    div2.append(div21);
    var div22 = document.createElement("div");
    var p = document.createElement("p")
    p.textContent = "Product Code"+" "+"4200/910";
    div21.append(p);
    div2.append(div21);
    var div23 = document.createElement("div");
    div23.style.display = "flex";
    // var div231 = document.createElement("div");
    // div231.style.width = "50%";
    // div231.style.height = "20px";
    // div231.style.border = "1px solid black";
    // div231.style.marginRight = "10px"
    var div232 = document.createElement("div");
    div232.style.width = "50%";
    div232.style.height = "20px";
    div232.style.border = "1px solid black";
    div232.style.marginRight = "10px"
    div232.textContent = el.size;
    div232.style.textAlign = "center";
    var div233 = document.createElement("div");
    div233.style.width = "50%";
    div233.style.height = "20px";
    div233.style.border = "1px solid black";
    div233.style.marginRight = "10px"
    div233.textContent = "1";
    div233.style.textAlign = "center";
    div23.append(div232, div233);
    div2.append(div23);
    var div24 = document.createElement("div");
    div24.textContent = el.price + " "+ "€";
    div24.style.fontWeight = "bold";
    div24.style.textAlign = "right";
    div24.style.margin = "7px"
    div2.append(div24);
    totalAmount = Number(totalAmount) + Number(el.price);
    localStorage.setItem("amount", totalAmount);
    console.log(totalAmount);
    // image.style.height = "150px";
    // image.style.width = "100px";
    // var div = document.createElement("div");
    // div.setAttribute("id", "productImage");
    // div.append(image);
    // // product details name and id
    // var div1 = document.createElement("div");
    // div1.setAttribute("id", "productDetails");
    // var h4 = document.createElement("h4");
    // h4.textContent = el.name;
    // var p = document.createElement("p");
    // p.textContent = "4200/910";
    // div1.append(h4, p);
    // // product colour
    // var div2 = document.createElement("div");
    // div2.setAttribute("id", "productColour");
    // div2.style.width = "100px";
    // // product size
    // var div3 = document.createElement("div");
    // div3.setAttribute("id", "productSize");
    // div3.style.width = "100px";
    // var span1 = document.createElement("span");
    // span1.textContent = el.size; 
    // div3.append(span1);
    // // product Quantity
    // var div4 = document.createElement("div");
    // div4.setAttribute("id", "productQuantity");
    // div4.style.width = "100px";
    // var span2 = document.createElement("span");
    // span2.textContent = "1"; 
    // div4.append(span2);
    // // Combining product colour, size, quantity
    // var div5 = document.createElement("div");
    // div5.setAttribute("id", "productFilters");
    // div5.append(div2 , div3, div4);
    // // product prize
    // var h3 = document.createElement("h3");
    // h3.textContent = el.price;
    // //appending all div in main div
    // var mainDiv = document.createElement("div");
    // mainDiv.setAttribute("id", "product");
    // mainDiv.append(div, div1, div5, h3);
    // //appending maindiv to html
    // document.querySelector("#productInfo").append(mainDiv);
})

// div id = "product">
//                     // <div id = "productImage">
//                     //     <img src = "https://static.pullandbear.net/2/photos//2022/V/0/2/p/8711/514/505/03/8711514505_6_1_8.jpg?t=1638891573420&imwidth=375"/>
//                     // </div>
//                     // <div id = "productDetails">
//                     //     <h4>Pink Floyd machine T-shirt</h4>
//                     //     <p>Product Code 4200/910</p>
//                     //     <div>
//                         //  <div id = "productColour">
                             
//                         //  </div>
//                         // <div id = "productSize">
//                         //     <span>L</span>
//                         // </div>
//                         // <div id = "productQuantity">
//                         //     <span>1</span>
//                         // </div>
//                         </div>
//                         <h3>29 €</h3>
//                     </div>
totalAmount = Math.ceil(totalAmount);
document.querySelector("#totalPrice").textContent = totalAmount +" "+"€";