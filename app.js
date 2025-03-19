// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo()
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre.");
        return; 
    }

    amigos.push/(nombreAmigo);
    mostrarAmigos();
    inputAmigo.value = '';