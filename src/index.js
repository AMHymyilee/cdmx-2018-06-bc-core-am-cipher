//Variables globales
let string = document.getElementById("mensaje");
let offset = document.getElementById("num_salt");
let encode = document.getElementById("encode");
let decode = document.getElementById("decode");
let imprime = document.getElementById("imprime");
//Creando variable para no confundirme al probar nueva modalidad (resultado depende de encuestas)
let string2 = document.getElementById("imprime");

//Añadiendo addEventListener para sustituir Onclick
encode.addEventListener ("click", ciphering);
function ciphering () { 
    imprime.innerHTML = window.cipher.encode (string.value, offset.value);
}

decode.addEventListener ("click",deciphering);
function deciphering() {
    mensaje.innerHTML = window.cipher.decode(string2.value, offset.value);
}


//Tratando el hacker edition
let hackEd = document.getElementById("hackEdt");
let obj1 = document.getElementById("objString1");
let obj2 = document.getElementById("objString2");

//FuncionExtra
hackEd.addEventListener("click", hackEdition);
function hackEdition() {
    obj1.value;
    obj2.value;
    result.innerHTML = window.cipher.createCipherWithOffset(offset.value);
}