//Vamos a pintar todos los productos
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = ({addProduct}) => {
  const [products, setProducts] = useState({})
  const [cantidad, setCantidad] = useState(0)
  

  useEffect(() => {
    const getProducts = async () => {
      let data = await fetch('https://shoppingcart-53af7-default-rtdb.firebaseio.com/productos/.json')
      data = await data.json()

      setProducts(data)
    }
    getProducts()
  }, [])

  

  const agregarCantidad = event =>{
setCantidad(event.target.value)
  }

  return (
    <>
      <div className='col-12'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          {Object.keys(products).map(product => {
            const {
              title,
              price,
              description,
              photo
            } = products[product]
            return (
              <div className='col'>
                <div className='card'>
                  <Link to={`/product-detail/${product}`}>
                    <img src={photo} className='card-img-top' alt='...' />
                    <div className='card-body'>
                      <h5 className='card-title'>{title}</h5>
                      <h5 className='card-title'>{price}</h5>
                      <p className='card-text'>{description}</p>
                    </div>
                  </Link>
                  <div className='d-flex align-items-end'>
                    <button className='btn btn-success' onClick={()=>addProduct({...products[product], cantidad})}>Agregar al carrito</button>
                    <div className='ms-5'>
                      <div className='text-center'></div>
                      <input type='number' className='form-control' onChange={agregarCantidad} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
