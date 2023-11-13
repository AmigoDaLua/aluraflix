import styles from "./TagCategoria.module.css"
import Typography from "@mui/joy/Typography";

function TagCategoria({nome, cor}){

    return( 
                <div className={styles.tag}>
                    <Typography
                        backgroundColor={`${cor}`}
                        className={styles.nome}
                        fontFamily="Archivo"
                        textColor="white"
                    >
                        {nome}
                    </Typography>
                </div> 
    )
}

export default TagCategoria;