fetch("https://jsonplaceholder.typicode.com/posts/200")
  .then((resposta) => {
        if (resposta.ok) {
            return resposta.json();
        } else {
           console.log("deu erro..."); 
        }
    })
  .then(json => console.log(json))
  .catch(erro => console.log(erro));