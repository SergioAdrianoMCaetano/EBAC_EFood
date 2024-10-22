import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import Categories from './pages/Categories'

import Restaurantes from './pages/Restaurantes'

import Entregas from './pages/Entregas'

import Pagamentos from './pages/Pagamentos'

import Finalizar from './pages/Finalizar'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/restaurantes/:id" element={<Restaurantes />} />
    <Route path="/entrega" element={<Entregas />} />
    <Route path="/pagamentos" element={<Pagamentos />} />
    <Route path="/finalizar" element={<Finalizar />} />
  </Routes>
)

export default Rotas
