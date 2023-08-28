// Adding a section in the main tag

//Where to add
const addingSection = document.getElementById("main-container");

//What to add
const sectionNew = document.createElement("section");
sectionNew.innerHTML = `
<h1>Some Basic Tools for a Laptop</h1>
<ul>
<li>Keyboard</li>
<li>Razor mouse</li>
<li>PowerBankmouse</li>
<li>WebCam</li>
<li>PowerBank</li>
</ul>

`;
addingSection.appendChild(sectionNew);
