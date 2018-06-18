window.cipher = {

  encode: (string, offset) => { /* funcion para encriptar*/
    let str = string;
    let offset1 = parseInt(offset);
    let result = new Array(str.lenght);
    for (let i = 0; i < str.length; i++) {
      let no_ascii = str.charCodeAt(i);

      if (no_ascii >= 65 && no_ascii <= 90) { /* encriptando mayusculas*/
        result[i] = String.fromCharCode((no_ascii - 65 + offset1) % 26 + 65);
        console.log(result[i]);
      }
      else if (no_ascii === 32) { /* manteniendo espacios igual*/
        result[i] = String.fromCharCode(no_ascii);
        console.log(result[i]);
      }
       else if (no_ascii >= 48 && no_ascii <= 57) { /* encriptando numeros*/
        result[i] = String.fromCharCode((no_ascii - 48 + offset1) % 10 + 48);
        console.log(result[i]);
      }
      else if (no_ascii >= 97 && no_ascii <= 122) { /* encriptando minusculas*/
        result[i] = String.fromCharCode((no_ascii - 97 + offset1) % 26 + 97);
        console.log(result[i]);
      }
    }
    let sinComas = result;
    console.log(sinComas);
    //let imprime = document.getElementById("imprime");
    return sinComas.join("");
  },

  decode: (string2, offset) => { /* funcion para desencriptar*/
    let str = string2;
    let offset1 = (parseInt(offset) % 26);
    let result = new Array(str.lenght);
    for (let i = 0; i < str.length; i++) {

      let no_ascii = str.charCodeAt(i);

      if (no_ascii >= 65 && no_ascii <= 90) {  /* desencriptando mayusculas*/
        result[i] = String.fromCharCode((no_ascii - 90 - offset1) % 26 + 90);
        console.log(result[i]);
      }
      else if (no_ascii === 32) { /* manteniendo espacios igual*/
        result[i] = String.fromCharCode(no_ascii);
        console.log(result[i]);
      }
      else if (no_ascii >= 48 && no_ascii <= 57) { /* desencriptando numeros*/
        result[i] = String.fromCharCode((no_ascii - 57 - offset) % 10 + 57);
        console.log(result[i]);
      }
      else if (no_ascii >= 97 && no_ascii <= 122) { /* desencriptando minusculas*/
        result[i] = String.fromCharCode((no_ascii - 122 - offset) % 26 + 122);
        console.log(result[i]);
      }
    }
    let sinComas = result;
    console.log(sinComas);
    return sinComas.join("");  /* uniendo sin comas*/
  },
  /* Tratando hack ed*/
  createCipherWithOffset: (offsetHackerEdition) => {
      let encoding = obj1.value;
      let decoding = obj2.value;
      let hack = {
        encode: (encoding) => {
          return (cipher.encode(encoding, offset));
        },
        decode: (decoding) => {
          return (cipher.decode(decoding, offset));
        }
      }
      return ( hack.encode(encoding) + hack.decode(decoding));
    }
};
