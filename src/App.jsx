import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Home from './components/Home';
import ListaProdutos from './components/ListaProdutos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/produtos" element={<ListaProdutos />} />
            <Route exact path="/sobre" element={<Sobre />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;