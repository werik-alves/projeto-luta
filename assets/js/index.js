let char = new Knigth ('Werik');
let monster = new LittleMonster();

//precisamos de uma clase que basicamento um metodo para atualizar o placar

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

stage.start()