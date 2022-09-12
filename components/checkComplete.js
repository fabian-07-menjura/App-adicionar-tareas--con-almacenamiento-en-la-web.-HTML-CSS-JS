const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => {
    completeTask(event, id);
  });
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");

  const tareas = JSON.parse(localStorage.getItem("tareas"));
  const index = tareas.findIndex((item) => item.id === id);
  tareas[index]["tareaCompletada"] = !tareas[index]["tareaCompletada"];
  localStorage.setItem("tareas", JSON.stringify(tareas));
  console.log(tareas);
};

export default checkComplete;
