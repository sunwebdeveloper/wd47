console.log('=== escopo ===');

var lugar = 'fora';

function controle(){
    console.log(lugar);
    var lugar = 'dentro';
    console.log(lugar);
}