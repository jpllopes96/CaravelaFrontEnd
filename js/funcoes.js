
//Alerta orcamento enviado com sucesso!
function enviarOrcamento() {
		alert("Orçamento enviado com sucesso !");
}

//Funcao Exibe Menu
function exibeMenu() {
		 document.getElementById("mainMenu").style.display = "block";
		 document.getElementById("topFixo").style.display ="none";
		 document.getElementById("deslocaMenu").style.marginLeft  ="296px";
}
function fechaMenu() {
		 document.getElementById("mainMenu").style.display = "none";
		 document.getElementById("topFixo").style.display ="block";
		 document.getElementById("deslocaMenu").style.marginLeft  ="0px";
}



//Mascara telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}