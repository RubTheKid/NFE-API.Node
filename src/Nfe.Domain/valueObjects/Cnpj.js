class Cnpj {
    constructor(cnpj) {
        if (!cnpj || cnpj.trim() === '') {
            throw new Error('CNPJ não pode ser vazio.');
        }
        
        if (this.cnpj.length !== 14) {
            throw new Error('CNPJ deve conter 14 dígitos.');
        }

        
        this.cnpj = cnpj.replace(/\D/g, '');
    }

    toJson() {
        return {
            cnpj: this.cnpj
        };
    }
}

export default Cnpj;