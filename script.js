const changeTheme = document.querySelector(".theme");
const cover = document.querySelector(".cover");
const body = document.querySelector("body");
const input = document.querySelector(".input");
const form = document.querySelector(".form");
const li = document.querySelectorAll("li");
const checkbox = document.querySelectorAll(".checkbox");
const deleteLi = document.querySelectorAll(".delete");
const counter = document.querySelector(".counter");
const button = document.querySelectorAll("button");
const ul = document.querySelector("ul");
const checkToAdd = document.querySelector(".checkToAdd");
const clear = document.querySelector(".clear");

// change Theme
function toChangeTheme() {
   if (cover.classList.contains("desktopDark")) {
      cover.classList.remove("desktopDark");
      cover.classList.add("desktopLight");
      body.style.background = "white";
      body.style.color = "hsl(235, 19%, 35%)";
      input.style.background = "white";
      form.style.background = "white";
      li.forEach((e) => {
         e.classList.remove("dark");
         e.classList.add("light");
      });
      checkbox.forEach((e) => {
         e.style.border = "1px solid hsl(234, 39%, 85%)";
      });
      button.forEach((e) => {
         e.style.color = "hsl(236, 9%, 61%)";
         e.classList.toggle("btn");
      });
      changeTheme.classList.remove("sun");
      changeTheme.classList.add("moon");
   } else if (cover.classList.contains("desktopLight")) {
      cover.classList.remove("desktopLight");
      cover.classList.add("desktopDark");
      body.style.background = "#181824";
      body.style.color = "hsl(234, 39%, 85%)";
      input.style.background = "#25273C";
      form.style.background = "#25273C";
      li.forEach((e) => {
         e.classList.remove("light");
         e.classList.add("dark");
      });
      checkbox.forEach((e) => {
         e.style.border = "1px solid white";
      });
      button.forEach((e) => {
         e.style.color = "hsl(233, 14%, 35%)";
         e.classList.toggle("btn");
      });
      changeTheme.classList.remove("moon");
      changeTheme.classList.add("sun");
   }
}
changeTheme.addEventListener("click", toChangeTheme);

// -------------add item ----------------

function addItem(e) {
   const value = input.value;
   e.preventDefault();
   addToDom();
   input.value = "";
   counterF();
}
function addToDom() {
   const newLi = document.createElement("li");
   newLi.classList.add("dark");
   newLi.innerHTML = `  <div>
                           <input type="checkbox" class="checkbox" id="">
                           <p>${input.value}</p>
                        </div>
                        <div class="remove-item">
                           <img src="./images/icon-cross.svg" alt="" class="delete">
                        </div>`;
   ul.insertAdjacentElement("afterbegin", newLi);
   counterF();
}
form.addEventListener("submit", addItem);

// ------------------delete Element----------------------------
function toDelete(e) {
   if (e.target.classList.contains("delete")) {
      e.target.closest("li").remove();
      counterF();
   }
}
function removeItem(item) {
   item.remove();
   counterF();
}
ul.addEventListener("click", toDelete);

//----------------------when check text decoratoion-----------

function toggleTextDecoration(e) {
   const target = e.target;
   const pElement = target.closest("li").querySelector("p");
   if (target.checked) {
      pElement.style.textDecoration = "line-through";
   } else {
      pElement.style.textDecoration = "none";
   }
}
checkbox.forEach((checkbox) => {
   checkbox.addEventListener("change", toggleTextDecoration);
});

// --------------------------clear everything-------------
function toClear() {
   ul.innerHTML = ``;
}

clear.addEventListener("click", toClear);
//-----------when first box checked add item ------------------
function addItemAfterCheck(e) {
   const target = e.target;
   if (target.checked) {
      e.preventDefault();

      setTimeout(() => form.submit(), 0);
   }
   counterF();
}

checkToAdd.addEventListener("change", addItemAfterCheck);
// -----------------------counter --------------------------
function counterF() {
   const length = ul.querySelectorAll("li").length;
   counter.innerHTML = ``;
   const count = document.createElement("p");
   count.innerHTML = `${length} items left`;
   counter.insertAdjacentElement("afterbegin", count);
}
counterF();
