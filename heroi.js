class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
    let poder = ["magia", "espada", "artes marciais", "shuriken", "inválido"];
    let ataque;
    if(tipo = "mago"){
        ataque = poder[0];
    }else if(tipo = "guerreiro"){
        ataque = poder[1];
    }else if(tipo = "monge"){
        ataque = poder[2];
    }else if(tipo = "ninja"){
        ataque = poder[3];
    }else{
        ataque = poder[4];
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
} 

let campeao = new heroi("Castons", 20, "mago");

campeao.atacar();