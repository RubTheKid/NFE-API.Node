class Telefone {
    constructor(ddd, numero) {
        if (!ddd || ddd.trim() === '') {
            throw new Error('DDD não pode ser vazio.');
        }
        if (!numero || numero.trim() === '') {
            throw new Error('Número não pode ser vazio.');
        }
        
        this.ddd = ddd.trim();
        this.numero = numero.trim();
    }

    toJson() {
        return {
            ddd: this.ddd,
            numero: this.numero
        };
    }
}

export default Telefone;