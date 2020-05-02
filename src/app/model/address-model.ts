export class AddressModel {

    public cep: string;
    public logradouro: string;
    public bairro: string;
    public complemento: string;
    public localidade: string;
    public uf: string;
    public unidade: string;
    public ibge: string;
    public gia: string;
    public numero: string;

    constructor() {
        this.cep = '04852050';
        this.logradouro = 'Rua Madre Ana Justina';
        this.bairro = 'Jd. Shangri-lá';
        this.complemento = '';
        this.localidade = 'São Paulo';
        this.uf = 'SP';
        this.unidade = '';
        this.ibge = '';
        this.gia = '';
        this.numero = '03';
    }
}
