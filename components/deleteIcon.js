import { mostrarTareas } from "./leerTareas.js";

const deleteIcon = (id) => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", () => {
    deleteTask(id);
  });
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector("[data-list]");
  const tareas = JSON.parse(localStorage.getItem("tareas"));
  const index = tareas.findIndex((item) => item.id === id);
  tareas.splice(index, 1);
  li.innerHTML = "";
  localStorage.setItem("tareas", JSON.stringify(tareas));
  mostrarTareas();
};

export default deleteIcon;
