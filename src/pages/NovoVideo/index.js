import Input from "@mui/joy/Input";
import Rodape from "../../components/Rodape";
import styles from "./NovoVideo.module.css"
import Textarea from "@mui/joy/Textarea"
import Button from "@mui/joy/Button"
import { useState, useEffect } from "react";
import ListaSuspensa from "../../components/ListaSuspensa";
import { useCategoriasContext } from "../../contexts/Categorias";
import {v4 as uuidv4} from 'uuid';
import { useVideosContext } from "../../contexts/Videos";
import { Typography } from "@mui/joy";



function NovoVideo(){

    // Puxando Contextos necessários
    const { categorias } = useCategoriasContext()
    let { adicionarVideo } = useVideosContext();   

    const [titulo, setTitulo] = useState("")
    const [link, setLink] = useState("")
    const [capa, setCapa] = useState("")
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")

    function limparCampos(){
        setTitulo("");
        setLink("");
        setCapa("");
        setDescricao("");
        setCategoria("");
    }
    
    
    return(
        <>
        <form 
            className={styles.container}
            onSubmit={(evento) => {
                evento.preventDefault();

                adicionarVideo({
                                    id: uuidv4(),
                                    titulo: titulo,
                                    link: link,
                                    capa: capa,
                                    categoria: categoria,
                                    descricao: descricao
                                    });
                limparCampos();
            }}
            >
            <Typography
                level="h2" 
                textColor="white"
            >
                Novo Vídeo
            </Typography>
            <Input 
                className={styles.titulo}
                placeholder="Título"
                value={titulo}
                onChange={(evento) => {setTitulo(evento.target.value)}}
            />
            <Input 
                className={styles.link}
                placeholder="Link do vídeo"
                value={link}
                onChange={(evento) => {setLink(evento.target.value)}}
            />
            <Input 
                className={styles.capa}
                placeholder="Link da imagem de capa do vídeo"
                value={capa}
                onChange={(evento) => {setCapa(evento.target.value)}}
            />

            <ListaSuspensa
                className={styles.ListaSuspensa} 
                categorias={categorias.map((categoria) => categoria.nome)}
                aoAlterado={valor => setCategoria(valor)}
                valor={categoria}
                
            />

            <Textarea
                className={styles.descricao} 
                placeholder="Descrição" 
                variant="soft"  
                minRows={6}
                maxRows={6}
                value={descricao}
                onChange={(evento) => {setDescricao(evento.target.value)}}
            />

            <div className={styles.botoes}>
                <Button
                    className={styles.botaoSalvar}
                    type="submit"
                >Salvar</Button>

                <Button
                    className={styles.botaoLimpar}
                    variant="soft"
                    onClick={()=> limparCampos()}
                >Limpar</Button>
            </div>
        </form>

        <Rodape />
        </>
    )
}

export default NovoVideo;