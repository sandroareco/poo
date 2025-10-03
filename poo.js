//clase 1: Clases, atributos, Constructor, metodos
// class Alumno {
//     constructor(nombre, edad, curso) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.curso = curso;
//     }

//     presentarse() {
//         console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y curso ${this.curso}`);
//     }

//     cambiarCurso(nuevoCurso) {
//         this.curso = nuevoCurso;
//         console.log(`${this.nombre} ahora está en el curso ${this.curso}`);
//     }
// }

// const alumno1 = new Alumno("Ana", 20, "Programación I");

// alumno1.presentarse(); 
// alumno1.cambiarCurso("Matemática II");
// alumno1.presentarse(); 



//ejercicio 1:

// Crear una clase llamada Mascota que tenga como atributos: nombre, tipo (perro, gato, etc.) y edad.

// Agregar un método presentarse() que muestre:
// "Soy <nombre>, un <tipo> de <edad> años."

// Agregar un método cumplirAnios() que aumente en 1 la edad y muestre:
// "Feliz cumpleaños <nombre>, ahora tienes <edad> años."

// Instanciar al menos 2 mascotas y usar los métodos.

//respuesta ejercicio 1:

// class Mascota {
//     constructor(nombre, tipo, edad) {
//         this.nombre = nombre;
//         this.tipo = tipo;
//         this.edad = edad;
//     }

//     // Método para presentarse
//     presentarse() {
//         console.log(`Soy ${this.nombre}, un ${this.tipo} de ${this.edad} años.`);
//     }

//     // Método para cumplir años
//     cumplirAnios() {
//         this.edad++;
//         console.log(`Feliz cumpleaños ${this.nombre}, ahora tienes ${this.edad} años.`);
//     }
// }

// const mascota1 = new Mascota("Firulais", "perro", 3);
// const mascota2 = new Mascota("Michi", "gato", 5);

// mascota1.presentarse();  

// mascota2.presentarse();  

// mascota1.cumplirAnios(); 

// mascota2.cumplirAnios(); 

//Clase 2: HERENCIA

// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     presentarse() {
//         console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
//     }
// }

// class Alumno extends Persona {
//     constructor(nombre, edad, curso) {
//         super(nombre, edad);
//         this.curso = curso;
//     }

//     presentarse() {
//         console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y curso ${this.curso}.`);
//     }
// }

// const alumno1 = new Alumno("Ana", 20, "Programación I");
// alumno1.presentarse();

// Podria usar el presentarse() de Persona:

// class Alumno extends Persona {
//     constructor(nombre, edad, curso) {
//         super(nombre, edad);
//         this.curso = curso;
//     }
// }

// const alumno1 = new Alumno("Ana", 20, "Programación I");
// alumno1.presentarse();  

//EJERCICIO 2:

// Crear una clase Vehiculo con atributos: marca, modelo, año.

// Método mostrarInfo() que imprima:
// "Vehículo marca <marca>, modelo <modelo>, año <año>".

// Crear una subclase Auto que herede de Vehiculo y agregue el atributo puertas.
// Redefinir mostrarInfo() para que también muestre la cantidad de puertas.

// Crear una subclase Moto que herede de Vehiculo y agregue el atributo cilindrada.

// Redefinir mostrarInfo() usando super.mostrarInfo() para no repetir código.

//RESPUEST A EJERCICIO 2:

// class Vehiculo {
//     constructor(marca, modelo, anio) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//     }

//     mostrarInfo() {
//         console.log(`Vehículo marca ${this.marca}, modelo ${this.modelo}, año ${this.anio}`);
//     }
// }

// class Auto extends Vehiculo {
//     constructor(marca, modelo, anio, puertas) {
//         super(marca, modelo, anio);
//         this.puertas = puertas;
//     }

//     // Versión B: sobrescribir
//     mostrarInfo() {
//         console.log(`Auto marca ${this.marca}, modelo ${this.modelo}, año ${this.anio}, con ${this.puertas} puertas`);
//     }
// }

// class Moto extends Vehiculo {
//     constructor(marca, modelo, anio, cilindrada) {
//         super(marca, modelo, anio);
//         this.cilindrada = cilindrada;
//     }

//     mostrarInfo() {
//         super.mostrarInfo(); // aprovecha el método de Vehiculo
//         console.log(`Tiene una cilindrada de ${this.cilindrada} cc.`);
//     }
// }

// // ----- Pruebas -----
// const auto1 = new Auto("Toyota", "Corolla", 2022, 4);
// auto1.mostrarInfo();
// // -> Auto marca Toyota, modelo Corolla, año 2022, con 4 puertas

// const moto1 = new Moto("Yamaha", "R3", 2021, 300);
// moto1.mostrarInfo();
/*
Vehículo marca Yamaha, modelo R3, año 2021
Tiene una cilindrada de 300 cc.
*/


