
    var modal = document.getElementById('modalVendedoras');
    var botoesComprar = document.querySelectorAll('.btn-comprar');
    var btnFechar = document.getElementById('btnFechar');
    
    var linkVendedora1 = document.getElementById('linkVendedora1');
    var linkVendedora2 = document.getElementById('linkVendedora2');

    // Quando o cliente clica em "Quero esse Look", o modal apenas se abre
    botoesComprar.forEach(function(botao) {
        botao.addEventListener('click', function() {
            modal.classList.add('ativo');
        });
    });

    // Quando o cliente clica na vendedora, o modal fecha e o HTML cuida de abrir o WhatsApp
    linkVendedora1.addEventListener('click', function() { 
        modal.classList.remove('ativo'); 
    });
    
    linkVendedora2.addEventListener('click', function() { 
        modal.classList.remove('ativo'); 
    });

    // Se o cliente clicar em voltar
    btnFechar.addEventListener('click', function() {
        modal.classList.remove('ativo');
    });

