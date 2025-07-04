import { randomUUID } from 'crypto';

class Produto {
    constructor(nome, descricao, codigoBarras, ncm, unidadeMedida, preco, peso) {
        this.id = randomUUID();
        this.nome = nome;
        this.descricao = descricao;
        this.codigoBarras = codigoBarras;
        this.ncm = ncm;
        this.unidadeMedida = unidadeMedida;
        this.preco = preco;
        this.peso = peso;
        this.dataCriacao = new Date();
        this.ativo = true;
    }

    static create(id, nome, descricao, codigoBarras, ncm, unidadeMedida, preco, peso, dataCriacao, ativo) {
        const produto = Object.create(Produto.prototype);
        produto.id = id;
        produto.nome = nome;
        produto.descricao = descricao;
        produto.codigoBarras = codigoBarras;
        produto.ncm = ncm;
        produto.unidadeMedida = unidadeMedida;
        produto.preco = preco;
        produto.peso = peso;
        produto.dataCriacao = dataCriacao;
        produto.ativo = ativo;
        return produto;
    }

    atualizarPreco(novoPreco) {
        if (novoPreco <= 0) {
            throw new Error("Preço deve ser maior que zero");
        }
        this.preco = novoPreco;
    }

    desativar() {
        this.ativo = false;
    }

    ativar() {
        this.ativo = true;
    }

    atualizarNome(nome) {
        if (!nome || nome.trim() === '') {
            throw new Error("Nome não pode ser vazio");
        }
        this.nome = nome.trim();
    }

    atualizarDescricao(descricao) {
        if (!descricao || descricao.trim() === '') {
            throw new Error("Descrição não pode ser vazia");
        }
        this.descricao = descricao.trim();
    }

    atualizarCodigoBarras(codigoBarras) {
        if (!codigoBarras || codigoBarras.trim() === '') {
            throw new Error("Código de barras não pode ser vazio");
        }
        this.codigoBarras = codigoBarras.trim();
    }

    atualizarNcm(ncm) {
        if (!ncm || ncm.trim() === '') {
            throw new Error("NCM não pode ser vazio");
        }
        this.ncm = ncm.trim();
    }

    atualizarUnidadeMedida(unidadeMedida) {
        if (!unidadeMedida || unidadeMedida.trim() === '') {
            throw new Error("Unidade de medida não pode ser vazia");
        }
        this.unidadeMedida = unidadeMedida.trim();
    }

    atualizarPeso(peso) {
        if (peso < 0) {
            throw new Error("Peso não pode ser negativo");
        }
        this.peso = peso;
    }

    atualizarDadosCompletos(nome, descricao, codigoBarras, ncm, unidadeMedida, preco, peso) {
        this.atualizarNome(nome);
        this.atualizarDescricao(descricao);
        this.atualizarCodigoBarras(codigoBarras);
        this.atualizarNcm(ncm);
        this.atualizarUnidadeMedida(unidadeMedida);
        this.atualizarPreco(preco);
        this.atualizarPeso(peso);
    }
}

export default Produto; 