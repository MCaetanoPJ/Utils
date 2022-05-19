<script type="text/javascript">

//Insere uma mensagem abaixo do elemento informado
//id = id do elemento onde o texto será inserido
//mensagem = texto que será inserido

function addMensagemValidacao(id, mensagem) {
    removeMensagemValidacao(id);

    var campo = document.getElementById(id);
    if (campo != null) {
        var controls = campo.parentNode;

        var div_error = document.createElement("div");
        div_error.className = "error";
        div_error.innerHTML = '<p class="error help-block"><span class="label label-important">' + mensagem + '</span></p>';

        controls.appendChild(div_error);
    }
}

function removeMensagemValidacao(id) {
    var campo = document.getElementById(id);
    if (campo != null) {
        var controls = campo.parentNode;
        var divErros = controls.getElementsByClassName('error');
        var count = divErros.length;
        for (var i = 0; i < count; i++) {
            if (divErros[i] != null) {
                divErros[i].remove();
            }
        }
    }
}

//Exemplo de uso da function addMensagemValidacao: 
//addMensagemValidacao('texboxid1', 'mensagem de validacao');

</script>
