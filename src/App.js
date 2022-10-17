import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { BarraNav } from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import { Contacto } from './components/contacto/Contacto';
import { Cuidados } from './components/cuidados/Cuidados';
import { ItemDetailContainer } from './components/pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <BarraNav/>
      <Routes>
        <Route exact path= "/" element = {<ItemListContainer/>} />
        <Route exact path= "/cuidados" element = {<Cuidados/>} />
        <Route exact path= "/contacto" element = {<Contacto/>} />
        <Route exact path= "/productos" element = {<ItemListContainer/>} />
        <Route exact path= "/productos/detalle/:id" element = {<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
