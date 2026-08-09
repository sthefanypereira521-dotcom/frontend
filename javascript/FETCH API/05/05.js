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
    console.log(usuarios);

    usuarios.forEach(usuarios => {
        
    });

});  