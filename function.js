var novoTexto = "";

function alteraMinusculo() {
	var valor = document.getElementById("auth_user").value;
	novoTexto = valor.toLowerCase();
	document.getElementById("auth_user").value = novoTexto.trim();
}


function RemoveAcento(field) {
	
var field = document.getElementById(field);

//Remove os caracteres especiais declarados abaixo:
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/[-[\]{}*+?%&@!¨_:,;'"<>~=\\^$|#\b]/g,"");
//Trata as acentuações:
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/á/gi,"a");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/à/gi,"a");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/â/gi,"a");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ã/gi,"a");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ä/gi,"a");
//
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/é/gi,"e");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/è/gi,"e");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ê/gi,"e");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ë/gi,"e");
//
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/í/gi,"i");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ì/gi,"i");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/î/gi,"i");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ï/gi,"i");
//
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ó/gi,"o");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ó/gi,"o");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ô/gi,"o");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ö/gi,"o");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/õ/gi,"o");
//
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ú/gi,"u");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ù/gi,"u");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/û/gi,"u");
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ü/gi,"u");
//
document.getElementById(field.id).value = document.getElementById(field.id).value.replace(/ç/gi,"c");

}

// function retira_acentos(palavra) {
//     com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
//     sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
//     nova='';
//     for(i=0;i<palavra.length;i++) {
//       if (com_acento.search(palavra.substr(i,1))>=0) {
//       nova+=sem_acento.substr(com_acento.search(palavra.substr(i,1)),1);
//       }
//       else {
//        nova+=palavra.substr(i,1);
//       }
//     }
//     return nova;
// }