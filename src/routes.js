import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NovaCategoria from './pages/NovaCategoria';
import NovoVideo from './pages/NovoVideo';
import Player from './pages/Player';
import NaoEncontrada from './pages/NaoEncontrada';
import PaginaBase from './pages/PaginaBase';
import ScrollToTop from "./components/ScrollToTop"


function AppRoutes() {
  return (
    
    <BrowserRouter>
      <ScrollToTop />
      
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Home />}></Route>
            <Route path="novoVideo" element={<NovoVideo />}></Route>
            <Route path="novaCategoria" element={<NovaCategoria />}></Route>
            <Route path=":id" element={<Player />}></Route>
            <Route path="*" element={<NaoEncontrada />}></Route>
          </Route>
        </Routes>
      
    </BrowserRouter>
  

  )

}

export default AppRoutes;
