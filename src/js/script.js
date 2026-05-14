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
        imagem: "./assets/img/dante.jpeg"
    },

    {
        nome: "Ellie TLOU 2",
        preco: 349.90,
        imagem: "./assets/img/ellie.jpeg"
    },

    {
        nome: "Kratos GOW",
        preco: 399.90,
        imagem: "./assets/img/kratos.jpeg"
    },

    {
        nome: "Leon RE 4",
        preco: 279.90,
        imagem: "./assets/img/leon.jpeg"
    },

    {
        nome: "Malenia Elden Ring",
        preco: 459.90,
        imagem: "./assets/img/malenia.jpeg"
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

                <button>Comprar</button>

            </div>
        
        `;
    });
}

const carrinho = [
    {
        produto: "Batman",
        preco: 300
    },

    {
        produto: "Naruto",
        preco: 250
    },

    {
        produto: "Goku",
        preco: 400
    }
];

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