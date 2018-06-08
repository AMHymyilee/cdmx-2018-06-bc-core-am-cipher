window.cipher = {
  // ...
};
men = document.getElementById("mensaje");
salt = document.getElementById("num_salt");

function cifrar(){

let mensaje = men.value;
let saltos = parseInt(salt.value);
let result = new Array (mensaje.lenght);
for (i = 0; i < mensaje.length; i++) {
  let no_ascii = mensaje.charCodeAt(i);

  if (no_ascii >= 65 && no_ascii <= 90){
    result [i] =  String.fromCharCode((no_ascii - 65 + saltos) % 26 + 65);
    console.log(result[i]);
  }
  else if (no_ascii === 32) {
    result [i] =  String.fromCharCode (no_ascii);
    console.log(result[i]);
  }
  else if (no_ascii >= 97 && no_ascii <= 122) {
    result [i] =  String.fromCharCode((no_ascii - 97 + saltos) % 26 + 97);
    console.log(result[i]);
  }
}
let sinComas = result;
console.log(sinComas);
let imprime = document.getElementById("imprime");
 return imprime.innerHTML= sinComas.join("");
};

men = document.getElementById("mensaje");
salt = document.getElementById("num_salt");

function decifrar(){

let mensaje = men.value;
let saltos = parseInt(salt.value);
let result = new Array (mensaje.lenght);
for (i = 0; i < mensaje.length; i++) {
  //let result = new Array (mensaje.lenght);
  let no_ascii = mensaje.charCodeAt(i);

  if (no_ascii >= 65 && no_ascii <= 90){
    result [i] =  String.fromCharCode ((no_ascii - 65 - saltos) % 26+65 );
    console.log(result[i]);
  }
  else if (no_ascii === 32) {
    result [i] =  String.fromCharCode (no_ascii);
    console.log(result[i]);
  }
  else if (no_ascii >= 97 && no_ascii <= 122) {
    result [i] =  String.fromCharCode (26 + [(no_ascii + 97 -saltos) % 26-97] )% 26;
    console.log(result[i]);
  }
}
 let sinComas = result;
 console.log(sinComas);
 let imprime = document.getElementById("imprime");
  return imprime.innerHTML= sinComas.join("");
};
