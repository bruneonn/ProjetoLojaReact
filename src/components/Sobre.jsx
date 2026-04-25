import styles from "./Sobre.module.css";

function Sobre(){
    return(
        <div className={styles.sobreContainer}>
            <h1>Sobre a MegaStore</h1>
            <div className={styles.sobreContent}>
                <p>Fundada em 2024, a MegaStore nasceu com o propósito de oferecer os melhores produtos tecnológicos com preços acessíveis e atendimento de qualidade.</p>
                <p>Nossa missão é proporcionar uma experiência de compra única, com produtos selecionados e garantia de satisfação.</p>
                <p>Ipse Venena Bibas - Beba você mesmo o veneno (enfrente seus desafios com coragem)!</p>
                <p>Venha nos conhecer e faça parte dessa história de sucesso!</p>
            </div>
        </div>
    )
}
export default Sobre;