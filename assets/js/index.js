const input = document.getElementById("newTodo");
const plusSvg = document.getElementById("cross");
const uList = document.getElementById("todo-list");
const lis = document.querySelectorAll("li");

let isClicked = false;

doneTodo();
removeTodo();

if (lis.length === 0) {
  inputBlock();
} else {
  input.style.display = "none";
}

document.getElementById("plus").addEventListener("click", () => {
  if (isClicked) {
    input.style.display = "none";
    isClicked = !isClicked;
    plusSvg.classList.remove("plus-active");
  } else {
    inputBlock();
  }
});

input.addEventListener("change", function () {
  let item = document.createElement("li");
  item.append(document.createTextNode(`${this.value}`));
  let span = document.createElement("span");
  span.innerHTML = `<img class="trash-icon" src="assets/imgs/trash.svg"
  />`;
  item.append(span);
  uList.append(item);
  this.value = "";
});

function doneTodo() {
  uList.addEventListener("click", (e) => {
    if (e.target.nodeName === "LI") {
      return e.target.classList.toggle("cross-out");
    }
  });
}

function removeTodo() {
  uList.addEventListener("click", function (e) {
    if (e.target.nodeName === "IMG") {
      return e.target.parentNode.parentNode.remove();
    }
  });
}

function inputBlock() {
  input.style.display = "block";
  isClicked = !isClicked;
  plusSvg.classList.add("plus-active");
}
