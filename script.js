const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function lampOn () {
    if ( !estaquebrada ()) {
    lamp.src = 'img/ligada.jpg';
    }
}

function lampOff () {
    if ( !estaquebrada ()) {
    lamp.src = 'img/desligada.jpg';
    }
}

function quebrar () {
    if ( !lampconcertada ()) {
    lamp.src = 'img/quebrada.jpg';
    }
}

function consertarlamp () {
    lamp.src = 'img/desligada.jpg'
}

function lampconcertada (){
    return lamp.src.indexOf ('quebrada') > -1
}

function estaquebrada (){
    return lamp.src.indexOf ('quebrada') > -1
}

turnOn.addEventListener( 'click', lampOn );

turnOff.addEventListener( 'click', lampOff );

lamp.addEventListener( 'click', quebrar );

consertar.addEventListener( 'click', consertarlamp );