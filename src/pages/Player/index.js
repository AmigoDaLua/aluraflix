import { useEffect, useState } from "react";
import Rodape from "../../components/Rodape";
import styles from "./Player.module.css"
import { useParams } from "react-router-dom";
import { Typography } from "@mui/joy";
import NaoEncontrada from "../NaoEncontrada";
import { useVideosContext } from "../../contexts/Videos";

function Player(){

    const [video, setVideo] = useState();
    const { videos } = useVideosContext()

    // Usando useParams() para pegar a <id> do vídeo
    const parametros = useParams();
    const idVideo = parametros.id

    // Puxando informações do vídeo com base na <id>
    useEffect(()=>{ 
        videos.map((video)=>{
            if (idVideo === video.id){
                setVideo(video)
            }})
    })

    // Lidando com erros
    if (!video){
            return <NaoEncontrada />
        } else {


    return(
        <>
            <h4
                className={styles.titulo}

            >
                {video.titulo}
            </h4>
            <div className={styles.containerVideo}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                ></iframe>
            </div>
            
            <Rodape />
            </>
    )
}

}

export default Player;