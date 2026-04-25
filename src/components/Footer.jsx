import styles from "./Footer.module.css";

function Footer(){
    
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2026 - Bruno Mota - Todos os direitos reservados</p>
                <div className={styles.socialLinks}>
                    <a href="" className={styles.socialLink}>📱 Instagram</a>
                    <a href="" className={styles.socialLink}>📘 Facebook</a>
                    <a href="" className={styles.socialLink}>🐦 Twitter</a>
                    <a href="" className={styles.socialLink}>📧 contato@megastore.com</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;