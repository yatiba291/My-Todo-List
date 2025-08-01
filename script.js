// get the button
const addTask = document.getElementById("Add");

addTask.addEventListener("click", function () {
  const newTask = document.getElementById("newTask");

  const newText = newTask.value.trim();

  if (newText === "") {
    alert("Please enter a task.");
    return;
  }

  const unorderedList = document.getElementById("list");

  const li = document.createElement("li");

  //Task : Create a button with Javascript, add the content called "Delete" and add the tasklist with the button

const button = document.createElement("button");
button.textContent = "delete";




  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.color = "red";
    li.style.textTransform = "uppercase";
  });

button.addEventListener("click", function (){
  unorderedList.removeChild(li)
})


  li.textContent = newText;

  unorderedList.appendChild(li);
  li.appendChild(button); // Adds the button to the body

  newTask.value = ""; // clear the input field
});
