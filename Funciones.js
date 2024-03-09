const funcionRegular = function (a) {
    if (a%2 == 0) {
        return "Es par";
    } else {
        return "Es impar";
    }
};

console.log(funcionRegular(3))


const funcionFlecha = (a) => {
    if (a%2 == 0) {
        return "Es par";
    } else {
        return "Es impar";
    }
};

console.log(funcionFlecha(6))



// En JavaScript, la principal diferencia entre una función regular y una función flecha radica 
// en cómo manejan el contexto (this). Las funciones regulares tienen su propio this vinculado 
// dinámicamente según la forma en que se llaman, mientras que las funciones flecha heredan el 
// this del contexto en el que fueron creadas. Además, las funciones flecha no tienen su propio 
// objeto arguments y no pueden ser utilizadas como constructores para crear instancias de objetos.