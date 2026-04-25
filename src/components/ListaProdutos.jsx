import CardProduto from "./CardProduto";

function ListaProdutos(){
    const produtos = [
        { id: 1, nome: "Peraphone (melhor que Iphone)", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVo2XzAHG5Ge0XiyUP8LMb6ulKQ7wfJwa1GQ&s", preco: "R$ 1.299,99" },
        { id: 2, nome: "Notebook Gamer", foto: "https://s2-techtudo.glbimg.com/qPgH_oQBUw8Vj9pePfLbEDTpRUM=/0x0:695x473/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/v/e/rocTlgS6C3OtCNiggYkA/2015-06-10-laptop-xuxa-usar.jpg", preco: "R$ 3.499,99" },
        { id: 3, nome: "Fone Bluetooth - Mini", foto: "https://images3.memedroid.com/images/UPLOADED208/5ebd77aede158.jpeg", preco: "R$ 199,99" },
        { id: 4, nome: "Smartwatch Pro", foto: "https://m.magazineluiza.com.br/a-static/420x420/brinquedo-do-ben-10-relogio-digital-omnitrix-com-10-frases-em-portugues-som-e-luz-playmate-toys/sessionimports/relogioalienominitrix1/c91f553f89c93353f52c973f23990d25.jpeg", preco: "R$ 599,99" },
        { id: 5, nome: "Tablet Lite", foto: "https://i.pinimg.com/736x/73/8d/44/738d441a054e237d293dfa0756f1c165.jpg", preco: "R$ 899,99" },
        { id: 6, nome: "Câmera Digital", foto: "https://thumbs.dreamstime.com/b/gato-com-c%C3%A2mera-124458441.jpg", preco: "R$ 1.599,99" }
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