import { useState } from "react";

const Ejercicio04 = () => {
    //variables
    let numero = 0;
    //hooks
    const [texto, setTexto] = useState('Bienvenido a UTSH');
    //funciones
    const saludar = ()=>{
        setTexto('Hola Alexander')
    }
    const despedir = ()=>{
        setTexto('Adios Alexander')
    }
    const reiniciar = ()=>{
        setTexto('Bienvenido a UTSH')
    }
    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className="h4 mt-4"> Ejercicio 4 - Saludar</h2>
                    <hr />
                </div>
                <div className="col-12 text-center">
                    <p className="h1">{texto}</p>
                    <div className="col-12 mb-5 gap-5">
                        <button className="btn btn-success fw-bold" onClick={saludar}>
                            Saludar
                        </button>
                        <button className="btn btn-success fw-bold ms-4" onClick={reiniciar}>
                            Reiniciar
                        </button>
                        <button className="btn btn-success fw-bold ms-4" onClick={despedir}>
                            Despedir
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ejercicio04
