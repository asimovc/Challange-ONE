// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços em branco

    // Validação da entrada
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista exibida
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Seleciona um amigo aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa resultados anteriores
    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo secreto sorteado: ${amigoSorteado}`;
    resultado.appendChild(liResultado);
}

