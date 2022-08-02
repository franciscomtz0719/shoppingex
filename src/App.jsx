import { useState } from 'react'
import './App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link, Routes, Route } from 'react-router-dom'
import Publicaciones from './Pages/Carrito'
import NuevoProducto from './Pages/AgregarProducto'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')
  const toggle = () => setIsOpen(!isOpen)

  const linkHandler = event => {
    const route = event.target.name
    setSelectedRoute(route)
    console.log(route)
  }

  return (
    <div className='App'>
      <Navbar expand='md' color='dark' container='xl' dark>
        <NavbarBrand href='/'>BookMarket</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/nuevo-producto' className='nav-link'> Agregar productos </Link>
            </NavItem>
            <NavItem>
              <Link to='/products' className='nav-link'> Productos </Link>
            </NavItem>
            <NavItem>
              <Link to='/publicaciones' className='nav-link'> Historial de compras</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <Routes>
            <Route path='/' element={<h1>bienvenido a nuestra app</h1>} />
            <Route path='/publicaciones' element={<Publicaciones />} />
            <Route path='/nuevo-producto' element={<NuevoProducto />} />
            <Route path='/products' element={<Products hasAsides={true} />} />
            <Route
              path='/product-detail/:id/:category'
              element={<ProductDetail />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
