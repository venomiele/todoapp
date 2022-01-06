let button = document.getElementById("submit");
let input = document.getElementById("text");
let List = document.querySelector(".task");
let form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", () => {
  button.disabled = true;
input.addEventListener("keyup", () => {
  if (input.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
  form.addEventListener("submit", (e) => {
    e.preventDefault();
             let li = document.createElement("li");
             let task = input.value;
             li.innerHTML = task;
             List.append(li);           
             input.value = "";
  });
        });
                    





