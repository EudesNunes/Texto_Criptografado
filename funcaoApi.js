function codificar() {
    /* id do texto = "text-texto" */
    /* id da chave texto = "chave-texto" */
    try {
        if (document.getElementById("chave-texto").value === "" || document.getElementById("text-texto").value == "") {
            alert("Preencha Todos os Campos para Criptografar!");
        } else {
            document.getElementById('carregartexto').style.visibility = 'visible'
            const id_texto = document.getElementById("text-texto").value;
            const id_textochave = document.getElementById("chave-texto").value;
            const url_t = 'https://classify-web.herokuapp.com/api/encrypt';
            const texto = {
                data: id_texto,
                key: id_textochave
            }
            const init_t = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(texto)
            }
            fetch(url_t, init_t)
                .then(response => response.json())
                .then(dados => exibir_codigo(dados));
        }
    }
    catch (erro) {
        alert("Erro" + erro)
        window.location.reload()
    }

}

function exibir_codigo(dados) {
    document.getElementById('carregartexto').style.visibility = 'hidden'
    document.getElementById("text-texto").value = "";
    document.getElementById("chave-texto").value = "";
    console.log(dados)
    document.getElementById("text-codigo").value = dados.result;

}

async function decodificar() {
    /* id do texto codificado = "text-codigo" */
    /* id da chave texto codfificado = "chave-codigo" */

    if (document.getElementById("chave-codigo").value === "" || document.getElementById("text-codigo").value == "") {
        alert("Preencha Todos os Campos para Descriptografar!");
    }
    else {
        try {
            document.getElementById('carregarcodigo').style.visibility = 'visible'
            const id_codigochave = document.getElementById("chave-codigo").value;
            const id_codigo = document.getElementById("text-codigo").value;
            const url_c = 'https://classify-web.herokuapp.com/api/decrypt';
            const codigo = {
                data: id_codigo,
                key: id_codigochave
            }
            const init_c = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(codigo)
            }
            fetch(url_c, init_c)
                .then(response => response.json())
                .then(dados => exibir_texto(dados));
        } catch (erro) {
            alert("Erro" + erro)
            window.location.reload()
        }
    }
}

function exibir_texto(dados) {
    document.getElementById('carregarcodigo').style.visibility = 'hidden'
    document.getElementById("text-codigo").value = "";
    document.getElementById("chave-codigo").value = "";
    console.log(dados)
    document.getElementById("text-texto").value = dados.result;
}
