fetch("https://jsonplaceholder.typicode.com/users")
  .then((resposta) => {
        if (resposta.ok) {
            return resposta.json();
        } else {
           console.log("deu erro..."); 
        }
    })
  .then(usuarios => {

        usuarios.forEach(usuarios => {
            console.log(usuarios.name);
            console.log(usuarios.email);          
        });   
  })
  .catch(erro => console.log(erro));
