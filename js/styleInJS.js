// Evabe js er maddome html er specific tag gula k style kora ja, chaile ekane amra getElementByTag Name o use korte partam.

const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "5px";
  section.style.paddingLeft = "10px";
  section.style.backgroundColor = "lightBlue";
}

// Eibar 3 ta na, 1ta section k style korbo, er jonno age oi section e ekta id set kori.
// const section3Style = document.getElementById("section3");
// section3Style.style.backgroundColor = "green";

// JS diea Chaile class name add kora jai, remove kora jai.
const section3Style = document.getElementById("section3");
section3Style.classList.add("text-alignment");
section3Style.classList.remove("font");

// Overall, csser modde joto kaj kora jai, ta JS eo kora jai.
// Kisu kisu khetre eta k bole css in Java Script, amra react e er kosu ta dekbo.
// Tobe sobsomay, JS diea css er kaj korbo na.
