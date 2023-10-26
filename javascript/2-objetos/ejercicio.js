// AGUILA O SOL
// En un solo objeto, crea una versión del juego de lanzar una moneda (🦅 o 🌞)

/*
    La salida del programa debería ser:
    "Cae águila 🦅"
        o 
    "Cae sol 🌞"
*/

/*
    1. Completa la propiedad/función `tirarMoneda` del objeto `juegos`
    2. Una vez completo, descomenta la línea `juegos.tirarMoneda()`
*/

// Consejos
// * Recuerda que los objetos pueden guardar cualquier tipo de valor en la clave
//      + Eso quiere decir que incluso una función puede ser un valor en una clave
// * Investiga sobre la libreria Math de javascript, te permitirá crear un valor aleatorio 0 o 1

const juegos = {
  aguila: 0,
  sol: 1,
  tirarMoneda: function () {
    //const lanzamiento = Math.floor(Math.random() * 2);
    let resultado;
    const opciones = [this.aguila, this.sol];
    const lanzamiento = opciones[Math.floor(Math.random() * opciones.length)];
    if (lanzamiento === this.aguila) {
      resultado = "Cae águila 🦅";
    } else {
      resultado = "Cae sol 🌞";
    }
    console.log(resultado);
  },
};

for (let tiros = 0; tiros < 10; tiros++) {
  juegos.tirarMoneda()
}
