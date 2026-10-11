
var modal = document.getElementById('modalVendedoras');
var botoesComprar = document.querySelectorAll('.btn-comprar');
var btnFechar = document.getElementById('btnFechar');

var linkVendedora1 = document.getElementById('linkVendedora1');
var linkVendedora2 = document.getElementById('linkVendedora2');

var produtoSelecionado = null;

// Captura as informações do look escolhido
botoesComprar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        var card = botao.closest('.card-produto');

        var nome = card.querySelector('.nome-produto').textContent.trim();
        var preco = card.querySelector('.preco-produto').textContent.trim();
        var imagem = card.querySelector('.img-produto');

        produtoSelecionado = {
            nome: nome,
            preco: preco,
            foto: new URL(imagem.getAttribute('src'), document.baseURI).href
        };

        modal.classList.add('ativo');
    });
});

// Envia as informações para a vendedora escolhida
function falarComVendedora(numero) {
    if (!produtoSelecionado) return;

    var mensagem =
        'Olá! Tenho interesse neste look da Flor de Tâmara! 🛍️\n\n' +
        'Produto: ' + produtoSelecionado.nome + '\n' +
        'Preço: ' + produtoSelecionado.preco + '\n' +
        'Foto do produto: ' + produtoSelecionado.foto;

    var link = 'https://wa.me/' + numero +
        '?text=' + encodeURIComponent(mensagem);

    modal.classList.remove('ativo');

    window.open(link, '_blank');
}

// Vendedora 1
linkVendedora1.addEventListener('click', function(event) {
    event.preventDefault();
    falarComVendedora('5589981281839');
});

// Vendedora 2
linkVendedora2.addEventListener('click', function(event) {
    event.preventDefault();
    falarComVendedora('5589999942181');
});

// Fecha o modal pelo botão Voltar
btnFechar.addEventListener('click', function() {
    modal.classList.remove('ativo');
});

// Fecha o modal ao clicar fora da caixa
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('ativo');
    }
});

// Fecha o modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.classList.remove('ativo');
    }
});
