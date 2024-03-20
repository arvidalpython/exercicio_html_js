function verificar(){

var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2') 
var numN1 = Number(n1.value)
var numN2 = Number(n2.value)

var msgSucesso = `O primeiro número: <b>${numN1}</b> é menor que o segundo número: <b>${numN2}</b>`
var msgErrada = `O primeiro número: <b>${numN1}</b> é maior ou igual do que segundo número: <b>${numN2}</b>`


if (numN2 > numN1){
    
    const containerMensagemSucesso = document.querySelector('.msgOk');
    containerMensagemSucesso.innerHTML = (msgSucesso);
    containerMensagemSucesso.style.display = 'block'
    document.querySelector('.msgErro').style.display = 'none';

} else{

    const containerMensagemErrada = document.querySelector('.msgErro');
    containerMensagemErrada.innerHTML = (msgErrada);
    containerMensagemErrada.style.display = 'block'
    document.querySelector('.msgOk').style.display = 'none';
}
}