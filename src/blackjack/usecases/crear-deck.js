import _ from 'underscore'; // renombramos todo el paquete con _

// export const miNombre = 'Fernando'; EXPORTACION INDEPENDIENTE
 
 // Esta función crea un nuevo deck
//  exportacion independiente


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'] 
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    // verificar que tiene que venis mas de un caracter
     if( !tiposDeCarta || tiposDeCarta.length ===  0 ) 
     throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

     if( !tiposEspeciales || tiposEspeciales.length ===  0 ) 
     throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

// exportar modulos por defecto, queremos que esto sea lo unico que se exporta
// export default crearDeck;