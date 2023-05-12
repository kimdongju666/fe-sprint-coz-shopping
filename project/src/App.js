import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import BookMark from './pages/BookMark';
import Home from './pages/Home';
import Header from './component/Header';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
