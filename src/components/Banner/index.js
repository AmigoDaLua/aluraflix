import styles from "./Banner.module.css"
import logo from "./logo.svg"
import { Link } from "react-router-dom"

function Banner(){
    return(

        <section className={styles.banner}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="Logo Aluraflix" />
            </Link>
            <div
                className={styles.botoesBanner}
            >
               <Link to="/novoVideo" className={styles.botaoBanner}>Novo Vídeo</Link>
               <Link to="/novaCategoria" className={styles.botaoBanner}>Nova Categoria</Link> 
            </div>

        </section>

    )
}

export default Banner;