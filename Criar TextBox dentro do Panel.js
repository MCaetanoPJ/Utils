<script type="text/javascript">

function GetPainelById(painelId){
	var painel1 = document.getElementById(painelId);
	var relativeWrap1 = painel1.childNodes[1];
	var widgetfrota = relativeWrap1.childNodes[0];
	var widgetbody = widgetfrota.childNodes[1];
	var relativeWrap2 = widgetbody.childNodes[0];
	var rowfluid = relativeWrap2.childNodes[0];
	var divTelefone = rowfluid.childNodes[3];
	var campo = divTelefone.childNodes[0].childNodes[0];
	return rowfluid;
}

function AddTextBox(nome) {
	var input = document.createElement("input");
	input.type = "text";
	input.className = "span10";
	input.id = nome;
	input.name = nome;
	return input;
}

function AddLabel(nome){
	var label = document.createElement("label");
	label.className = "control-label";
	label.textContent = nome;
	return label;
}

function AddClass_RelativeWrap(){
	var div_relative = document.createElement("div");
	div_relative.className = "relativeWrap";
	return div_relative;
}

function AddClass_Span6(){
	var div_span6 = document.createElement("div");
	div_span6.className = "span6";
	return div_span6;
}

function AddClass_ControlGroup() {
	var div_control_group = document.createElement("div");
	div_control_group.className = "control-group";
	return div_control_group;
}

function SelecionarUltimoCampo(PainelId){
var painel = GetPainelById(PainelId);
painel.appendChild(AddClass_RelativeWrap());

var lastClassRelative = painel.lastChild;
lastClassRelative.appendChild(AddClass_Span6());

var lastClassSpan = lastClassRelative.lastChild;
lastClassSpan.appendChild(AddClass_ControlGroup());

return lastClassSpan.lastChild;
}

function AddTextBox_Label_NoPainel(PainelId, nomeLabel, TextBoxId){
var lastClassControl = SelecionarUltimoCampo(PainelId);
lastClassControl.appendChild(AddLabel(nomeLabel));
lastClassControl.appendChild(AddTextBox(TextBoxId));
}

//Forma de executar
//PanelId = Id do Panel onde o campo deve ser criado
//nomeLabel = Descrição da label
//TextBoxId = Id do textbox que será criado
AddTextBox_Label_NoPainel('PanelId', 'Nome dentro da label', 'TextBoxId');

</script>


