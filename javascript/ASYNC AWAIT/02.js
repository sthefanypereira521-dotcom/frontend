// retorna {} vazio 

async function buscarUsuarios() {
    try {

    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/200');
    
    const usuario = await resposta.json();
    
    console.log(usuario);
    
    } catch(erro){

        console.log(erro);
    }
    
} 

buscarUsuarios();