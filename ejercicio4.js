function Libro(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
    this.prestado = false;

    this.prestar = function() {
        if(this.prestado === false) {
            console.log(`Te han prestado el libro "${this.titulo}".`);
            console.log(`----------------------------------------------------------------------`);
            this.prestado = true;
        } else {
            console.log(`El libro "${this.titulo}" ya está prestado.`);
            console.log(`----------------------------------------------------------------------`);
        }
    };

    this.devolver = function() {
        if(this.prestado === true) {
            console.log(`Has devuelto el libro "${this.titulo}".`);
            console.log(`----------------------------------------------------------------------`);
            this.prestado = false;
        } else {
            console.log(`El libro "${this.titulo}" no está prestado.`);
            console.log(`----------------------------------------------------------------------`);
        }
    };

    this.mostrarLibro = function() {
        console.log(`Titulo: ${this.titulo}.`);
        console.log(`Autor: ${this.autor}.`);
        console.log(`Año: ${this.año}.`);
        console.log(`Genero: ${this.genero}.`);
        console.log(`----------------------------------------------------------------------`);
    }
};

const libros = [
    libro1 = new Libro("Un cuento perfecto", "Elísabet Benavent", 2020, "Romance"),
    libro2 = new Libro("Línea de fuego", "Arturo Pérez-Reverte", 2020, "Novela histórica"),
    libro3 = new Libro("Aquitania", "Eva García Sáenz de Urturi", 2020, "Novela histórica"),
    libro4 = new Libro("La madre de Frankenstein", "Almudena Grandes", 2020, "Novela histórica"),
    libro5 = new Libro("El enigma de la habitación 622", "Joël Dicker", 2020, "Misterio"),
];

for (let i = 0; i < libros.length; i++) {
    libros[i].mostrarLibro();
};

libro1.prestar();
libro1.prestar();
libro1.devolver();
libro2.devolver();