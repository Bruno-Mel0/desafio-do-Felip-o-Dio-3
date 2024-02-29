class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ""
        switch (this.tipo){
            case "mago":
                this.ataque = "magia"
                break;
            case "guerreiro":
                this.ataque = "espada"
                break;
            case "monge":
                this.ataque = "artes marciais"
                break;
            case "ninja":
                this.ataque = "shuriken"
                break;
        }
    }
    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }        
}
let novoHeroi = new heroi("maguinho", "21", "guerreiro")
novoHeroi.atacar()
