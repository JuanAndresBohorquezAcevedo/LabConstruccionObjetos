const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, año, color, kilometraje) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.kilometraje = kilometraje;

    this.mostrarInfo = function() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
        console.log(`Año: ${this.año}`);
        console.log(`Color: ${this.color}`);
        console.log(`Kilometraje: ${this.kilometraje} km`);
        console.log("------------------------------");
    };

    this.cambiarColor = function(nuevoColor) {
        this.color = nuevoColor;
        console.log(`Nuevo color: ${this.color}`);
        console.log("------------------------------");
    };

    this.recorrer = function(kilometros) {
        this.kilometraje += kilometros;
        console.log(`Nuevo kilometraje: ${this.kilometraje} km`);
        console.log("------------------------------");
    };
}


const vehiculos = [];

for (let i = 0; i < 3; i++) {

    const marca = prompt(`Ingrese la marca del vehículo ${i + 1}:`);
    const modelo = prompt(`Ingrese el modelo del vehículo ${i + 1}:`);
    const año = Number(prompt(`Ingrese el año del vehículo ${i + 1}:`));
    const color = prompt(`Ingrese el color del vehículo ${i + 1}:`);
    const kilometraje = Number(prompt(`Ingrese el kilometraje del vehículo ${i + 1}:`));

    const vehiculo = new Vehiculo(
        marca,
        modelo,
        año,
        color,
        kilometraje
    );

    vehiculos.push(vehiculo);
}

for(let i = 0; i < vehiculos.length; i++) {
    vehiculos[i].mostrarInfo();
}

vehiculos[2].cambiarColor("Negro");
vehiculos[2].recorrer(100);
vehiculos[2].mostrarInfo();