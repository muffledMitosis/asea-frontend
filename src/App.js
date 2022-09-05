import { Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Main from './Pages/Main.js'
import NewProduct from './Pages/NewProduct.js';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/new-product' element={<NewProduct />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
