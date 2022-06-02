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