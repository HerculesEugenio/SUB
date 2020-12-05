export class Receita{
    id: number;
    titulo: string;
    tipo: string;
    ingredientes: string;
    modo_preparo: string;
    tempo_preparo: number;
    rendimento: string;
    publica: boolean;

    constructor(titulo:string, tipo: string, ingredientes: string,
                modo_preparo: string, tempo_preparo: number, 
                rendimento: string, publica: boolean){
        this.titulo = titulo;
        this.tipo = tipo;
        this.ingredientes = ingredientes;
        this.modo_preparo = modo_preparo;
        this.tempo_preparo = tempo_preparo;
        this.rendimento = rendimento;
        this.publica = publica;
        }    
}