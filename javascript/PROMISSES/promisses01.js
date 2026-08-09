function carregarDados() {
    return new Promise((resolve, reject) => {
        console.log("estamos carregando os dados...")
        setTimeout(() => {
            const certoErrado= false;

            if (certoErrado) {
                resolve("certo no carregameto")
            } else{
                reject("deu erro no carregamento")
            }
        }, 3000);
    });
}
carregarDados()
  .then((resposta) => console.log(resposta))
  .catch((resposta) => console.log(resposta));