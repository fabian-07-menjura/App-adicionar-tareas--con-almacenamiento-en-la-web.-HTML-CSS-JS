import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { mostrarTareas } from "./leerTareas.js";

export var agregarTarea = (evento) => {
  evento.preventDefault();
  const list = document.querySelector("[data-list]");
  var input = document.querySelector("[data-form-input]");
  const calendario = document.querySelector("[data-form-date]");
  const value = input.value;
  const fecha = calendario.value;
  const formatoDeFecha = moment(fecha).format("DD/MM/YYYY");
  console.log(formatoDeFecha);

  if (value === "" || fecha === "") {
    return;
  }
  input.value = "";
  calendario.value = "";
  list.innerHTML = "";

  //------------------------------Almacenamiento en la web-------------------
  const tareaCompletada = false;

  const objetoTareas = {
    id: uuid.v4(),
    value,
    formatoDeFecha,
    tareaCompletada,
  };

  const listaTareas = JSON.parse(localStorage.getItem("tareas")) || []; //array para almacenar todaslas tareas para pasarlas al local storage
  console.log(listaTareas);

  listaTareas.push(objetoTareas);

  localStorage.setItem("tareas", JSON.stringify(listaTareas));

  //------------------------------------------------------------------------
  mostrarTareas();
};

export const crearTarea = ({ value, formatoDeFecha, tareaCompletada, id }) => {
  const task = document.createElement("li");
  task.classList.add("card");
  const taskContent = document.createElement("div");

  console.log(tareaCompletada);

  const check = checkComplete(id);

  if (tareaCompletada) {
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  const date = document.createElement("span");
  date.innerText = formatoDeFecha;

  task.appendChild(taskContent);
  task.appendChild(date);
  task.appendChild(deleteIcon(id));

  return task;
};
