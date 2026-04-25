import styles from "./Sobre.module.css";

function Sobre(){
    return(
        <div className={styles.sobreContainer}>
            <h1>Sobre a QualiStore</h1>
            <div className={styles.sobreContent}>
                <p>Fundada em 2026, a QualiStore nasceu com o propósito de disponibilizar preços acessíveis para produtos de EXTREMA QUALIDADE.</p>
                <p>Nossa missão é proporcionar uma experiência de compra única, com produtos selecionados e garantia de satisfação.</p>
                <p>Venha nos conhecer e faça parte dessa história de sucesso!</p>
                <p>Deixo aqui uma menção honrosa ao professor Mario da Fatec de Cotia, o qual nos proporciona só aulas fodas em que realmente conseguimos entender tudo :)</p>
                <p>PS: isso não é puxação de saco por nota... (talvez seja)</p>
            </div>
        </div>
    )
}
export default Sobre;