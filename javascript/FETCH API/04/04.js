const divUsuarios = document.getElementById("usuarios")
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resposta) => {
        if (resposta.ok) {
            return resposta.json();
        } else {
           console.log("deu erro..."); 
        }
    })
   .then(usuarios => {

    usuarios.forEach(usuario => {
        divUsuarios.innerHTML+=`
        Nome:${usuario.name}
        <br>
        cidade:${usuario.address.city}
        <hr>
        `;
    });
   })
