/*------------------------Copiar e colar texto---------------------------------*/
function copiartexto() {
    document.getElementById('text-texto').select();

    document.execCommand('copy');
}

async function colartexto() {
    navigator.clipboard.readText().then(
        clipText => document.getElementById("text-texto").innerText = clipText);
}
/*-----------------------Copiar e colar Codigo----------------------------------*/
function copiar() {
    document.getElementById('text-codigo').select();

    document.execCommand('copy');
}

async function colar() {
    navigator.clipboard.readText().then(
        clipText => document.getElementById("text-codigo").innerText = clipText);
}
/*---------------------------------------------------------*/
function iniciar() {
    document.getElementById('carregartexto').style.visibility = 'hidden'
    document.getElementById('carregarcodigo').style.visibility = 'hidden'
    document.getElementById('text-texto').focus();


}