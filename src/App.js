import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "./TelaInicial";
import TabelaCarrinho from "./TabelaCarrinho";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaInicial/>}/>
          <Route path='/carrinho' element={<TabelaCarrinho/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
