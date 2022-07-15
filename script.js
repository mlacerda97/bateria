document.body.addEventListener('keyup', (event) => { // Reconhecer os botões para teclar
    playSound(event.code.toLowerCase())
}); 

document.querySelector('.composer button').addEventListener('click', () => { //adicionar ação no botão Tocar
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); // Selecionar os audios
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) { //Verificar que não vai clicar em letras que não tem som
        audioElement.currentTime = 0; // não espera os sons acabarem pra tocar novamente
        audioElement.play(); //play nas teclas
    }

    if(keyElement) {
        keyElement.classList.add('active'); // adicionar borda amarela

        setTimeout(() => {
            keyElement.classList.remove('active'); // remover borda amarela
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 400;
    }
}

let clickElement = document.querySelectorAll('.key');

document.querySelectorAll('.key').forEach(element => { // PARA CLIQUE NA TELA, USADO FOREACH
    element.addEventListener('click', () => {
      const clickedKey = element.getAttribute('data-key')
      playSound(clickedKey)
    })
  });
