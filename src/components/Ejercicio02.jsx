export const Ejercicio02 = () => {
    //Logica del componente
    // 1. variable / constante
    // 2. hooks
    // 3. funciones
    const nombreProducto = 'Smart Tv 90'

    function agregarACarritoDeCompras() {
        console.log('El producto', nombreProducto, 'se agrego al carrito')
    }
    function eliminarDeCarritoDeCompras() {
        console.log('El producto', nombreProducto, 'se elimino del carrito')
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className="h4 mt-4"> Ejercicio 2 - Botones y funciones </h2>
                    <hr />
                </div>
                <div className="d-flex gap-5">
                    <button className="btn btn-outline-primary w-25" onClick={agregarACarritoDeCompras}>
                        <i className="bi bi-cart-check"></i>
                        <span className="ms-2">Agregar articulo</span>
                    </button>
                    <button className="btn btn-outline-danger w-25" onClick={eliminarDeCarritoDeCompras}>
                        <i className="bi bi-trash"></i>
                        <span className="ms-2">Eliminar articulo</span>
                    </button>
                </div>

            </div>
        </>
    )
}
