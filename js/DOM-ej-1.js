/* 
Números mágicos
Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, 
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, 
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

*/

let alertPlaceholder = document.getElementById("liveAlertPlaceholder");
let alertTrigger = document.getElementById("liveAlertBtn");

function alert(message, type) {
  let wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="position-absolute bottom-50 end-50  alert alert-' +
    type +
    ' alert-dismissible  fade show" role="alert" id="my-alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-target="#my-alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}

let adivinar = () => {
  let nroIngresado = document.getElementById("form").value;
  console.log("El nro ingresado es = " + nroIngresado);
  console.log("el nro aleatorio es = " + aleatorio());
  return nroIngresado == aleatorio() && alertTrigger
    ? alertTrigger.addEventListener("click", function () {
        alert("Adivinaste!! tu número es el mágico", "success");
      })
    : alertTrigger.addEventListener("click", function () {
        if (nroIngresado > aleatorio()) {
          alert(
            "No adivinaste tu número es mayor que el mágico!! prueba de nuevo",
            "danger"
          );
        } else if (nroIngresado < aleatorio()) {
          alert(
            "No adivinaste tu número es menor que el mágico!! prueba de nuevo",
            "danger"
          );
        }
      });
};

let aleatorio = () => {
  return Math.floor(Math.random() * 10 + 1);
};
