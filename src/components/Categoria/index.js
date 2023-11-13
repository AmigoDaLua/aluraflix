import styles from "./Categoria.module.css"
import Typography from "@mui/joy/Typography"
import TagCategoria from "../TagCategoria";


function Categoria({nome, descricao, cor, children}){

        return(   
             <div className={styles.container}>
                <div className={styles.containerInfos}>
                    <TagCategoria nome={ nome } cor={cor}/>
                    <Typography
                        fontFamily="Archivo"
                        className={styles.descricao}
                        textColor="white"
                    >{ descricao }</Typography>
                </div>
                <div className={styles.containerVideos}>
                    { children }
                </div>          
            </div>
        )
}



export default Categoria;