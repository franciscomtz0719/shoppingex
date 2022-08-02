//el datelle de cada producto
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Products from '../Products'

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState({})
  const params = useParams()
  console.log(params)
  const { id } = useParams()
  console.log(id)

  const navigate = useNavigate()
  useEffect(() => {
    const getProductById = async () => {
      let result = await fetch(`https://shoppingcart-53af7-default-rtdb.firebaseio.com/productos/${id}/.json`)
      result = await result.json()
      console.log(result)
      setSelectedProduct(result)
    }
    getProductById()
  }, [])

  const { photo, title, description, price } = selectedProduct
  const goBackHandler = () => {
    navigate('/')
  }
  return (
    <>
      <h1>Product detail</h1>
      <div className='btn btn-primary' onClick={goBackHandler}>
        Volver al home
      </div>
      <div className='card'>
        <img src={photo} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'></p>

          <p className='card-text'>{price}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
