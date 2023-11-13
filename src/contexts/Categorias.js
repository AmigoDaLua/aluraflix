import { createContext, useState, useContext} from "react";
import {v4 as uuidv4} from 'uuid';

// Criando um contexto + seu displayName
export const CategoriasContext = createContext();
CategoriasContext.displayName = "Categorias";


export default function CategoriasProvider({ children }){

    const [categorias, setCategorias] = useState([
        {
            "id": uuidv4(),
            "nome": "animação",
            "cor": "#49be25",
            "descricao": "Quem não adora um bom desenho animado?"
    
        },
        {
            "id": uuidv4(),
            "nome": "terror",
            "cor": "#582699",
            "descricao": "Monstros, Medos & Pavor: isso sim é terror!"
    
        },
        {
            "id": uuidv4(),
            "nome": "drama",
            "cor": "#BF0B5B",
            "descricao": "Não tá fácil pra ninguém, mas a gente vai levando..."
    
        }
    ]);

    return(
        <CategoriasContext.Provider
        value={{categorias, setCategorias}}>
            {children}
        </CategoriasContext.Provider>
    )
}

// export function mudarCorCategoria(cor, id){
//         setCategorias(categorias.map(categoria =>{
//             if (categoria)
//         }))
//     }



export function useCategoriasContext(){
    const { categorias, setCategorias } = useContext(CategoriasContext);

    function adicionarCategoria(novaCategoria){    

        let novaLista = [...categorias, novaCategoria];  
        return setCategorias(novaLista);
    }

    function mudarCorDaCategoria(cor, id){
        setCategorias(categorias.map(time => {
          if (time.id === id){
            time.cor = cor;
          }
          return time;
        }))
      }
    
    
return { categorias,
        mudarCorDaCategoria,
        adicionarCategoria
        }

}