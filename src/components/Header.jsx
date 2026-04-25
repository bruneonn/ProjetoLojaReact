import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>🛒 MegaStore</h1>
                <p className={styles.slogan}>Sua loja de confiança!</p>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Início</Link></li>
                    <li className={styles.item}><Link to="/produtos">Produtos</Link></li>
                    <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;