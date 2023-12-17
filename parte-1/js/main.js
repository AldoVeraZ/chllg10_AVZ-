/* Se define un constructor de objetos Libro que toma los parámetros titulo y autor y los asigna a las propiedades correspondientes del objeto.
 Luego, se crea un nuevo objeto unLibro utilizando este constructor y se muestra la información del libro en la consola. */
// main.js

// Constructor de objetos Libro
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;

  // Construir la oración en el formato deseado
  this.oracion = `Título: ${titulo}. - Autor: ${autor.toUpperCase()}`;

  // Método para mostrar datos en consola
  this.mostrarDatosEnConsola = function () {
    console.log(this.oracion);
  };

  // Método para mostrar datos en una ventana alert
  this.mostrarDatosEnAlert = function () {
    alert(this.oracion);
  };

  // Método para obtener el título del libro
  this.getTitulo = function () {
    return this.titulo;
  };

  // Nuevo método mostrarDatos con parámetro opcional
  this.mostrarDatos = function (opcion) {
    // Verificar el valor del parámetro y llamar al método correspondiente
    if (opcion === "alert") {
      this.mostrarDatosEnAlert();
    } else if (opcion === "console" || !opcion) {
      this.mostrarDatosEnConsola();
    } else {
      console.warn("Por consola: Se ha enviado un parámetro incorrecto.");
    }
  };
}

// Crear un libro
let unLibro = new Libro("Ángeles y Demonios", "Dan Brown");

// Mostrar la información en consola utilizando el nuevo método
unLibro.mostrarDatosEnConsola();

// Mostrar la información en una ventana alert utilizando el nuevo método
unLibro.mostrarDatosEnAlert();

// Crear un nuevo libro
let nuevoLibro = new Libro("Fuego y Sangre", "George R. R. Martin");

// Obtener el título del nuevo libro
let tituloDelNuevoLibro = nuevoLibro.getTitulo();

// Mostrar el título en una ventana alert
alert(tituloDelNuevoLibro);

// Crear un nuevo libro
// let nuevoLibro = new Libro("Fuego y Sangre", "George R. R. Martin");

// Mostrar datos en consola por defecto
nuevoLibro.mostrarDatos();

// Mostrar datos en una ventana alert
nuevoLibro.mostrarDatos("alert");

// Mostrar datos en la consola
nuevoLibro.mostrarDatos("console");

// Mostrar advertencia por consola (parámetro incorrecto)
nuevoLibro.mostrarDatos("otro");
