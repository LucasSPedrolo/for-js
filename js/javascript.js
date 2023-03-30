function ultrafunction(){

const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' }, 
    { tag: 'footer', texto: 'Frase 3' }, 
    { tag: 'section', texto: 'Frase 4' }
];

const container = document.querySelector(".container");

function criaElemento (valor){
    const valorElemento = document.createElement(valor);

    const elementDocument = container.appendChild(valorElemento);

    return elementDocument;
};

function criarTexto(tag ,valor){
    const texto = tag.innerHTML = valor;

    return texto;
};

for(let i = 0 ; i < elementos.length  ; i++){
    let tags = criaElemento(elementos[i]['tag']);
    criarTexto(tags , elementos[i]['texto'])
}

};

ultrafunction();