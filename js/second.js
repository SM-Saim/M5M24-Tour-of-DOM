console.log("second file");

// Adding new li in section 2

//
const addingLi = document.getElementById("second-list");
//
const newLiAdding = document.createElement("li");
newLiAdding.innerText = "Brand New List";

//
addingLi.appendChild(newLiAdding);
