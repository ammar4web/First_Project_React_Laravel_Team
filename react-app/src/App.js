import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import EditProduct from './components/edit.component';
import CreateProduct from './components/create.component';
import ProductList from './components/list.component'

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to={"/"} className = 'navbar-brand'>Products</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/product/create"} className="nav-link active">Create</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Routes>
        <Route path='/product/create' element={<CreateProduct />}></Route>
        <Route path='/product/edit/:id' element={<EditProduct />}></Route>
        <Route path='/' element={<ProductList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
