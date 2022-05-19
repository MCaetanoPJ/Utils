<script type="text/javascript">

//Insere uma mensagem abaixo do elemento informado
//id = id do elemento onde o texto será inserido
//mensagem = texto que será inserido

function addMensagemValidacao(id, mensagem){
var campo = document.getElementById(id);
var controls = campo.parentNode;

var div_error = document.createElement("div");
div_error.className = "error";
div_error.innerHTML = '<p class="error help-block"><span class="label label-important">' + mensagem + '</span></p>';

controls.appendChild(div_error);
}

//Exemplo de uso da function addMensagemValidacao: 
//addMensagemValidacao('texboxid1', 'mensagem de validacao');

</script>
