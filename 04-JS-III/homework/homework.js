// Tu código:
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  primerelemento = array[0];
  return primerelemento;
}
console.log(devolverPrimerElemento(["cufa",2,3,4,5]))

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  ultimoelemento = array.length - 1;
  return array[ultimoelemento];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  largo = array.length;
  return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  long = array.length;
  for (i=0; i <long; i++){
    array[i] = array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = palabras[0];
  var long = palabras.length;
  for (i=1; i<long; i++){
    frase = frase  + " " + palabras[i];
  }
  return frase;
  // O SIMPLEMENTE PONER:
  // return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var long = array.length;
  if (long === 0){
    return false;
  }
    for(i=0; i<long; i++){
    var escaneo = array[i];
    if (escaneo === elemento) {
      return true;
    }
    else{
      return false; 
    }
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var long = numeros.length;
  var suma = 0;
  for (i=0; i<long; i++){
    var a = numeros[i];
    numeros[i] = Math.round(a);
  
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var long = resultadosTest.length;
  var suma = 0;
  for (i=0; i<long; i++){
    var a = Math.round(resultadosTest[i]);
    suma = suma + a;
  }
  promedio = suma/long;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var MAX = numeros[0];
  var Escaneo = numeros[0];
  var long = numeros.length;
  
  for (i=0; i<long; i++){
    var Escaneo = Math.round(numeros[i]);
    if (MAX<Escaneo){
      MAX = Escaneo;
    }
  }
  return MAX;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var long = arguments.length;
  if (long == 0){
    return 0;
  }
  else{
    var multiplicacion = 1;
    for (i=0; i<long; i++){
      multiplicacion = multiplicacion * arguments[i];
    }
  }
  return multiplicacion;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
 var long = arreglo.length;
 var contador = 0;
 for (i=0; i<long; i++){
   a=arreglo[i];
   if (a>18){
    contador = contador +1; 
   }
 }
 return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia == 1){          // Domingo
    return "Es fin de semana";
  }
  else if (numeroDeDia === 2){    // Lunes
    return "Es dia Laboral";
  }
  else if (numeroDeDia === 3){    // Martes
    return "Es dia Laboral";
  }
  else if (numeroDeDia === 4){    // Miércoles
    return "Es dia Laboral";
  }
  else if (numeroDeDia === 5){    // Jueves
    return "Es dia Laboral";
  }
  else if (numeroDeDia === 6){    // Viernes
    return "Es dia Laboral";
  }
  else if (numeroDeDia === 7){    // Sábado
    return "Es fin de semana";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var str = n.toString();

  if (str[0] == 9){
    return true;
  }
  else {
    return false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var long = arreglo.length;
  for (i=1; i<long+1; i++){
    if (arreglo[i-1] !== arreglo[i]){
      return false;
    }
    else{
      return true;
    }
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var long = array.length;
  var CONT = [];
  for (i=0; i<long; i++){
    if (array[i] === "Enero"){
      CONT.push(array[i]);
    }
    else if (array[i] === "Marzo"){
      CONT.push(array[i]);
    }
    else if (array[i] === "Noviembre"){
      CONT.push(array[i]);    
    }
  }
  var long2 = CONT.length;  
  if (long2 !=3){
    return "No se encontraron los meses pedidos";
  }  
  return CONT;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var long = array.length;
  var contenedor = [];
  for (i=0; i<long; i++){
    if (array[i]>100){
      contenedor.push(array[i]);
    }
  }
  return contenedor;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
    
  var aumentado = [numero+2];
  for (i=0; i<9; i++){
    aumentado[i+1] = aumentado[i] + 2;
    if (aumentado[i+1] == i){
      return "Se interrumpió la ejecución";    
    }
  }
  return aumentado;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:                                   // OTRO CODIGO MEJOR ESCRITO. YO LO HICE MAL
  var aumentado = [numero+2]                      // var array =[];
  for (i=1; i<10; i++){                           // var suma = numero;
    if (i==5){                                    // for (i=0; i<10; i++)  {
      aumentado[i] = aumentado[i-1];              //  if (i==5){
      continue;                                   //    continue;  
    }                                             //  } else {
    else{                                         //      suma = suma + 2;
      aumentado[i] = aumentado[i-1] + 2;          //      array.push(suma);
    }                                             //    } return array;
  }
  aumentado.splice(5,1);
  return aumentado
}
{console.log(continueStatement(50))};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
