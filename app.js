// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo()
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre.");
        return; 
    }

    if (amigos.includes/(nombreAmigo)){
        alert("Este amigo ya está en la lista.");
        return; 
    }
    
    amigos.push/(nombreAmigo);
    mostrarAmigos();
    inputAmigo.value = '';

    function mostrarAmigos() {
      const listaAmigos = document.getElmentById ('listaAmigos'); 
      listaAmigos.innerHTML = '';
    }

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li); 
    });