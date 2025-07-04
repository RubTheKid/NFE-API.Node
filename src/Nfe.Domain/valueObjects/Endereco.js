class Endereco {
  constructor(logradouro, numero, bairro, cidade, estado, cep) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  toJson() {
    return {
      logradouro: this.logradouro,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      cep: this.cep
    };
  }
}

export default Endereco;