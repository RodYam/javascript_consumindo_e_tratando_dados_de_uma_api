async function buscaEndereco() {
    try {
    var consultaCep = await fetch('https://viacep.com.br/ws/01001250/json/');
    var consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
        throw Error('CEP não existente!');
    }
    console.log(consultaCepConvertida);
    } catch (erro) {
        console.log(erro);
    }
}

buscaEndereco();
