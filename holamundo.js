function hola(idioma) {

  var a = "es";
  var b = "al";
  var c = "en";


   if ( idioma == a.toLowerCase()){
     return "Hola Mundo!";

   } else if( idioma == b.toLowerCase()){
     return "Hallo Welt!";
   } else if (idioma == c.toLowerCase()){
     return "Hello Word!";
   }else {
     return "Hola Mundo!"
   }// ||(idioma == lowerCase("al")) || (idioma == lowerCase("en"))

}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.hola = hola;
}
