function verificaNome(dados){
    let resultado = dados.search(/\d/);
    return resultado;
}

function verificaCpf(dados){
    let resultado = dados.search(/\D/);

    alert(resultado);
    alert(dados.length);
    
    if (dados.length == 11 && resultado == -1){
        alert("não é possivel");
        return 1;
    }
    return -1;
}

function verificaDataNasc(){

}

function verificaUsuario(){

}

function verificaEmail(dados){

}

function verificaSenha(dados){

}

function verificaSenhaVer(senha, senhaVer){
    if (senhaVer==senha){
        return 1;
    }
    else{
        return -1;
    }
}

function limparCadastro(){
    let nome = document.querySelector("#nome");
    let cpf = document.querySelector("#cpf");
    let dataNasc = document.querySelector("#datanasc");
    let user = document.querySelector("#user");
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");
    let senhaVer = document.querySelector("#senhaver");

    nome.value = "";
    cpf.value = "";
    dataNasc.value = "";
    user.value = "";
    email.value = "";
    senha.value = "";
    senhaVer.value = "";
}

window.addEventListener("load", function(){
    let btnCadastro = document.querySelector("#btnCadastroSub");
    let btnLimpa = document.querySelector("#btnLimpar");

    btnCadastro.addEventListener("click", function(){
        let resposta = "";
        let nome = document.querySelector("#nome").value;
        let cpf = document.querySelector("#cpf").value;
        let dataNasc = document.querySelector("#datanasc").value;
        let user = document.querySelector("#user").value;
        let email = document.querySelector("#email").value;
        let senha = document.querySelector("#senha").value;
        let senhaVer = document.querySelector("#senhaver").value;

        if (verificaNome(nome) != -1){
            resposta += "Nome inválido\n";
        }

        if (verificaCpf(cpf) == -1){
            resposta += "CPF inválido\n";
        }

        if (verificaSenhaVer(senhaVer, senha) == -1){
            resposta += "A senha de verificação tem que ser igual à outra\n";
        }

        // if (nome != "" && cpf != "" && senha != "" && senhaVer != "") {

        // }
        // else {
        //     resposta += "Por favor, digite tudo!";
        // }
        
        alert(resposta);
    });

    btnLimpa.addEventListener("click", limparCadastro);
});