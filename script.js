//here we declare the buttons having the same functions in an array
var plus_buttons = document.querySelectorAll(".plus");
var minus_buttons = document.querySelectorAll(".minus");
var price_tags = document.querySelectorAll(".price");
var total = document.querySelector("#total");
var delete_buttons = document.querySelectorAll(".delete");
var like_buttons = document.querySelectorAll(".like");

// functions
function increment(e) {
  var clickedButton = e.target;
  var div = clickedButton.parentElement;
  var p = div.querySelector("p");
  var value = Number(p.innerHTML);
  value++;
  p.innerHTML = value;
  console.log(value);

  var td = div.parentElement;
  var tr = td.parentElement;
  var priceUNT = tr.querySelector(".unitPrice");
  var priceFNL = tr.querySelector(".price");
  priceFNL.innerHTML = value * Number(priceUNT.innerHTML);
  console.log(priceFNL);
  sum();
}
function decrement(e) {
  var buttonminus = e.target;
  var div = buttonminus.parentElement;
  var paragHTML = div.querySelector("p");
  var paragValue = Number(paragHTML.innerHTML);
  if (paragValue > 0) {
    paragValue--;
  }
  paragHTML.innerHTML = paragValue;
  console.log(paragValue);
  sum();
}

function sum() {
  var result = 0;
  for (let i = 0; i < price_tags.length; i++) {
    result += Number(price_tags[i].innerHTML);
  }

  total.innerHTML = result;
}

function deleteTR(e) {
  var deleteIcon = e.target;
  var tr = deleteIcon.parentElement.parentElement.parentElement.parentElement;
  var price = tr.querySelector(".price");
  price.innerHTML = 0;
  sum();
  tr.remove();
}
function changeColor(e) {
  var heart = e.target;
  if (heart.style.color == "gray") {
    heart.style.color = "red";
  } else {
    heart.style.color = "gray";
  }
}

// norbot les bts bl fonction
for (let i = 0; i < plus_buttons.length; i++) {
  plus_buttons[i].addEventListener("click", increment);
}

for (let i = 0; i < minus_buttons.length; i++) {
  minus_buttons[i].addEventListener("click", decrement);
}

for (let i = 0; i < delete_buttons.length; i++) {
  delete_buttons[i].addEventListener("click", deleteTR);
}
for (let i = 0; i < like_buttons.length; i++) {
  like_buttons[i].addEventListener("click", changeColor);
}
