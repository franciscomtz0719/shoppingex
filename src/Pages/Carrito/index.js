import { useState } from "react"

const Carrito = ({purchasedProduct}) => {

  const [total, setTotal] = useState(0)
  
  return (

    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
        {purchasedProduct.map((product, index)=>{
          let {title, price, cantidad} = product
          const subtotal = price*cantidad
          return (<tr>
            <th scope="row">{index+1}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td>{cantidad}</td>
            <td>{subtotal}</td>
          </tr>) 
        })}
        </tbody>
      </table>
      <div>
        <h2>Total</h2>
        <h2>{total}</h2>
      </div>
      <button className="btn btn-success">Comprar</button>
    </>
  )
}

export default Carrito
