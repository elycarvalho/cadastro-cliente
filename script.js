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

