import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = ({ hasAsides }) => {
  const [products, setProducts] = useState()
  useEffect(() => {
    const getProducts = async () => {
      let data = await fetch('https://shoppingcart-53af7-default-rtdb.firebaseio.com/.json')
      data = await data.json()
      setProducts(data)
      console.log(products)
    }
    getProducts()
  }, [])

  return (
    <>
      <div className='col-12 col-md-6'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {Object.keys(products).map(product => {
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
                      <h5 className='card-title'>{price}</h5>
                      <p className='card-text'>{description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
