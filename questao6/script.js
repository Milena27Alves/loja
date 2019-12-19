$.get(
    "https://tads-kitchen.herokuapp.com/items",
    function (data) {
        console.log(data);
		 addAoHtml(data);
		});
		
		function criarItensDaLista(conteudo,classe) {
		var li = document.createElement("li");
		li.textContent = " ID: "+ conteudo.id +" - DESCRIPTION: "+conteudo.description+" - PRICE: "+conteudo.price;
		li.classList.add(classe);
		return li;
		}
		
		function addAoHtml(vetor){
			for(let i = 0;i <vetor.length;i++){
			 var linhas = criarItensDaLista(vetor[i], "list-group-item");
			 $("#mylist").prepend(linhas);
			 } 
		
		}