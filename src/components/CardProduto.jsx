import Button from "./FuncaoBotao";
import styles from "./CardProduto.module.css";

function CardProduto(props){
    return(
        <div className={styles.card}>
            <h2 className={styles.nome}>{props.nome}</h2>
            <img src={props.foto} className={styles.imagem} alt="Foto do produto"/>
            <p className={styles.preco}>Preço: {props.preco}</p>
            <Button />
        </div>
    )
}
export default CardProduto;