var campoFiltro = document.querySelector("#filtar-tabela");

	campoFiltro.addEventListener("input",function(){ // input é para pegar o valor da pesquisa
		var pacientes = document.querySelectorAll(".paciente");
		if (this.value.length > 0) {
			console.log("Tem algo digitado");
			for (var i = 0; i < pacientes.length; i++) {
        		var paciente = pacientes[i];
        		var tdNome = paciente.querySelector(".info-nome");
        		var nome = tdNome.textContent;
						var expressao = new RegExp(this.value, "i"); // é para filtrar por  letra e nao por nome						

        		if (!expressao.test(nome)) { // add a classe para esconder os outros pacientes
        		paciente.classList.add("invisivel");
        		}else{
        		paciente.classList.remove("invisivel");
        		}
    		}
		}else{
			for (var i = 0; i <pacientes.length; i++) {
				var paciente = pacientes[i];
				paciente.classList.remove("invisivel");
			}
		}
	});
