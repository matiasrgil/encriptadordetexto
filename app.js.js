const inputTexto = document.querySelector(".caja-izq");
const mensaje = document.querySelector(".caja-der");
const cajaMuñeco = document.querySelector(".imagen-muñeco");
const cajaLeyenda = document.querySelector(".leyenda-der");
const cajaCopiar = document.querySelector(".btn-copiar");

cajaCopiar.style.display = "none";

function borrarCajaDer() {
    cajaMuñeco.style.display = "none";
    cajaLeyenda.style.display = "none";
    cajaCopiar.style.display = "block";
}

function verCajaDer() {
    cajaMuñeco.style.display = "block";
    cajaLeyenda.style.display = "block";
    cajaCopiar.style.display = "none";
}

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
    borrarCajaDer();
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i =0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return StringParaEncriptar;
}

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    borrarCajaDer();
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i =0; i< matrizCodigo.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return StringParaDesencriptar;
}

function copiar() {
    let textoCopiado = document.querySelector(".caja-der");
    textoCopiado.select();
    document.execCommand("cut");
    verCajaDer()
}






