import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoService {
    produtosMock = [
    {
        "idProduto": 1,
        "nomeProduto": "Notebook Gamer Nitro",
        "descricao": "Processador i7, 16GB RAM, RTX 3060",
        "preco": 5499.90,
        "qtdProduto": 10
    },
    {
        "idProduto": 2,
        "nomeProduto": "Mouse Ergonômico Pro",
        "descricao": "Mouse sem fio com sensor óptico de 16000 DPI",
        "preco": 249.00,
        "qtdProduto": 50
    },
    {
        "idProduto": 3,
        "nomeProduto": "Teclado Mecânico RGB",
        "descricao": "Switch Blue, layout ABNT2 com iluminação customizável",
        "preco": 380.50,
        "qtdProduto": 25
    },
    {
        "idProduto": 4,
        "nomeProduto": "Monitor UltraWide 34\"",
        "descricao": "Resolução 4K, 144Hz, painel IPS",
        "preco": 2100.00,
        "qtdProduto": 15
    },
    {
        "idProduto": 5,
        "nomeProduto": "Headset Wireless Premium",
        "descricao": "Cancelamento de ruído ativo e bateria de 40h",
        "preco": 899.00,
        "qtdProduto": 30
    }
]
    //metodo de querry/exibição do catalogo
    fetchProdutos(){
        return this.produtosMock;
    }
    //metodo de criação de produto
    createProduto(data){
        return this.produtosMock.push(data)
    }
}
