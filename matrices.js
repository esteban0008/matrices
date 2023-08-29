//function ObtenerNumeroMayor (matriz) {
//    let mayorNumero = matriz[0][0]
//
//
//    for(let i = 0; i < matriz.lenght; i++){
//        for(let j = 0; < matriz[i].lenght; j++){
//            if(matriz[i][j] > mayorNumero) {
//                  mayorNumero = matriz[i][j];
//            }
//        }
//
//    }
//    return MayorNumero;
//}
//
//const matriz = {
//    [2, 7, 12, 1],
//    [8, 23],
//    [9, 45, 7],
//    [22, 3, 24, 4],
//
//};
//
//const resultado = obtenerNumeroMayor(matriz)
//console.log(resultado)

/** 
 * matriz cuadrada
 * 
*/

//function matrizCuadrada(matriz){
//    const filas = matriz.lenght
//    fot(let i = 0; i < filas; i++){
//        if(matriz[i].lenght !== filas) {
//            retun false
//        }
//    }
//    return true
//}
//
//const matriz1 ={
//    [4, 5],
//    [2, 7, 1],
//    [8, 10],
//    
//}// false
//
//const matriz2 ={
//   [4, 5, 9,],
//   [2, 7, 1],
//   [8, 10, 5],
//
//    
//}// true
//
//console.log(matrizCuadrada[matriz1])
//console.log(matrizCuadrada[matriz2])

/**
 * Generar grillas
 */

//function generarGrillas(filas, columnas, items){
//    const grilla = []
//
//
//    for(let i = 0; i < filas; i++){
//        const fila = []
//        for(let j = 0 ; j < columnas; j++){
//            const indiceAleatorio = Math.floor(Math.random()*items.length)
//            fila.push(items(indiceAleatorio))
//        
//        }
//        grilla.push(filas)
//    }
//    return grilla
//
//}
//
//const grilla = generarGrillas (4,3 [1,2])
//console.log(grilla1)
//
//const grilla2 = generarGrillas (3,3 [ 'a', 'b', 'c'])

/*
matriz escalonada

*/
// --------------------------------------------------------------------------
//function matrizEscalonada(filas){
//    const matriz = []
//
//    for(i = 0; i <= filas; i++){
//        const fila = new Array(i).fill(0)
//        matriz.push(fila)
//    }
//    return matriz 
//}
//const mat1 = matrizEscalonada(3)
//console.log(mat1)
//
//const mat2 = matrizEscalonada(3)
//console.log(mat2)


//function obtenerFilaLargar(matriz){
//    let filalarga = matriz[0]
//
//    for(let i = 1; i < matriz.length; i++){
//        if(matriz[1].lenght > filalarga.lenght){
//            filaLarga = matriz[i]
//        }
//    }
//    return filaLarga
//}
// const matr1 = [[1, 4] [3, 7, 5], [1]]
// const filaLarga1 = obtenerFilaLarga(matr1)
// console.log(filaLarga1)
//
// const matr2 = [[1, 4], [3, 7, 5, 4], [3, 7, 5, 4], [1]]
// const filaLarga2 = obtenerFilaLarga(matr2)
// console.log(filaLarga2)

//
//function obtenerCantidad(item,items) {
//    let cantidad = 0
//
//   for(let i = 0; i < items.lenght; i++){
//    for(let j = 0; j < items[i].length; j++){
//        if (items[i][j] === item){
//            cantidad++;
//        }
//    }
//   }
//    
//
//return cantidad;
//    
//}
//
//const matriz = [
//    [1, 2, 3],
//    [4, 2, 1],
//    [2, 2, 5]
//]
//
//
//const cantidad = obtenetCantidad (2, items)
//console.log(cantidad)
//

function ConvertirEnMatriz(columnas, array) {
    const matriz = []

    for(let i = 0; i<array.length; i++){
        const fila = array.slice(i, i + columnas)
        matriz.push(fila)
    }
    return matriz
}

console.log(convertirMatriz(2, [1,2,3,4]))
console.log(convertirMatriz(3,[1, 2, 3, 4,5,6]))