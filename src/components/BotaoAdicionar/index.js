import { Link } from "react-router-dom";
import styles from "./BotaoAdicionar.module.css"

function BotaoAdicionar({link, texto}){
    return(
        <Link to={link} className={styles.container}>
            <p className={styles.texto}>{texto}</p>
        </Link>
    )
}

export default BotaoAdicionar;