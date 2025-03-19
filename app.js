// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, ingresa un nombre.");
        return; 
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        return; 
    }
    
    amigos.push(nombreAmigo);
    mostrarAmigos();
    inputAmigo.value = '';
}

    function mostrarAmigos() {
      const listaAmigos = document.getElementById ('listaAmigos'); 
      listaAmigos.innerHTML = '';
   

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li); 
    });
 }

    function sortearAmigo () {
        if (amigos.length < 2) {
            alert("Se necesitan al menos dos amigos para realizar el sorteo.");
            return;
        }

        let amigosSorteados = [...amigos];
        let resultados = {}; 

        amigosSorteados.sort(() => Math.random() - 0.5);

        for (let i = 0; i < amigos.length; i++) {
            const amigo = amigos[i];
            const amigoSecreto = amigosSorteados[i === amigos.length - 1 ? 0 : i + 1];
            resultados[amigo] = amigoSecreto;
        }
        mostrarResultados(resultados);
    }

        function mostrarResultados(resultados) {
            const listaResultado = document.getElementById('resultado');
            listaResultado.innerHTML = '';

            for (const [amigo, amigoSecreto] of Object.entries(resultados)) {
                const li = document.createElement('li');
                li.textContent = `${amigo} le tocó a ${amigoSecreto}`;
                listaResultado.appendChild(li);

        }
    }
            