async function buscarUsuarios() {
    try {

    const resposta = await fetch('https://jsonplaceholder.typicode.com/200');
    
        if (!resposta.ok) {
            throw new Error("pagina nao encontrada!");
        }

    const usuario = await resposta.json();
    
    console.log(usuario);
    
    } catch (erro) {

        console.log(erro);
    }
    
} 

buscarUsuarios();