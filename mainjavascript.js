let quantidadeNoCarrinho = 0;

function mostrarCarrinho() {
    alert("Itens no carrinho: " + quantidadeNoCarrinho);
};

function adicionarAoCarrinho() {
    quantidadeNoCarrinho++;
    document.getElementById("carrinho-quantidade").innerText = quantidadeNoCarrinho;
};

$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    
    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            telefone: {
                required:true
            },
            email: {
                required:true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log(form);
            alert('Formulário enviado com sucesso!');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })    
})