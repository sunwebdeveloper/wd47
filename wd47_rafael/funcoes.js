console.log("=== Funcoes ===");

var escopo = "global";

function saudacao(escopo){
    var msg = "Olá";
    alert(msg + escopo);

    return escopo;
}

var mensagem = function(){
    var escopo ="Boa noite;"
    alert(escopo);

    return escopo;
}