import { crearTarea } from "./añadirTareas.js";
import fechaDeTarea from "./fechaDeTareas.js";
import { unicasFechas, fechasOrdenadas } from "../services/date.js";

export const mostrarTareas = () => {
  const lista = document.querySelector("[data-list]");
  const listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  //   console.log(listaTareas);
  const fechas = unicasFechas(listaTareas);

  // ---------------Ordenar fechas--------------------
  const orden = fechasOrdenadas(fechas);
  // console.log(orden);
  // -----------------------------------------------

  fechas.forEach((element) => {
    const dateMoment = moment(element, "DD/MM/YYYY");

    lista.appendChild(fechaDeTarea(element));
    listaTareas.forEach((element) => {
      const datoTarea = moment(element.formatoDeFecha, "DD/MM/YYYY");

      const diferencia = dateMoment.diff(datoTarea);
      // console.log(diferencia);

      if (diferencia === 0) {
        lista.appendChild(crearTarea(element));
      }
    });
  });
};
