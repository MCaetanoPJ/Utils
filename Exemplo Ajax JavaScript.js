//JavaScript
function consumerEnpdoint() {
	ConsumerEndpointAjax(
		'/App/Frotista/Cadastros/ConfiguracaoCliente.aspx/Teste', 
		{ teste: "xmlParametros" }, 
		alert("Funcionou"), 
		alert("Não funcionou")
	);
}

function ConsumerEndpointAjax(url, dataObj, functionSucess, functionError) {
	$.ajax({
		url: url,
		data: JSON.stringify(dataObj),
		type: "POST",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: functionSucess,
		error: functionError
	});
}

//C#
[WebMethod(EnableSession = true)]
public static void Teste(string teste)
{
	var algumaCoisa = "";
}