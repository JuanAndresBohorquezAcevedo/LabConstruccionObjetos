function Computadora (marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
};

const computadoras = [
    computadora1 = new Computadora("Dell", "Intel i7", "16GB", 4500000),
    computadora2 = new Computadora("HP", "Intel i5", "8GB", 5600000),
    computadora3 = new Computadora("Asus", "Intel i9", "32GB", 7500000),
    computadora4 = new Computadora("Janus", "Intel i7", "10GB", 4500000),
    computadora5 = new Computadora("HP", "Intel i7", "8GB", 5600000),
];

for (let i = 0; i < computadoras.length; i++) {
    console.log(`Marca computadora ${[i+1]}: ${computadoras[i].marca}`);
    console.log(`Procesador computadora ${i+1}: ${computadoras[i].procesador}`);
    console.log(`Ram de la computadora ${i+1}: ${computadoras[i].ram}`);
    console.log(`Precio computadora ${i+1}: $${computadoras[i].precio}`);
    console.log(`--------------------------------------------------`);
}