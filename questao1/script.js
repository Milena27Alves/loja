$.get(
    "https://tads-kitchen.herokuapp.com/cards",
    function (data) {
        console.log(data);
		 addAoHtml(data);
		});
		
		function criarItensDaLista(conteudo,classe) {
		var li = document.createElement("li");
		li.textContent = " NUMBER: "+ conteudo.number +"  STATUS:  "+conteudo.status;
		li.classList.add(classe);
		return li;
		}
		
		function addAoHtml(vetor){
			for(let i = 0;i <vetor.length;i++){
			 var linhas = criarItensDaLista(vetor[i], "list-group-item");
			 $("#mylist").prepend(linhas);
			 } 
		
		}