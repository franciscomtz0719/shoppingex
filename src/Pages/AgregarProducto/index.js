// agregar productos desde el formulario
 
const NuevoProducto = () => {
  return (
    <>
      <h1>Nuevo Producto</h1>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <form action='' className='bg-dark text-white p-3 border rounded'>
              <div className='form-group'>
                <label htmlFor=''>Nombre:</label>
                <input
                  type='text'
                  className='form-control'
                  name='nombre'
                 
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Correo</label>
                <input
                  type='text'
                  className='form-control'
                  name='email'
                 
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Generación</label>
                <input
                  type='text'
                  className='form-control'
                  name='generacion'
                 
                />
              </div>
              <button
                className='btn btn-success mt-3 ms-auto'
                
                type='button'
              >
                Guardar Koder
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
