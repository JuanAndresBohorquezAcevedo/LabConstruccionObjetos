function Mascota (nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function() {
        console.log(`Hola! Me llamo ${this.nombre}, soy un ${this.especie}, tengo ${this.edad} años y peso ${this.peso} Kg.`);
        console.log(`----------------------------------------------------------------------`);
    };
};

const mascotas = [
    mascota1 = new Mascota("Max", "perro", 5, 20),
    mascota2 = new Mascota("Luna", "gato", 3, 4),
    mascota3 = new Mascota("Coco", "conejo", 2, 2),
    mascota4 = new Mascota("Rocky", "loro", 2, 2),
    mascota5 = new Mascota("Patacon", "perro", 4, 2), 
];

for (let i = 0; i < mascotas.length; i++) {
    mascotas[i].presentarse();
}