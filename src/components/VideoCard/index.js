import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css"


function VideoCard({capa, titulo, id}){

    return (    
                <Link 
                    to={`/${id}`}
                    className={styles.link} 
                >
                    <img className={styles.capa} src={capa} alt={titulo} />
                </Link>           
    )
}

export default VideoCard;