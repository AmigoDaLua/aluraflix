import Typography from "@mui/joy/Typography";
import styles from "./DestaqueHome.module.css"
import Button from '@mui/joy/Button';
import TagCategoria from "../TagCategoria"
import { Link } from "react-router-dom"


function DestaqueHome({titulo, capa, categoria, descricao, id}){


    return(
        <section className={styles.container}>
            <img className={styles.capa} src={capa} alt="Imagem de destaque da Home" />
            <h3
                className={styles.titulo}
            >
                {titulo}
            </h3>
            <div className={styles.caixaDestaque}
                >
                <div className={styles.caixaDestaqueInfo}>
                    <TagCategoria nome={ categoria } cor={  "#A94918"  }/>
                    <Typography 
                        className={styles.tituloCaixa}
                        fontFamily="Archivo"
                        level="h3"
                        textColor="white">
                        {titulo}
                    </Typography>
                    <Typography
                        className={styles.descricao}
                        fontFamily="Archivo"
                        textColor="white">
                        {descricao}    
                    </Typography>'
                </div>
                <Link
                    to={`/${id}`}
                >
                    <img className={styles.capaCaixa} src={capa} alt="Imagem de destaque da Home" />
                </Link>

            </div>
            <div className={styles.botaoMobile}>
                <Button
                    
                    onClick={() => {window.location.href=`/${id}`}} 
                    variant="solid"
                    className={styles.botaoAssistir}
                        >Assistir
                </Button>
            </div>
        </section>
    )
}

export default DestaqueHome;