class Cliente {
    constructor(id, razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, endereco, email, telefone, dataCriacao) {
        this.id = id;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.dataCriacao = dataCriacao; 
    }

    atualizarRazaoSocial(razaoSocial) {
     if(!razaoSocial || razaoSocial.trim() === '') {
        throw new Error('Razão Social não pode ser vazia.');
        }
        this.razaoSocial = razaoSocial;
    }

    atualizarNomeFantasia(nomeFantasia) {
        if(!nomeFantasia || nomeFantasia.trim() === '') {
            throw new Error('Nome Fantasia não pode ser vazio.');
        }
        this.nomeFantasia = nomeFantasia;
    }

     atualizarCnpj(cnpj) {
        if (!cnpj) {
            throw new Error("CNPJ não pode ser nulo");
        }
        this.cnpj = cnpj;
    }

    atualizarInscricaoEstadual(inscricaoEstadual) {
        this.inscricaoEstadual = inscricaoEstadual ? inscricaoEstadual.trim() : null;
    }

    atualizarEndereco(endereco) {
        if (!endereco) {
            throw new Error("Endereço não pode ser nulo");
        }
        this.endereco = endereco;
    }

    atualizarEmail(email) {
        if (!email || email.trim() === '') {
            throw new Error("Email não pode ser vazio");
        }

        if (!email.includes("@")) {
            throw new Error("Email deve ter formato válido");
        }
        this.email = email.trim().toLowerCase();
    }

    atualizarTelefone(telefone) {
        if (!telefone || telefone.trim() === '') {
            throw new Error("Telefone não pode ser vazio");
        }
        this.telefone = telefone.trim();
    }

    atualizarDadosCompletos(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, endereco, email, telefone) {
        this.atualizarRazaoSocial(razaoSocial);
        this.atualizarNomeFantasia(nomeFantasia);
        this.atualizarCnpj(cnpj);
        this.atualizarInscricaoEstadual(inscricaoEstadual);
        this.atualizarEndereco(endereco);
        this.atualizarEmail(email);
        this.atualizarTelefone(telefone);
    }

     atualizarEnderecoCampos({ rua, numero, bairro, cidade, estado, cep }) {
        if (!this.endereco) {
            throw new Error("Endereço atual não está definido");
        }
        if (rua !== undefined) this.endereco.rua = rua;
        if (numero !== undefined) this.endereco.numero = numero;
        if (bairro !== undefined) this.endereco.bairro = bairro;
        if (cidade !== undefined) this.endereco.cidade = cidade;
        if (estado !== undefined) this.endereco.estado = estado;
        if (cep !== undefined) this.endereco.cep = cep;
    }
}

export default Cliente;