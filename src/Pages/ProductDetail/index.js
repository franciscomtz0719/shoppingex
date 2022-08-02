import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState({})
  const params = useParams()
  console.log(params)
  const { id } = useParams()

  const navigate = useNavigate()
  useEffect(() => {
    const getProductById = async () => {
      let result = await fetch(`https://fakestoreapi.com/products/${id}`)
      result = await result.json()
      setSelectedProduct(result)
    }
    getProductById()
  }, [])
  const { image, title, description, category, rating, price } = selectedProduct
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
        <img src={image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>{category}</p>

          <p className='card-text'>{price}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
