function AtualizaLista(){
	$("#mylist").empty();
	$.get(
    "https://tads-kitchen.herokuapp.com/items",
    function (data) {
        console.log(data);
		 addAoHtml(data);
		});
}
		
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
		
		
		
		
		
		function addNovoIntegrant(){
			//var consinheiro = $("#nome")[0].value;
			var form = document.querySelector("#formulario");
			var descricao = $("#desc")[0].value;
			var preco = $("#preco")[0].value;
			console.log(descricao);
			console.log(preco);
			var obj = JSON.stringify({description : descricao, price: preco});
			console.log(obj);
			$.post(
			"https://tads-kitchen.herokuapp.com/item/create",
			obj
			);
		}
		
		
		$("#btn").on('click', function(e){
		e.preventDefault();
		 addNovoIntegrant();
		//console.log(a);
		});
setInterval(function(){AtualizaLista() }, 5000,);