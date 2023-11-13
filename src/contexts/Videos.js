import { createContext, useState, useContext, useEffect} from "react";


// Criando um contexto + seu displayName
export const VideosContext = createContext();
VideosContext.displayName = "Videos";


export default function VideosProvider({ children }){

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/AmigoDaLua/aluraflix-api/videos")
        .then(resposta => resposta.json())
        .then(dados =>{
            setVideos(dados)
        })},[])  

    return(
        <VideosContext.Provider
        value={{videos, setVideos}}>
            {children}
        </VideosContext.Provider>
    )
}


export function useVideosContext(){
    const { videos, setVideos } = useContext(VideosContext);

    function adicionarVideo(novoVideo){    

        let novaLista = [...videos, novoVideo];
        console.log(novaLista)  
        return setVideos(novaLista);
    }

    
    
return { videos,
        adicionarVideo
        }

}