// function saludo() {
//     alert('¡Bienvenido!');
// }

// function calculoMayor (num1,num2) {
//     if (num1 > num2) {
//         alert (`${num1} es mayor que ${num2}`);
//     }
//     else if (num1 < num2) {
//         alert (num1 +" es menor que " +num2);
//     }
//     else {
//         alert ("Los dos numeros son iguales");
//     }
// }

// calculoMayor(2,3);

function filtrarAmigos(amigos) {
    let amigosFiltrados = [];

    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i].length === 4) {
            amigosFiltrados.push(amigos[i]);
        }
    }

    return amigosFiltrados;
}

const amigos = ["Ryan", "Kieran", "Mark", "Miguel"];

const amigosFiltrados = filtrarAmigos(amigos);

// Mostramos el resultado en la consola
console.log(amigosFiltrados); // Output esperado: ["Ryan", "Mark"]