class Endereco {
  constructor(rua, numero, bairro, cidade, estado, cep) {
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  toJson() {
    return {
      rua: this.rua,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      cep: this.cep
    };
  }

  toString() {
    return `${this.rua}, ${this.numero}, ${this.bairro}, ${this.cidade} - ${this.estado}, CEP: ${this.cep}`;
  }
}

export default Endereco;