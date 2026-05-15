//Array é uma estrutura usada para guardar vários valores dentro de uma única variável.
// produtos = [
//    {produto1},
//    {produto2},
//    produto3,
//    produto4,
//    produto5
// ]


const produtos = [

    {
        nome: "Dante DMC 5",
        preco: 299.99,
        imagem: "./src/assets/img/dante.jpeg"
    },

    {
        nome: "Ellie TLOU 2",
        preco: 349.90,
        imagem: "./src/assets/img/ellie.jpeg"
    },

    {
        nome: "Kratos GOW",
        preco: 399.90,
        imagem: "./src/assets/img/kratos.jpeg"
    },

    {
        nome: "Leon RE 4",
        preco: 279.90,
        imagem: "./src/assets/img/leon.jpeg"
    },

    {
        nome: "Malenia Elden Ring",
        preco: 459.90,
        imagem: "./src/assets/img/malenia.jpeg"
    }

];

const sectionProdutos = document.getElementById("produtos");

if(sectionProdutos){

    produtos.forEach(produto => {

        sectionProdutos.innerHTML += `
        
            <div class="card">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <h2>${produto.nome}</h2>

                <p>R$ ${produto.preco}</p>

                <button onclick="adicionarCarrinho('${produto.nome}')">Comprar</button>

            </div>
        
        `;
    });
}

function adicionarCarrinho(nomeProduto){

    const produtoSelecionado = produtos.find(produto => 
        produto.nome === nomeProduto
    );

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produtoSelecionado);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
}

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const divCarrinho = document.getElementById("carrinho");

if(divCarrinho){
    carrinho.forEach(item => {
        divCarrinho.innerHTML += `
            <p>
                ${item.produto} - R$ ${item.preco}
            </p>
        `;
    });
}

const total = carrinho.reduce((acumulador, item) => {

    return acumulador + item.preco;

}, 0);

const totalHTML = document.getElementById("total");

if(totalHTML){

    totalHTML.innerHTML = `
        Total: R$ ${total.toFixed(2)}
    `;
}

const btnDesconto = document.getElementById("btnDesconto");

const totalDescontoHTML = document.getElementById("totalDesconto");

if(btnDesconto){

    btnDesconto.addEventListener("click", () => {

        const desconto = total * 0.9;

        totalDescontoHTML.innerHTML = `
        
            Total com desconto: R$ ${desconto.toFixed(2)}
        
        `;
    });
}