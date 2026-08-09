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
        User:${usuario.username}
        <br>
        Email:${usuario.email}
        <br>
        Cidade:${usuario.address.city}
        <br>
        Empresa:${usuario.company.name}
        <br>
        Site:${usuario.website}
        <hr>
        `;
    });
   })