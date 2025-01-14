function verificarSemaforo(){
    if (semaforo.value == 'verde'){
        console.log("Siga em frente");
    } else if (semaforo.value == 'amarelo'){
        console.log("Reduza a velocidade");
    } else {
        console.log("Pare");
    }
}

function mostrarValorDoInput(){
    console.log(texto.value);
}

function gerarNome(){
    if(dia.value == ""){
        alert("Informe o dia");
        return;
    }

    let nome = "";

    if(dia.value >= 1 && dia.value <= 8){
        nome = "Desenvolvedor(a)"
    }else if(dia.value >= 9 && dia.value <= 18){
        nome = "Programador(a)"
    }else if(dia.value >= 19 && dia.value <= 26){
        nome = "Estagiario(a)"
    }else{
        nome = "Senior(a)"
    }

    switch(mes.value){
        case "1":
            nome += ' bugado(a);';
        break;
        case "2":
            nome += ' do CTRL C, CTRL V;';
        break;
        case "3":
            nome += ' das gambiarras;';
        break;
        case "4":
            nome += ' que culpa o cache;';
        break;
        case "5":
            nome += ' que esquece o que faz;';
        break;
        case "6":
            nome += ' do git vazio;';
        break;
        case "7":
            nome += ' das try/catch vazia;';
        break;
        case "8":
            nome += ' famosinho do linkedin;';
        break;
        case "9":
            nome += ' caçador de bugs;';
        break;
        case "10":
            nome += ' do windows pirata;';
        break;
        case "11":
            nome += ' do update sem where;';
        break;
        case "12":
            nome += ' do commit bugado;';
        break;
        default:
            nome = "não veio o mês";
    }

    resposta.innerHTML = `${nome}`
    
}
