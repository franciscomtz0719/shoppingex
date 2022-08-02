import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aside1 from '../../Components/Aside1'

const Products = ({ hasAsides }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      let productsList = await fetch('https://fakestoreapi.com/products')
      productsList = await productsList.json()
      setProducts(productsList)
    }
    getProducts()
  }, [])

  return (
    <>
      {hasAsides && <Aside1 />}
      <div className='col-12 col-md-6'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {products.map(product => {
            const {
              title,
              price,
              description,
              category,
              image,
              rating,
              id
            } = product
            return (
              <div className='col'>
                <Link to={`/product-detail/${id}/test`}>
                  <div className='card'>
                    <img src={image} className='card-img-top' alt='...' />
                    <div className='card-body'>
                      <h5 className='card-title'>{title}</h5>
                      <p className='card-text'>{description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      {hasAsides && <Aside1 />}
    </>
  )
}

export default Products
