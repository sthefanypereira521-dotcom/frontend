async function buscarUsuarios() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const usuarios = await resposta.json();
    
    usuarios.forEach(usuarios => { 
        console.log(usuarios.name);

    });
} 

buscarUsuarios();