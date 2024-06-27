let msg = document.getElementById("msg")
let img = document.getElementById("imagem")
let agora = new Date();
let horas = agora.getHours();
let minutos = agora.getMinutes();


function horaAtual(){
    if (horas >= 6 && horas <= 12){
        msg.innerText = `Bom Dia, agora são ${horas}:${minutos}`
        img.src = './assets/Manha.png'
        document.body.style.background = 'e2cd9f'
    } else if (horas <= 18){
        msg.innerText = `Boa Tarde, agora são ${horas}:${minutos}`
        img.src = './assets/Tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerText = `Boa Noite, agora são ${horas}:${minutos}`
        img.src = './assets/Noite.png'
        document.body.style.background = '#515154'
    }
}