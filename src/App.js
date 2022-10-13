import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { BarraNav } from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <BarraNav/>
      <Routes>
        <Route exact path= "/" element = {<ItemListContainer/>} />
        <Route exact path= "/category/:id" element = {<ItemListContainer/>} />
        <Route exact path= "/item/:id" element = {<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
