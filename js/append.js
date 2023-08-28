// 1.where to add
const usingAppend = document.getElementById("coldDrinks");

//2.what to add
const list1 = document.createElement("li");
list1.innerText = "Mixed Fruits";

//3.add the child
usingAppend.appendChild(list1);

// ----------------------------------------------------------------------------
// a new section is going to be added

// 1.where to add
const newSection = document.getElementById("main-container");

// 2.what to add
const section4 = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "This is section 4 which is about places";
section4.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Shundarban";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Sajek";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Ratargul";
ul.appendChild(li3);

section4.appendChild(ul);
// 3.add the child
newSection.appendChild(section4);

// Set inner HTML directly:

const myDressup = document.createElement("section");
myDressup.innerHTML = `
<h1>My current dressup is given below</h1>
<ul>
<li>T-shirt</li>
<li>Trouser</li>
<li>Glass</li>
</ul>
`;
newSection.appendChild(myDressup);
