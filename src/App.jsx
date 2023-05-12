import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className='container-fluid'>
      <Header></Header>
      <ItemListContainer greeting = "Pagina en mantenimiento :("></ItemListContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
