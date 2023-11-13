import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    // Desconstruindo o resultado de useLocation()
    // para pegarmos somente o <pathname>
    const { pathname } = useLocation();

    // Utilizando outro gancho para mover a janela
    // para o topo quando o <pathname> for alterado:
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}