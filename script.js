import { agregarTarea } from "./components/añadirTareas.js";
import { mostrarTareas } from "./components/leerTareas.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", agregarTarea);

mostrarTareas();
