class Clientes{
	constructor(nome, cpf, email, telefone, endereco, bairro, cidade, cep, estado){
		this.nome = nome
		this.cpf = cpf
		this.email = email
		this.telefone = telefone
		this.endereco = endereco
		this.bairro = bairro
		this.cidade = cidade
		this.cep = cep
		this.estado = estado
	}

	validaDados(){
		for (let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null){
				return false
			}
		}
		return true
	}
}

class Dados{
	constructor(){
		let codigo = localStorage.getItem('codigo')
		if(codigo === null){
			localStorage.setItem('codigo', 0)
		}
	}

	adicionaCodigo(){
		let codigoAdd = localStorage.getItem('codigo')
		return parseInt(codigoAdd) + 1
	}

	gravar(d){
		let codigo = this.adicionaCodigo()

		localStorage.setItem(codigo, JSON.stringify(d))
		localStorage.setItem('codigo', codigo)
	}

	recuperaRegistros(){
		let dadosClientes = Array()
		let codigo = localStorage.getItem('codigo')

		//recupera registros de todos os clientes cadastrados
		for(let i = 1; i <= codigo; i++){
            codigoCliente = JSON.parse(localStorage.getItem(i))

            //pular indices removidos
            if(codigoCliente === null){
            	continue
            }
            codigoCliente.codigo = i
            dadosClientes.push(codigoCliente)
		}
		return dadosClientes
	}

	pesquisar(dados){
		let dadosFiltrados = Array()
	}
}

