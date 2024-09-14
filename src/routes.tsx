import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import Categories from './pages/Categories'

import Restaurantes from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/restaurantes/:id" element={<Restaurantes />} />
  </Routes>
)

export default Rotas
