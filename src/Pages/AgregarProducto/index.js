// agregar productos desde el formulario
//  import { useState } from "react"
 import { useForm } from "react-hook-form";

const NuevoProducto = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = async data => {
    console.log(data)
      let result = await fetch("https://shoppingcart-53af7-default-rtdb.firebaseio.com/productos/.json", {
      method: 'POST',
      body:  JSON.stringify(data)
    })
    window.alert("El producto fue agregado con exito!")
  }

  return (
    <>
      <h1>Agregar productos</h1>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-dark text-white p-3 border rounded'>
              <div className='form-group'>
                
                <label htmlFor=''>Titulo</label>
                <input
                  type='text'
                  className='form-control'
                  name='titulo'
                  {...register("title", {required:true, minLength:3})}/>
                  {errors.title?.type === 'required' && "El titulo, es requerido"}
                  {errors.title?.type === 'minLength' && "El titulo debe ser mayor a 3 caracteres"}
                 
              </div>
              <div className='form-group'>
                <label htmlFor=''>Imagen</label>
                <input
                  type='text'
                  className='form-control'
                  name='imagen'
                  {...register("photo", {required:true})}/>
                  {errors.photo?.type === 'required' && "La foto es requerida"}
               
              </div>
              <div className='form-group'>
                <label htmlFor=''>Precio</label>
                <input
                  type='text'
                  className='form-control'
                  name='precio'
                  {...register("price", {required:true})}/>
                  {errors.price?.type === 'required' && "El precio es requerido"}
                 
              </div>

              <div className='form-group'>
                <label htmlFor=''>Descripcion</label>
                <input
                  type='text'
                  className='form-control'
                  name='descripcion'
                  {...register("description", {required:true})}/>
                  {errors.description?.type === 'required' && "La descripcion es requerida"}
                 
              </div>

              <button className='btn btn-success mt-3 ms-auto' type='submit'>
                Guardar Producto
              </button>

            </form>
          </div>
          <div className='col-12 col-md-6 mt-3'>
            
          </div>
        </div>
      </div>
    </>

  )
}

export default NuevoProducto
