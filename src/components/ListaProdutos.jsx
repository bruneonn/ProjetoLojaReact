import CardProduto from "./CardProduto";

function ListaProdutos(){
    const produtos = [
        { id: 1, nome: "Smartphone XYZ", foto: "https://via.placeholder.com/200x200?text=Smartphone", preco: "R$ 1.299,99" },
        { id: 2, nome: "Notebook Ultra", foto: "https://via.placeholder.com/200x200?text=Notebook", preco: "R$ 3.499,99" },
        { id: 3, nome: "Fone Bluetooth", foto: "https://via.placeholder.com/200x200?text=Fone", preco: "R$ 199,99" },
        { id: 4, nome: "Smartwatch Pro", foto: "https://via.placeholder.com/200x200?text=Smartwatch", preco: "R$ 599,99" },
        { id: 5, nome: "Tablet Lite", foto: "https://via.placeholder.com/200x200?text=Tablet", preco: "R$ 899,99" },
        { id: 6, nome: "Câmera Digital", foto: "https://via.placeholder.com/200x200?text=Camera", preco: "R$ 1.599,99" }
    ];

    return(
        <div>
            <h1>Nossos Produtos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
                {produtos.map(produto => (
                    <CardProduto 
                        key={produto.id}
                        nome={produto.nome}
                        foto={produto.foto}
                        preco={produto.preco}
                    />
                ))}
            </div>
        </div>
    )
}
export default ListaProdutos;