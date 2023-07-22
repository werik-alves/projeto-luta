let log = new Log(document.querySelector(`.log`))
let char = new Knigth ('Arthur');
let monster = new BigMonster();

//precisamos de uma clase que basicamento um metodo para atualizar o placar

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

)

stage.start()