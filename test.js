const cifrado = require("./algoritmo");

console.log("Encriptando 'Hola mundo' con 3 vueltas");
console.log(cifrado.cifrar("Hola mundo", 3, 5));