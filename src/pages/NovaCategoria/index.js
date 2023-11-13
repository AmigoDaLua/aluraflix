import styles from "./NovaCategoria.module.css"
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Rodape from "../../components/Rodape";
import Banner from "../../components/Banner";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { useCategoriasContext } from "../../contexts/Categorias";


function NovaCategoria(){

    let { categorias, adicionarCategoria } = useCategoriasContext();

    // Variáveis do componente:
    const [nome, setNome] = useState("");
    const [cor, setCor] = useState("#000000");
    const [descricao, setDescricao] = useState("");

    // limpando os campos do form
    function limparCampos(){
        setNome("");
        setCor("");
        setDescricao("");
    }


    return(
        <>
            
                <form 
                    className={styles.container}
                    onSubmit={(evento) => {
                        evento.preventDefault();
                        adicionarCategoria({id: uuidv4(), nome: nome, descricao: descricao, cor: cor});
                        setNome("");
                        setCor("#000000");
                        setDescricao("");
                        console.log(categorias)
                    }}
                >
                    <h2 className={styles.titulo}>Nova Categoria</h2>
                    <Input
                        value={nome}
                        placeholder="Título" 
                        variant="soft"
                        onChange={evento => setNome(evento.target.value.toLowerCase())} 
                        required
                    />
                    <div className={styles.divCor}>
                    <label>Cor</label>
                    
                    <Input   
                        className={styles.cor} 
                        size="sm"
                        type="color"
                        onChange={evento => setCor(`${evento.target.value}`)}
                        value={cor}
                        required
                    />
                    </div>

                    <Textarea
                        className={styles.descricao} 
                        placeholder="Descrição" 
                        variant="soft"  
                        minRows={6}
                        maxRows={6}
                        value={descricao}
                        onChange={evento => setDescricao(evento.target.value)}
                        required
                    />

                    <div className={styles.botoes}>
                        <Button
                            type="submit"
                            className={styles.botaoSalvar}
                        >Salvar</Button>

                        <Button
                            onClick={limparCampos}
                            className={styles.botaoLimpar}
                            variant="soft"
                        >Limpar</Button>
                    </div> 
                </form>
            <Rodape />
        </>
    )
}

export default NovaCategoria;