let addValue = document.getElementById("addValue");
let result = document.getElementById("result");
function addTodo() {
  if (addValue.value == "") {
    alert("입력된 내용이 없습니다.");
  } else {
    let newDiv = document.createElement("div");
    let newSpan = document.createElement("span");
    let delete_btn = document.createElement("button");
    newSpan.innerHTML = addValue.value;
    newDiv.appendChild(newSpan);
    newDiv.appendChild(delete_btn);
    result.appendChild(newDiv);
    newDiv.style.alignItems = "center";
    delete_btn.textContent = "X";
    delete_btn.style.border = "none";
    delete_btn.style.float = "right";
    delete_btn.style.fontSize = "20px";
    delete_btn.style.backgroundColor = "beige";
    delete_btn.addEventListener("click", delete_content);
    newDiv.addEventListener("click", function () {
      newDiv.style.textDecoration = "line-through";
      newDiv.style.color = "gray";
    });
    addValue.value = "";
    addValue.focus();
  }
}

function delete_content(e) {
  let remove_One = e.target.parentElement;
  remove_One.remove();
}
