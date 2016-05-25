// name, description, price, and URL for product image

//declare array with products
var buckles = [
  {
    img: "<img src='img/american-flag-buckle.jpg'>",
    name: "American Flag Buckle",
    description: "Nothing better than red, white and blue! 'MERICA!",
    price: "$50"
  },
  {
    img: src="<img src='img/aztec-buckle.jpg'>",
    name: "Aztec Buckle",
    description: "Aztec themed belt buckle.",
    price: "$54"
  },
  {
    img: src="<img src='img/elk-buckle.jpg'>",
    name: "Elk Buckle",
    description: "Elk belt buckle",
    price: "$52"
  },
  {
    img: src="<img src='img/longhorn-buckle.jpg'>",
    name: "Longhorn Buckle",
    description: "Longhorn state belt buckle",
    price: "$51"
  },
  {
    img: src="<img src='img/revolver-buckle.jpg'>",
    name: "Revolver Buckle",
    description: "Stick um up! Revolver belt buckle",
    price: "$52"
  },
  {
    img: src="<img src='img/star-buckle.jpg'>",
    name: "Star Buckle",
    description: "Star shaped belt buckle",
    price: "$52.50"
  },
  {
    img: src="<img src='img/texas-buckle.jpg'>",
    name: "Texas Buckle",
    description: "Texas shaped belt buckle",
    price: "$1,000"
  },
  {
    img: src="<img src='img/trail-riding-buckle.jpg'>",
    name: "Trail Riding Buckle",
    description: "Get your wagon ready with this trail riding belt buckle",
    price: "$50"
  },
  {
    img: src="<img src='img/pattern-buckle.jpg'>",
    name: "Pattern Buckle",
    description: "White steel belt buckle",
    price: "$55"
  }

];

//declare string var to store product info to print
var one= "";
var two= "";
var three= "";
var four= "";
var five= "";
var six= "";
var seven= "";
var eight= "";
var nine= "";

var container = document.getElementById('container');

//print info for first product div
for (var keyName in buckles[0])  {
  one += ` <p> ${buckles[0][keyName]} </p> `;
}
container.innerHTML += ` <div> ${one} </div> `;

//print info for first product div
for (var keyName in buckles[1])  {
  two += ` <p> ${buckles[1][keyName]} </p> `;
}
container.innerHTML += ` <div> ${two} </div> `;

//print info for first product div
for (var keyName in buckles[2])  {
  three += ` <p> ${buckles[2][keyName]} </p> `;
}
container.innerHTML += ` <div> ${three} </div> `;

//print info for first product div
for (var keyName in buckles[3])  {
  four += ` <p> ${buckles[3][keyName]} </p> `;
}
container.innerHTML += ` <div> ${four} </div> `;

//print info for first product div
for (var keyName in buckles[4])  {
  five += ` <p> ${buckles[4][keyName]} </p> `;
}
container.innerHTML += ` <div> ${five} </div> `;

//print info for first product div
for (var keyName in buckles[5])  {
  six += ` <p> ${buckles[5][keyName]} </p> `;
}
container.innerHTML += ` <div> ${six} </div> `;

//print info for first product div
for (var keyName in buckles[6])  {
  seven += ` <p> ${buckles[6][keyName]} </p> `;
}
container.innerHTML += ` <div> ${seven} </div> `;

//print info for first product div
for (var keyName in buckles[7])  {
  eight += ` <p> ${buckles[7][keyName]} </p> `;
}
container.innerHTML += ` <div> ${eight} </div> `;

//print info for first product div
for (var keyName in buckles[8])  {
  nine += ` <p> ${buckles[8][keyName]} </p> `;
}
container.innerHTML += ` <div> ${nine} </div> `;
