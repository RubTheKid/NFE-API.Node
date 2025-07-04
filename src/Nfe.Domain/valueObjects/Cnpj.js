class Cnpj {
    constructor(cnpj) {
        if (!cnpj || cnpj.trim() === '') {
            throw new Error('CNPJ não pode ser vazio.');
        }
        this.cnpj = cnpj.replace(/\D/g, '');
        
        if (this.cnpj.length !== 14) {
            throw new Error('CNPJ deve conter 14 dígitos.');
        }
    }

    toString() {
        return this.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
    }
    
    toJson() {
        return {
            cnpj: this.cnpj
        };
    }
}

export default Cnpj;