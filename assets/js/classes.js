// Knigth ou Sorcerer 
// LittleMonster ou BigMonster

//personagem por padrùo
class Character {
    //personagem padrùo
    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name) {
        this.name = name
    }

    get life(){
        return this._life
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife
    }
}


// criando os personagens
class Knigth extends Character {
    //o super vai acessar o construtor da class
    constructor (name){
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life

    }
}


class Sorcerer extends Character {
    constructor (name){
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxLife = this.life
    }
}

//monstros
class LittleMonster extends Character {
    constructor(){
        super('Little Monster')
        this.life = 40;
        this.attack = 4;
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor(){
        super(`Big Monster`)        
        this.life = 120;
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

//cenario
class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
        this.log = logObject
    }

    //dados na tela dos personagens colocando uma aÁùo.
    start(){
        this.update()
        //TODO: evento do botùo de atacar
        this.fighter1El.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1))

    }

    update(){
        // fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this,this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        // fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this,this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage(`Inimigo morto`)
                return
        }
        //ataque 
        let attackeFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        //defesa
        let actualAttack = attacking.attack * attackeFactor
        let actualDefense = attacked.defense * defenseFactor

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)

        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender...`)
        }

        this.update()
    }
}

//log da batalha
//criando a lista para renderizar na tela
class Log {
    list = []
    constructor(listE1){
        this.listE1 = listE1
    }

    //sempre que for adicionando uma mensagem nova, vai adicionando a lista
    addMessage(msg){
        //adiciona a mensagem no array
        this.list.push(msg)
        this.render()
    }
    //funÁ„o para redenrizar
    render(){
        this.listE1.innerHTML = ''

        for(let i in this.list){
            this.listE1.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}