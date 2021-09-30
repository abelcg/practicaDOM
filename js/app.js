function cambiarTitulo() {
  console.log("Desde la función cambiar titulo");
  // traer un elemento o etiqueta del html
  //let tituloH1 = document.querySelector('#titulo');
  // opcion 2 para obtener un elemento del html
  let tituloH1 = document.getElementById("titulo");
  console.log(tituloH1.innerHTML);
  tituloH1.innerHTML = "Un nuevo titulo"; //con la propiedad innerHTML obtengo el texto de la tag
  tituloH1.className = "display-2 text-primary";
}

function verMas() {
  console.log("prueba desde ver mas");
  // buscar el boton
  let btnVerMas = document.getElementById('btnVerMas');
  // Crear y agregar un elemento al DOM
  // paso 1 - buscar el elemento padre
  let articulos = document.getElementsByTagName("article");
  console.log(articulos[0]);

  if (btnVerMas.innerHTML == 'ver mas...') {
      
      btnVerMas.innerHTML = 'ocultar';
      btnVerMas.className = 'btn btn-outline-primary';  
      // paso 2 - crear el elemento hijo
      // let parrafo = document.createElement("p"); //<p></p>
      // console.log(parrafo);
      // parrafo.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      //                      Necessitatibus fugiat molestiae pariatur possimus cumque doloribus. 
      //                      Dolorem eligendi alias impedit ipsam porro repellendus tempora nam autem molestiae 
      //                      dolore iste obcaecati vero nulla, velit quo error odit nemo consectetur eveniet voluptatibus? 
      //                      Ad accusamus sed voluptatem possimus odio rerum in aliquam magni. Tenetur obcaecati doloribus veritatis. 
      //                      Autem corporis cum deleniti quo eos enim repellendus dolores optio in atque quod eum delectus impedit 
      //                      recusandae nostrum, reiciendis placeat. Laborum reprehenderit est dolores veritatis repellendus sunt 
      //                      quaerat perferendis explicabo nulla adipisci culpa facilis, mollitia alias nostrum nobis! Eius quo 
      //                      accusantium maxime laboriosam, saepe blanditiis incidunt corrupti.`;
    
      // parrafo.className = "lead";
    
      // // paso 3 - agregar el nuevo elemento hijo a su respectivo padre
      // articulos[1].appendChild(parrafo);


      //segunda forma para crear elementos HTML desde JS
    let parrafo = `<p class="lead">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil
    quia hic exercitationem ipsum animi illum, quibusdam harum maxime
    veniam quas inventore quam qui debitis reiciendis perferendis
    expedita! Fugiat cupiditate veniam tenetur blanditiis iste minus,
    dolorum esse repellat in quia nihil laborum itaque alias similique
    labore? Est, nostrum! Quam maxime nemo ipsa architecto, inventore
    omnis aperiam sit! Quod porro ea corrupti dignissimos cumque sit,
    distinctio architecto aperiam. Repudiandae dicta corporis nemo sint
    vero sapiente facilis maxime nisi veniam nihil pariatur, quidem
    explicabo a assumenda aliquam alias? Incidunt sit quis odio enim,
    accusamus voluptatibus? Doloremque modi tenetur at, eos officia aut?
  </p>`;
  articulos[1].innerHTML += parrafo; //conservo lo anterior y agrego lo nuevo
  }else{
      console.log('ahora cambiar el texto del botón por ver mas...')
      // volver el boton a su estado original ver mas...
      btnVerMas.innerHTML = 'ver mas...';
      btnVerMas.className = 'btn btn-outline-danger';

      // eliminar parrafo
        console.log(articulos[1].hasChildNodes()); // sirve para saber si tengo nodos
        console.log(articulos[1].children.length); // sirve para saber cuantos nodos hijos posee
        console.log(articulos[1].children); // sirve para saber cuantos nodos hijos posee
        if (articulos[1].hasChildNodes() && articulos[1].children.length > 2) {

            // eleiminar efectivamente el parrafo
            articulos[1].removeChild(articulos[1].children[2]);
        }
  }
}
