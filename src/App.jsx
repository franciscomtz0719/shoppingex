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
import Carrito from './Pages/Carrito'
import Historial from './Pages/HistorialCompras'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')
  const toggle = () => setIsOpen(!isOpen)
  const [purchasedProduct, setPurchasedProduct] = useState([])

  const linkHandler = event => {
    const route = event.target.name
    setSelectedRoute(route)
    // console.log(route)
  }

  const addProduct = product =>{
    setPurchasedProduct([...purchasedProduct,product])
  }

  // console.log (purshasedProduct)

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
              <Link to='/historial' className='nav-link'> Historial de compras</Link>
            </NavItem>
            <NavItem>
              <Link to='/carrito' className='nav-link'> Carrito de compras</Link>
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
            <Route path='/products' element={<Products hasAsides={true} addProduct={addProduct}/>} />
            <Route path='/carrito' element={<Carrito purchasedProduct={purchasedProduct}/>} />
            <Route path='/historial' element={<Historial/>} />
            <Route
              path='/product-detail/:id'
              element={<ProductDetail />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
