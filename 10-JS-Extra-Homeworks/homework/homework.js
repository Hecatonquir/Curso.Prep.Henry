// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  //var NumDePropiedades = Object.keys(objeto).length; //==>Esto entrega un array cuyos elementos son 
  //var matriz = [];                                   //los nombres de las propiedades del objeto. Con ".length" cuento esas propiedades

  //for (i=0; i<NumDePropiedades; i++){
  //  matriz[i] = [Object.keys(objeto)[i],Object.values(objeto)[i]];   
  //}  ESTA FORMA ES CORRECTA PERO SIN SENTIDO, YA TENGO UNA FUNCION QUE HACE ESTO-

  // otra forma era usando for in:
    var matriz = []; 
    for (var clave in objeto){
      matriz.push([clave, objeto[clave]])
    }
  
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí                                                                            OTRA FORMA:
  var long = string.length;
  var objeto = {};

  for(i=0; i<long; i++)                                                                               //for (i=0; i<long; i++){
    if(objeto.hasOwnProperty(string[i])){    //acá estoy preguntando el objeto tiene esta propiedad  //  var sumatoriadeletras = 0;
      objeto[string[i]] += 1;                                                                         //  for (j=0; j<long; j++){      
    }                                                                                                 //    if (string[i] === string[j]){        
      else {                                                                                          //      var sumatoriadeletras = sumatoriadeletras+1;        
    objeto[string[i]] = 1                                                                             //    }       
    }                                                                                                 //  }
                                                                                                      //  objeto[string[i]] = sumatoriadeletras;
                                                                                                      //}
    return objeto;                                                                                     //return objeto


}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var long = s.length;
  const palabra = s.split("");
  const minuscula = [];
  const mayuscula = [];

  for (i=0; i<long; i++){
    
    if(palabra[i] === palabra[i].toLowerCase()){
      minuscula.push(palabra[i]);
    }
    else {
      mayuscula.push(palabra[i]);
    }    
  }
  const palabranueva = mayuscula.concat(minuscula);
  return palabranueva.join("");

  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  const frase = str.split(" ");
  const long = frase.length;
  var invertida = new Array(long);
  invertida.fill("");
  
  for (i=0; i<long; i++){
    long_a = frase[i].length-1;

    for (j=long_a; j>-1; j--){
      invertida[i] = invertida[i] + frase[i][j];      
    }
  }

  var invertida = invertida.join(" ");
  return invertida
  
  /* OTRA FORMA (PEOR), USANDO: frase = str.split("");
  while (m<long){
    console.log(m);

    if (str[m] !== " "){
      var n=m;
      console.log(n);

      while (frase[n] !== " " && frase[n] !== undefined){
        invertida.push(frase[n]);
        n++;
      }
      m=n;
      console.log(m);
      }

    else {
      invertida.push(frase[m]);
      console.log(invertida);
      m++;    
      console.log(m);  
      }

  }*/ // Esta forma podría funcionar pero es muy complicada (sin necesidad) y poco optimizada.

  //[The, Henry, Challenge, is, close!]
  /* var invertida = str.split(" ").map( function (elemento){
    [T,h,e]
    return elemento.split("").reverse().join("");
  })
  return invertida.join(" ");  ESTA ES LA MEJOR FORMA USANDO MÉTODOS
*/
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const numero_String = numero.toString();
  const longitud = numero_String.length;
  //console.log(longitud);
  var num_inver = "";
  for (i=0; i<longitud; i++){
    num_inver = num_inver + numero_String[longitud-1-i]
  }  
  if (numero_String === num_inver){
    return "Es capicua";
  }
  else{
    return "No es capicua"
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var eliminoA = cadena.replaceAll("a", "");
  var eliminoB = eliminoA.replaceAll("b", "");
  var eliminoC = eliminoB.replaceAll("c", "");

  return eliminoC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var cambio = true;

  while (cambio){
    cambio = false;
    for (i=0; i<arr.length-1; i++){
      if (arr[i].length>arr[i+1].length){
        var aux = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = aux;
        cambio = true;
      }
    }
  }
 return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  const long1 = arreglo1.length;
  const long2 = arreglo2.length;
  var array3 = [];

  for (i=0; i<long1; i++){    
    for (j=0; j<long2; j++){      
      if (arreglo1[i] == arreglo2[j]){
        array3.push(arreglo2[j]);
      } 
    }
  }
  return array3;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

