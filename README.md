# Laboratorio Poo

## ¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?

Una función constructora permite crear múltiples objetos con la misma estructura de manera reutilizable y consistente para no repetir las propiedades y su estructura para cada computador.

## ¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

Un método puede acceder a las propiedades específicas de su propio objeto mediante "this" porque "this" hace referencia al objeto que está ejecutando el método. De esta manera, cada instancia puede utilizar el mismo método, pero acceder únicamente a los valores que pertenecen a esa instancia.

## ¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por sí mismo su estado lógico (si aprobó o no)?

La ventaja es que el objeto puede encargarse de saber si el estudiante aprobó o no sin que otra parte del programa tenga que hacer ese cálculo. Así los datos del estudiante y la lógica relacionada con ellos quedan juntos haciendo que el código sea más sencillo de entender.