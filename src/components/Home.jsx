import Banner from "./Banner";
import styles from "./Home.module.css";

function Home(){
    return(
        <div>
            <Banner />
            <div className={styles.chamada}>
                <h2>Bem-vindo à QualiStore!</h2>
                <p>Os melhores produtos com os preços mais competitivos do mercado.</p>
                <p>Qualidade e confiança que você merece!</p>
            </div>
        </div>
    )
}
export default Home;