let usuarioCadastrado = "";
let senhaCadastrada = "";

// Cadastro
function fazerCadastro() {
  const novoUsuario = document.getElementById('novoUsuario').value;
  const novaSenha = document.getElementById('novaSenha').value;

  if (novoUsuario === "" || novaSenha === "") {
    alert('Preencha todos os campos!');
    return;
  }

  usuarioCadastrado = novoUsuario;
  senhaCadastrada = novaSenha;

  alert('Cadastro realizado com sucesso! Faça o login.');

  document.getElementById('cadastro').classList.add('escondido');
  document.getElementById('login').classList.remove('escondido');
}

// Login
function fazerLogin() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
    document.getElementById('login').classList.add('escondido');
    document.getElementById('loja').classList.remove('escondido');
  } else {
    alert('Usuário ou senha incorretos!');
  }
}


const listaProdutos = [
  { 
    nome: "Arroz Camil", 
    preco: 20.00, 
    descricao: "Arroz branco tipo 1 - 5kg", 
    imagem: "arroz.png" 
  },
  { 
    nome: "Feijão Carioca", 
    preco: 8.50, 
    descricao: "Feijão carioca 1kg", 
    imagem:"feijao.png" 
  },
  { 
    nome: "Macarrão Espaguete", 
    preco: 5.00, 
    descricao: "Macarrão espaguete 500g", 
    imagem: "image.png" 
  }
];

const carrinho = [];

function mostrarProdutos() {
  const container = document.getElementById('produtos');
  listaProdutos.forEach((produto, index) => {
    const div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `
      <img src="${produto.imagem}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarCarrinho(${index})">Adicionar ao Carrinho</button>
    `;
    container.appendChild(div);
  });
}

function adicionarCarrinho(index) {
  carrinho.push(listaProdutos[index]);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('carrinho');
  lista.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;
    const li = document.createElement('li');
    li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} 
      <button onclick="removerItem(${index})">Remover</button>`;
    lista.appendChild(li);
  });

  document.getElementById('total').innerText = total.toFixed(2);
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('O carrinho está vazio!');
    return;
  }

  document.getElementById('loja').classList.add('escondido');
  document.getElementById('checkout').classList.remove('escondido');
}

function confirmarPedido() {
  const nome = document.getElementById('nomeCliente').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;
  const pagamento = document.getElementById('pagamento').value;

  if (nome === "" || endereco === "" || telefone === "" || pagamento === "") {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  alert(`✅ Pedido confirmado! 🎉
  
Nome: ${nome}
Endereço: ${endereco}
Telefone: ${telefone}
Pagamento: ${pagamento}

Obrigado por comprar no Mercadinho Digital!`);

  carrinho.length = 0;
  atualizarCarrinho();

  document.getElementById('checkout').classList.add('escondido');
  document.getElementById('loja').classList.remove('escondido');
}

mostrarProdutos();
