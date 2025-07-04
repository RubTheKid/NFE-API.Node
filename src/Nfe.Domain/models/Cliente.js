import { randomUUID } from 'crypto';

class Cliente {
    constructor(razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, endereco, email, telefone) {
        this.id = randomUUID();
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.enderecoLogradouro = endereco?.logradouro;
        this.enderecoNumero = endereco?.numero;
        this.enderecoBairro = endereco?.bairro;
        this.enderecoCidade = endereco?.cidade;
        this.enderecoEstado = endereco?.estado;
        this.enderecoCep = endereco?.cep;
        this.email = email;
        this.telefone = telefone;
        this.dataCriacao = new Date();
    }

    static create(id, razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, endereco, email, telefone, dataCriacao) {
        const cliente = Object.create(Cliente.prototype);
        cliente.id = id;
        cliente.razaoSocial = razaoSocial;
        cliente.nomeFantasia = nomeFantasia;
        cliente.cnpj = cnpj;
        cliente.inscricaoEstadual = inscricaoEstadual;
        cliente.enderecoLogradouro = endereco?.logradouro;
        cliente.enderecoNumero = endereco?.numero;
        cliente.enderecoBairro = endereco?.bairro;
        cliente.enderecoCidade = endereco?.cidade;
        cliente.enderecoEstado = endereco?.estado;
        cliente.enderecoCep = endereco?.cep;
        cliente.email = email;
        cliente.telefone = telefone;
        cliente.dataCriacao = dataCriacao;
        return cliente;
    }

    atualizarRazaoSocial(razaoSocial) {
        if(!razaoSocial || razaoSocial.trim() === '') {
            throw new Error('Razão Social não pode ser vazia.');
        }
        this.razaoSocial = razaoSocial.trim();
    }

    atualizarNomeFantasia(nomeFantasia) {
        if(!nomeFantasia || nomeFantasia.trim() === '') {
            throw new Error('Nome Fantasia não pode ser vazio.');
        }
        this.nomeFantasia = nomeFantasia.trim();
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
        this.enderecoLogradouro = endereco.logradouro;
        this.enderecoNumero = endereco.numero;
        this.enderecoBairro = endereco.bairro;
        this.enderecoCidade = endereco.cidade;
        this.enderecoEstado = endereco.estado;
        this.enderecoCep = endereco.cep;
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

    atualizarEnderecoCampos({ logradouro, numero, bairro, cidade, estado, cep }) {
        if (logradouro !== undefined) this.enderecoLogradouro = logradouro;
        if (numero !== undefined) this.enderecoNumero = numero;
        if (bairro !== undefined) this.enderecoBairro = bairro;
        if (cidade !== undefined) this.enderecoCidade = cidade;
        if (estado !== undefined) this.enderecoEstado = estado;
        if (cep !== undefined) this.enderecoCep = cep;
    }

    getEndereco() {
        return {
            logradouro: this.enderecoLogradouro,
            numero: this.enderecoNumero,
            bairro: this.enderecoBairro,
            cidade: this.enderecoCidade,
            estado: this.enderecoEstado,
            cep: this.enderecoCep
        };
    }
}

export default Cliente;