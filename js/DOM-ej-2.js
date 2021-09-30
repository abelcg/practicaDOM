/* Generaciones
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
 año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:

mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.

Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona,
 permitiendo ingresar las propiedades mediante un formulario, 
 también agregar los botones “mostrar generacion”, es “mayor de edad” e 
 indicar en un alert el resultado de la función correspondiente.
 */


//Varables para el alert

let alrtPlaceholder = document.getElementById("AlertPlaceholder");
let alrtTrigger = document.getElementById("AlertBtn");

function alert(message, type) {
  let conteiner = document.createElement("div");
  conteiner.innerHTML =
    '<div class="neo top-0 start-50 translate-middle-x text-center fs-2 fw-bold  alert alert-' +
    type +
    ' alert-dismissible  fade show" role="alert" id="my-alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-target="#my-alert" aria-label="Close"></button></div>';

  alrtPlaceholder.append(conteiner);
}

class Personas {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let nacimiento = this.anioNacimiento;
    if (nacimiento >= 1994 && nacimiento <= 2010) {
      let parent = document.getElementById("modal-footer").parentNode;
      let modal1 = document.getElementById("modal-footer");
      let modalContent = document.getElementById("modal-content");
      let modalBody1 = document.createElement("div");
      modalBody1.innerHTML = `
      <span contenteditable="true" class="generationTitle" id="ModalToggleLabel">Eres de la generación Z </span>
      <p class="fs-2 text-center">Rasgo característico:  irreverencia</p>`;

      modalBody1.className = "modal-body";
      // modal1.append(modalBody1);
      parent.insertBefore(modalBody1, modal1);

      // como son 2 condiciones a evaluar crea el div por c/u => elimino efectivamente el div repetido
      if (modalContent.hasChildNodes() && modalContent.children.length > 3) {
        modalContent.removeChild(modalContent.children[2]);
      }
    } else if (nacimiento >= 1981 && nacimiento <= 1993) {
      let parent = document.getElementById("modal-footer").parentNode;
      let modal1 = document.getElementById("modal-footer");
      let modalContent = document.getElementById("modal-content");
      //console.log(modal1);
      let modalBody1 = document.createElement("div");

      modalBody1.innerHTML = `
      <span contenteditable="true" class="generationTitle" id="ModalToggleLabel">Eres de la generación Y "millennials"</span>
      <p class="fs-2 text-center">Rasgo característico: frustración</p>`;

      modalBody1.className = "modal-body";

      parent.insertBefore(modalBody1, modal1);
      // modal1.appendChild(modalBody1);

      /* console.log(modalContent.children[0]);
      console.log(modalContent.children[1]);
      console.log(modalContent.children[2]); */

      // como son 2 condiciones a evaluar crea el div por c/u => elimino efectivamente el div repetido
      if (modalContent.hasChildNodes() && modalContent.children.length > 3) {
        modalContent.removeChild(modalContent.children[2]);
      }
    } else if (nacimiento >= 1969 && nacimiento <= 1980) {
      let parent = document.getElementById("modal-footer").parentNode;
      let modal1 = document.getElementById("modal-footer");
      let modalContent = document.getElementById("modal-content");
      let modalBody1 = document.createElement("div");
      modalBody1.innerHTML = `
      <span contenteditable="true" class="generationTitle" id="ModalToggleLabel">Eres de la generación X</span>
      <p class="fs-2 text-center">Rasgo característico: Obsesión por el éxito</p>`;

      modalBody1.className = "modal-body";
      parent.insertBefore(modalBody1, modal1);

      // como son 2 condiciones a evaluar crea el div por c/u => elimino efectivamente el div repetido
      if (modalContent.hasChildNodes() && modalContent.children.length > 3) {
        modalContent.removeChild(modalContent.children[2]);
      }
    } else if (nacimiento >= 1949 && nacimiento <= 1968) {
      let parent = document.getElementById("modal-footer").parentNode;
      let modal1 = document.getElementById("modal-footer");
      let modalContent = document.getElementById("modal-content");
      let modalBody1 = document.createElement("div");
      modalBody1.innerHTML = `
      <span contenteditable="true" class="generationTitle" id="ModalToggleLabel">Eres de la generación Baby Boom"</span>
      <p class="fs-2 text-center">Rasgo característico: Ambición</p>`;

      modalBody1.className = "modal-body";
      parent.insertBefore(modalBody1, modal1);

      // como son 2 condiciones a evaluar crea el div por c/u => elimino efectivamente el div repetido
      if (modalContent.hasChildNodes() && modalContent.children.length > 3) {
        modalContent.removeChild(modalContent.children[2]);
      }
    } else if (nacimiento >= 1930 && nacimiento <= 1948) {
      let parent = document.getElementById("modal-footer").parentNode;
      let modal1 = document.getElementById("modal-footer");
      let modalContent = document.getElementById("modal-content");
      let modalBody1 = document.createElement("div");
      modalBody1.innerHTML = `
      <span contenteditable="true" class="generationTitle" id="ModalToggleLabel">Eres de la Silent Generation"</span>
      <p class="fs-2 text-center">Rasgo característico: Austeridad</p>`;

      modalBody1.className = "modal-body";
      parent.insertBefore(modalBody1, modal1);

      // como son 2 condiciones a evaluar crea el div por c/u => elimino efectivamente el div repetido
      if (modalContent.hasChildNodes() && modalContent.children.length > 3) {
        modalContent.removeChild(modalContent.children[2]);
      }
    }
  }

  esMayorDeEdad() {
    let edad = this.edad;

    if (edad >= 18) {
      alert("GENIAL!! ERES MAYOR DE EDAD", "light");
    } else {
      alert("ERES MENOR DE EDAD!!", "light");
    }
  }

  mostrarDatos() {
    let parentNode = document.getElementById("modal-footer2").parentNode;
    let modal2 = document.getElementById("modal-footer2");
    let modalContent2 = document.getElementById("modal-content2");
    let modalBody2 = document.createElement("div");
    modalBody2.innerHTML = `
      <span contenteditable="true" class="generationTitle" id="ModalToggleLabel2">  Tus Datos</span>
      <p class="fs-2 text-center">Nombre: ${this.nombre}</p>
      <p class="fs-2 text-center">Edad: ${this.edad} </p>
      <p class="fs-2 text-center">DNI: ${this.dni} </p>
      <p class="fs-2 text-center">Sexo: ${this.sexo} </p>
      <p class="fs-2 text-center">Peso: ${this.peso} </p> 
      <p class="fs-2 text-center">Altura: ${this.altura}</p>
      <p class="fs-2 text-center">Año de nacimiento: ${this.anioNacimiento}</p>`;

    modalBody2.className = "modal-body";
    parentNode.insertBefore(modalBody2, modal2);

    // como son 2 condiciones a evaluar crea el div por c/u => elimino efectivamente el div repetido
    if (modalContent2.hasChildNodes() && modalContent2.children.length > 3) {
      modalContent2.removeChild(modalContent2.children[2]);
    }
  }
}

