//Vamos a pintar todos los productos
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = ({}) => {
  const [products, setProducts] = useState({})
  const [contador, setContador] = useState(0)
  const [purshasedProduct, setPurshasedProduct] = useState({})

  useEffect(() => {
    const getProducts = async () => {
      let data = await fetch('https://shoppingcart-53af7-default-rtdb.firebaseio.com/productos/.json')
      data = await data.json()

      setProducts(data)
    }
    getProducts()
  }, [])

  useEffect(() =>{
    const postPurshaseOrder = async (data) =>{
      setPurshasedProduct(data)
      let result = await fetch('https://shoppingcart-53af7-default-rtdb.firebaseio.com/ordenCompra/.json',{
        method: 'POST',
        body:  JSON.stringify(data)
      })
    }  
  }, [])

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
                    <button className='btn btn-success' onClick={postPurshaseOrder(...product, contador)}>Agregar al carrito</button>
                    <div className='ms-5'>
                      <div className='text-center'><p className='text-center'>{contador}</p></div>
                      <button className='btn btn-primary w-50' onClick={() => setContador(contador + 1)}>+</button>
                      <button className='btn btn-secondary' onClick={() => setContador(contador - 1)}>-</button>
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
