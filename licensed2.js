var cart=JSON.parse(localStorage.getItem("cart"))||[];
var data = [
{image: "https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/517/600/4590517600_4_1_8.jpg?t=1639396490158&imwidth=563",
 name: "Cowboy Bebop Sweatshirt",
  price: 49.99, 
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/504/800/4590504800_4_1_8.jpg?t=1638872894265&imwidth=563",
    name:"Cowboy Bebop sweatshirt with blue print",
    price:29.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/961/251/4590961251_4_1_8.jpg?t=1639139482519&imwidth=563",
    name:"Basic Colourful T-shirt",
    price:29.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/960/251/4590960251_4_1_8.jpg?t=1639139536772&imwidth=563",
    name:"AC/DC Moneytalks Hoodie",
    price:25.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/962/800/4590962800_4_1_8.jpg?t=1639139475225&imwidth=563",
    name:"Round-Neck Ramones",
    price:25.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/572/800/4590572800_4_1_8.jpg?t=1637758892015&imwidth=563",
    name:"Tupac Until The End",
    price:29.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/509/700/4590509700_4_1_8.jpg?t=1638872904059&imwidth=563",
    name:"Basic oversized Hoodie",
    price:25.99
},
{
    image:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/505/710/8591505710_2_6_8.jpg?t=1627386548382&imwidth=563",
    name:"Mona-lisa  HOODIE",
    price:25.66
},
{
    image:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8591/950/807/8591950807_2_6_8.jpg?t=1634742598404&imwidth=563",
    name:"World-print hoodie",
    price:29.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/510/807/4590510807_2_6_8.jpg?t=1636565046148&imwidth=563",
    name:"Naruto Hoodie",
    price:25.66
},
{
    image:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/4590/502/606/4590502606_2_6_8.jpg?t=1636708077131&imwidth=563",
    name:"Hoodie with leaf",
    price:29.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/8591/513/712/8591513712_4_1_8.jpg?t=1634731324490&imwidth=563",
    name:"Pouch pocket hoodie",
    price:25.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/574/403/4590574403_4_1_8.jpg?t=1638186558943&imwidth=56",
    name:"Naruto with blue",
    price:31.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/544/800/4590544800_2_6_8.jpg?t=1637581930988&imwidth=563",
    name:"Patch Hoodie",
    price:27.33
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/548/803/4590548803_4_1_8.jpg?t=1637758954528&imwidth=563",
    name:"Contrast Patch Hoodie",
    price:28.99
},
{
    image:"https://static.pullandbear.net/2/photos//2022/V/0/2/p/4590/555/251/4590555251_4_1_8.jpg?t=1638889150143&imwidth=563",
    name:"Hoodie With Graphic Design",
    price:27.33
}
]
displayItem(data);
function displayItem(){
document.querySelector("#container").innerHTML = "";
// Data mapped to container div using map function
data.map(function (el) {
    // Main div has two div inside
var maindiv = document.createElement("div");
var image = document.createElement("img");
// image assigned image data
image.setAttribute("src", el.image);
image.setAttribute("id", "img");
console.log(image);
var div1 = document.createElement("div");
var select = document.createElement("select");
select.setAttribute("id", "sel");
var otp1 = document.createElement("option");
otp1.setAttribute("value", "^");
otp1.textContent = "^";
var otp2 = document.createElement("option");
otp2.setAttribute("value", "S");
otp2.textContent = "S";
var otp3 = document.createElement("option");
otp3.setAttribute("value", "M");
otp3.textContent = "M";
var otp4 = document.createElement("option");
otp4.setAttribute("value", "L");
otp4.textContent = "L";
var otp5 = document.createElement("option");
otp5.setAttribute("value", "XL");
otp5.textContent = "XL";
select.append(otp1, otp2, otp3, otp4, otp5);
var btn = document.createElement("button");
btn.textContent = "ADD";
btn.setAttribute("id", "addbtn");
div1.append(select, btn);
var div2 = document.createElement("div");
 var h6 = document.createElement("h6")   ;
 h6.textContent = el.name;
 h6.setAttribute("id", "name");
 var p = document.createElement("p");
 p.textContent = el.price;
 p.setAttribute("id", "price");
 div2.append(h6, p);
maindiv.append(image, div1, div2);
document.querySelector("#container").append(maindiv);
btn.addEventListener("click", function(){
    var newdata = {
        image: el.image,
        name: el.name,
        price: el.price,
        size: select.value,
    }
    cart.push(newdata);
    localStorage.setItem("cart", JSON.stringify(cart));
})
})
};



function filterNumber(){
    var selected = document.querySelector("#filter").value;
    if (selected == "high"){
        data.sort(function (a,b){
            return Number(b.price) - Number(a.price);
        });
    }
    if (selected == "low"){
        data.sort(function (a,b){
            return Number(a.price) - Number(b.price);
        });
    }
    displayItem(data);
}


function filterDisplay(){
    window.location.href = "Licensed.html"

}