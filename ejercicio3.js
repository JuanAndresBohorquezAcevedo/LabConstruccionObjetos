function Estudiante(nombre, materia, nota) {
    this.nombre = nombre;
    this.materia = materia;
    this.nota = nota;
    this.aprobado = nota >= 3.0;
    this.mostrarResultado = function() {
        console.log(`Estudiate: ${this.nombre}.`);
        console.log(`Materia: ${this.materia}.`);
        if (this.aprobado === true) {
            console.log(`El estudiante aprobo con una nota de ${this.nota}...`);
        } else {
            console.log(`El estudiante reprobó con una nota de ${this.nota}...`);
        }
        console.log(`----------------------------------------------------------------------`);
    }
};

const estudiantes = [
    estudiante1 = new Estudiante("Carlos", "JavaScript", 2.5),
    estudiante2 = new Estudiante("Laura", "HTML", 2.8),
    estudiante3 = new Estudiante("Andres", "Git", 3.2),
    estudiante4 = new Estudiante("Juan", "CSS", 4.0),
    estudiante5 = new Estudiante("Sofia", "React", 5.0),
];

for( let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].mostrarResultado();
}