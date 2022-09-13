let video = document.querySelector('video');

/*ter acesso a camara do pc*/

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play();
}) 
.catch(error => {
    console.log(error);
})

/*getUserMedia({video:true}) ele retorna uma promise, processamento não instantaneo do codigo - .then é quando a promise retorna true, quando da certo, se o usuario não permitir o acessoa a camara vai dar errado entao se utiliza o .catch

.then cada imagem de retorno será recebida no stream*/


/*buttom - para tirar a foto*/

document.querySelector('button').addEventListener('click', () => {
    let canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0) /*posição do video*/
    let link = document.createElement('a'); /* para fazer o download da foto*/
    link.download = 'foto.png'; /*nome definido*/
    link.href = canvas.toDataURL(); 
    link.textContent = 'Clique para baixar a imagem';
    document.body.appendChild(link);
});

