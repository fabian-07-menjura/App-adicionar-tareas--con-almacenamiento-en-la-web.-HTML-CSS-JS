export default (fecha) => {
  const fechaTarea = document.createElement("li");
  fechaTarea.classList.add("date");
  fechaTarea.innerHTML = fecha;
  return fechaTarea;
};
