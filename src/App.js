import 'bootstrap/dist/css/bootstrap.min.css';
import { BarraNav } from './components/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <article>
      <BarraNav/>
      <ItemListContainer/>
    </article>
  );
}

export default App;