let crearPersona = (event) => {
  event.preventDefault();
   
  // primero valida el formulario
   
  let alerta = document.querySelector('#msjAlerta');
  if (
    validarCampoRequerido(document.querySelector("#nombre")) &&
    validarEdad(document.querySelector("#Edad")) &&
    validarDNI(document.querySelector("#DNI")) &&
    validarPeso(document.querySelector("#Peso")) &&
    validarAltura(document.querySelector("#Altura"))
  ) {
    console.log("validación correcta");
    alerta.className = 'neo alert alert-light text-danger mt-4 fs-4 fw-bold d-none';
  } else {
    console.log("validación incorrecta");
    alerta.className = 'neo alert alert-light text-danger mt-4 fs-4 fw-bold';
  }

  // creamos la persona
  let persona = new Personas(
    document.getElementById("nombre").value,
    document.getElementById("Edad").value,
    document.getElementById("DNI").value,
    document.getElementById("sexo").value,
    document.getElementById("Peso").value,
    document.getElementById("Altura").value,
    document.getElementById("AnioNacimiento").value
  );

  //solo para mostrar
  console.warn("agregado", persona);

  //document.querySelector("#formu").reset(); //resetea el fromualrio borrando todo lo ingresado
  persona.mostrarGeneracion();

  //guardo en local storage,
  localStorage.setItem("laPersona", JSON.stringify(persona));

  persona.mostrarGeneracion();
  persona.mostrarDatos();

  document.getElementById("eresAdulto").addEventListener("click", () => {
    persona.esMayorDeEdad();
  });
};

document.getElementById("enviar").addEventListener("click", crearPersona);

let borrarFormulario = () =>{
  document.querySelector("#formu").reset(); //resetea el fromualrio borrando todo lo ingresado
  window.location.reload();
}

document.querySelector('#borrarForm').addEventListener('click', borrarFormulario)

// Validaciones del formulario

function validarCampoRequerido(input){
  console.log(input);
  if (input.value.trim().length > 0 && input.value.trim().length >= 3) {
    console.log("el dato es correcto");
      input.className = 'form-control text-secondary border-1 input fs-4 text-center is-valid';
      return true;
  } else {
    console.log("el dato es INCORRECTO");
    input.className = 'form-control text-secondary border-1 input fs-4 text-center is-invalid';
    return false;
  }
}

function validarEdad(input) {
  // validar con expresiones regulares
  let patron = /^110|[1-9]?\d$/;
  if (patron.test(input.value)) {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-valid';
    return true;
  } else {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-invalid';
    return false;
  }
}

function validarDNI(input) {
  // validar con expresiones regulares
  let patron = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
  if (patron.test(input.value)) {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-valid';
    return true;
  } else {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-invalid';
    return false;
  }
}

function validarPeso(input) {
  // validar con expresiones regulares
  let patron = /^(0|[1-9]\d*)(,\d+)?$/;
  if (patron.test(input.value)) {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-valid';
    return true;
  } else {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-invalid';
    return false;
  }
}

function validarAltura(input) {
  // validar con expresiones regulares
  let patron = /^[1-9][\.\d]*(,\d+)?$/;
  if (patron.test(input.value)) {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-valid';
    return true;
  } else {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-invalid';
    return false;
  }
}

function validarAnioNacimiento(input) {
  // validar con expresiones regulares
  let patron = /(?:19|20)\d\d/;
  if (patron.test(input.value)) {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-valid';
    return true;
  } else {
    input.className = 'form-control text-secondary border-0 input fs-4 text-center is-invalid';
    return false;
  }
}


document.querySelector('#nombre').addEventListener('blur', ()=>{
  validarCampoRequerido(document.querySelector('#nombre'))});

document.querySelector("#Edad").addEventListener("blur", () => {
  validarEdad(document.getElementById("Edad"));
});

document.getElementById("DNI").addEventListener("blur", () => {
  validarDNI(document.getElementById("DNI"));
});
document.getElementById("Peso").addEventListener("blur", () => {
  validarPeso(document.getElementById("Peso"));
});
document.getElementById("Altura").addEventListener("blur", () => {
  validarAltura(document.getElementById("Altura"));
});
document.getElementById("AnioNacimiento").addEventListener("blur", () => {
  validarAltura(document.getElementById("AnioNacimiento"));
});

