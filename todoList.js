const agregar = document.getElementById("agregar");
const ulTareas = document.getElementById("resumen-2");
const contador = document.getElementById("total");
const realizadas = document.getElementById("realizadas");
const tarea_input = document.getElementById("tarea_input");
const divResultado = document.getElementById("divResultado");
let num = 0;

let misTareas = [];

document.getElementById("agregar").addEventListener("click", () => {
  if (tarea_input.value) {
    misTareas.push({
      id: num++,
      tarea: tarea_input.value,
      realizada: false,
    });
    contador.innerText = misTareas.length;
    realizadas.innerText = misTareas.filter((tarea) => {
      if (tarea.realizada === true) {
        return true;
      }
    }).length;
  }
  renderTareas();
});

const renderTareas = () => {
  divResultado.innerHTML = misTareas.map((obj) => {
    return `        
        <tr>
        <th>${obj.id}</th>
        <th>${obj.tarea}</th>
        <th>${obj.realizada? `<input type="checkbox" checked/>`:`<input type="checkbox"/>` }</th>
        <th><button onclick="borrar(${obj.id})">borrar</button></th>
        </tr>
    `;
  });
};

const borrar = (id) => {
    console.log(misTareas);
  misTareas = misTareas.filter(
    (tarea) => tarea.id != id
  );
  console.log(misTareas);
  renderTareas();
};


