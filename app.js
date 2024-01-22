let numSecreto=0;
let intentos=0;
let listaNumeroSorteado=[];
let numeroMaximo=10;
let maxIntento=0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}


function verificarIntento(){
    let numUsuario=parseInt(document.getElementById("valorUsuario").value);
    //console.log(numSecreto);
    //console.log(listaNumeroSorteado);
    if (numUsuario===numSecreto){

        asignarTextoElemento("p",`Acertaste en: ${intentos} ${intentos==1 ? "intento" : "intentos"}`);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {


        if(maxIntento==intentos){
            document.querySelector("#intentoJuego").setAttribute("disabled","true");
            asignarTextoElemento("p","Llegaste a tu maximo de intentos, el numero era: "+numSecreto);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        
        else{
            if(numSecreto>numUsuario){
                asignarTextoElemento("p","El número es mayor");
            } else{
                asignarTextoElemento("p","El número es menor");
            }
            intentos++;
            limpiarCaja();
        }
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}

function generarNumSecreto() {
    let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo)+1);
    //si el numero generado esta en la lista hacemos algo
    if(numeroMaximo==listaNumeroSorteado.length){
        asignarTextoElemento("p","Ya se jugó con todos los numeros");
    }else{
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego de numero secreto");
    asignarTextoElemento("p","Elije un numero del 1 al "+numeroMaximo);
    numSecreto=generarNumSecreto();
    intentos=1;
    maxIntento=5;
    document.getElementById('intentoJuego').removeAttribute('disabled');
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje
    //generar el numero aleatorio
    //iniciar intentos
    condicionesIniciales();
    //desabilitar el nuevo boton
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();



