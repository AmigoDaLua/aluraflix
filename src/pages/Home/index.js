import styles from "./Home.module.css"
import VideoCard from "../../components/VideoCard";
import BotaoAdicionar from "../../components/BotaoAdicionar";
import Categoria from "../../components/Categoria";
import DestaqueHome from "../../components/DestaqueHome";
import {v4 as uuidv4} from 'uuid';
import { useCategoriasContext } from "../../contexts/Categorias";
import { useVideosContext } from "../../contexts/Videos";
import Rodape from "../../components/Rodape";


function Home(){

    // Variáveis do componente:
    const { videos } = useVideosContext();
    const { categorias } = useCategoriasContext();

    // Escolhendo um vídeo aleatório para ser o Destaque:
    const videoDestaque = videos[(Math.floor(Math.random() * videos.length))];
       

    return(  
        <>
        <>
            <DestaqueHome {...videoDestaque} />
            <section className={styles.container}>           
                {categorias.map((categoria) => {          
                    return (
                        <Categoria {...categoria} key={uuidv4()}>
                            {videos.map((video) => {
                                if (video.categoria === categoria.nome){
                                    return(
                                        <VideoCard {...video} key={uuidv4()}/>
                                    )
                                } else {
                                    return ""
                                }
                                
                            })}
                        </Categoria>
                            )})
                }          
            </section>
        <section className={styles.botoesMobile}>
            <BotaoAdicionar link="/novoVideo" texto="Novo Vídeo" />
            <BotaoAdicionar link="/novaCategoria" texto="Nova Categoria" />
        </section>
        
        </>     
          <div className={styles.rodape}>
              <Rodape />
          </div>   
        </>   
                                  
    )
}

export default Home;