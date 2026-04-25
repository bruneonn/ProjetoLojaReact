import styles from "./Footer.module.css";

function Footer(){
    
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2026 - Bruno Mota - Todos os direitos reservados</p>
                <div className={styles.socialLinks}>
                    <p className={styles.socialLink}>📱 Instagram</p>
                    <p className={styles.socialLink}>📘 Facebook</p>
                    <p className={styles.socialLink}>🐦 Twitter</p>
                    <p className={styles.socialLink}>📧 contato@megastore.com</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;