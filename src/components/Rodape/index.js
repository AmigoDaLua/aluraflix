import styles from "./Rodape.module.css"
import logo from "../../components/Banner/logo.svg"


function Rodape(){

    return(
        <div className={styles.container}>
            <img 
                alt="Logo Aluraflix"
                className={styles.logo}
                src={logo}
            ></img>
            <p className={styles.texto}>Desenvolvido por <a href="https://github.com/amigodalua" target="_blank" rel="noreferrer">Matheus Pantunes</a> na #ImersãoReact da Alura</p>
        </div>
    )
}

export default Rodape;