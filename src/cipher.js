window.cipher = {
  // Declaro los parámetros de encode (STR porque string es una keyword)
  encode: (str, offset) => {
    // Declaro un string vacío donde se concatenarán en cada iteración los caracteres cifrados
    let result = '';
    // Ciclo for que recorre el string
    for (let i = 0; i < str.length; i++) {
      // guardo momentaneamente en cada iteración los caracteres uno por uno en la variable character
      let character = str[i];
      /*
      Condición que verifica con una expresión regular si el caracter corresponde a una letra del abecedario con el método match(). En caso de no hacer match, no entra en las siguientes condiciones y concatena en result el número o caracter especial tal cual.
      */
      if (character.match(/[a-z]/i)) {
        /*
        Guarda en code el código ascii de la letra en cada iteración del ciclo for
        */
        let code = str.charCodeAt(i);
        /*
         Verifica si el código ascii en cada iteración corresponde a las letras mayúsculas, de ser así aplica la fórmula con el desplazamiento dado y guarda en character la conversión de ese nuevo código ascii pero como letra.
        */
        if ((code >= 65) && (code <= 90)) {
          /* 
          Con parseInt() hago el 'parseo' del número  ingresado en el input como string a tipo de dato number
          */
          character = String.fromCharCode(((code - 65 + parseInt(offset)) % 26) + 65);
        }
        /*
         Verifica si el código ascii en cada iteración corresponde a las letras minúsculas, de ser así aplica la fórmula con el desplazamiento dado y guarda en character la conversión de ese nuevo código ascii pero como letra.
        */
        if ((code >= 97) && (code <= 122)) {
          /* 
          Con parseInt() hago el 'parseo' del número  ingresado en el input como string a tipo de dato number
          */
          character = String.fromCharCode(((code - 97 + parseInt(offset)) % 26) + 97);
        }
      }
      // Finalmente concatena el resultado en result
      result += character;
    }
    // El método encode retorna result luego de toda la iteración y concatenación lista.
    return result;
  },

  // Declaro los parámetros de encode (STR porque string es una keyword)
  decode: (str, offset) => {
    // Declaro un string vacío donde se concatenarán en cada iteración los caracteres descifrados
    let resultDecode = '';
    // Ciclo for que recorre el string
    for (let i = 0; i < str.length; i++) {
      // guardo momentaneamente en cada iteración los caracteres uno por uno en la variable character
      let character = str[i];
      /*
      Condición que verifica con una expresión regular si el caracter corresponde a una letra del abecedario con el método match(). En caso de no hacer match, no entra en las siguientes condiciones y concatena en result el número o caracter especial tal cual.
      */
      if (character.match(/[a-z]/i)) {
        /*
        Guarda en code el código ascii de la letra en cada iteración del ciclo for
        */
        let code = str.charCodeAt(i);
        /*
         Verifica si el código ascii en cada iteración corresponde a las letras mayúsculas, de ser así aplica la fórmula con el desplazamiento dado y guarda en character la conversión de ese nuevo código ascii pero como letra.
        */
        if ((code >= 65) && (code <= 90)) {
          /* 
          Con parseInt() hago el 'parseo' del número  ingresado en el input como string a tipo de dato number
          */
          character = String.fromCharCode(((code - 65 - parseInt(offset) + 52) % 26) + 65);
        }
        /*
         Verifica si el código ascii en cada iteración corresponde a las letras minúsculas, de ser así aplica la fórmula con el desplazamiento dado y guarda en character la conversión de ese nuevo código ascii pero como letra.
        */
        if ((code >= 97) && (code <= 122)) {
          /* 
          Con parseInt() hago el 'parseo' del número  ingresado en el input como string a tipo de dato number
          */
          character = String.fromCharCode(((code - 97 - parseInt(offset) + 52) % 26) + 97);
        }
      }
      // Finalmente concatena el resultado en resultDecode
      resultDecode += character;
    }
    // El método decode retorna resultDecode luego de toda la iteración y concatenación lista.
    return resultDecode;
  },

  // Método createCipherWithOffset que recibe como parámetro el offset (arbitrariamente dado por mi en el dom)
  createCipherWithOffset: (offset) => ({
    /* 
    Nuevo método que recibe a través de un input el string que a su vez llama al método encode pasándole ambos parámetros ya obtenidos (str y offset), retornando finalmente el resultado del comportamiento del método encode 
    */
    encode: (str) => cipher.encode(str, offset),
    /* 
    Nuevo método que recibe a través de un input el string que a su vez llama al método decode pasándole ambos parámetros ya obtenidos (str y offset), retornando finalmente el resultado del comportamiento del método decode 
    */
    decode: (str) => cipher.decode(str, offset)
  })
}