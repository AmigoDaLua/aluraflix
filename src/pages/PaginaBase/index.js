import { Container } from "@mui/joy";
import Banner from "../../components/Banner";
import styles from "./PaginaBase.module.css"
import { Outlet } from "react-router-dom";
import CategoriasProvider from "../../contexts/Categorias";
import VideosProvider from "../../contexts/Videos";
import Rodape from "../../components/Rodape";

function PaginaBase(){
    return(
        <main>
            <Banner />
            <CategoriasProvider>
                <VideosProvider>
                
                    <Outlet />
                    
                </VideosProvider>
            </CategoriasProvider>
        </main>
    )
}

export default PaginaBase;