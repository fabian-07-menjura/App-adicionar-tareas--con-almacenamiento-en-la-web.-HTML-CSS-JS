export const unicasFechas = (tareas) => {
  const unicas = [];
  tareas.forEach((element) => {
    if (!unicas.includes(element.formatoDeFecha)) {
      unicas.push(element.formatoDeFecha);
    }
    // console.log(unicas);
  });
  return unicas;
};

export const fechasOrdenadas = (fechas) => {
  return fechas.sort((a, b) => {
    const primeraFecha = moment(a, "DD/MM/YYYY");
    const segundaFecha = moment(b, "DD/MM/YYYY");
    return primeraFecha - segundaFecha;
  });
};
