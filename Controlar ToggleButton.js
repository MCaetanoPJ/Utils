//Function JS anonima para monitorar o ToggleButton
$(function () {
    $('#IdToggleButton').change(function () {
        var classe = "";
        var txtPlaceholter = "";
        if ($(this).attr("checked") === "checked") {
            //ToggleButton marcado
        }
        else {
            //ToggleButton desmarcado
        }
    });
});

//Function para alterar visualmente o ToggleButton, o value não será alterado
function marcarToggleButtonByClass(nomeClass, ativar){
	var toggle = document.getElementsByClassName(nomeClass);
	if(toggle != null){
		if(ativar){
			toggle[0].childNodes[0].style.left = '-50px'; //true
		}
		else{
			toggle[0].childNodes[0].style.left = '0px'; //false
		}
	}
}
