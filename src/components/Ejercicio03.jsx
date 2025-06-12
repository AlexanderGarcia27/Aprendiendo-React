import { useState } from "react";

const Ejercicio03 = () => {
    //variables
    let numero = 0;
    //hooks
    const [numerito, setNumerito] = useState(0);
    //funciones
    const contador = ()=>{
        setNumerito(numerito +1)
    }
    const restar = ()=>{
        setNumerito(numerito -1)
    }
    const reiniciar = ()=>{
        setNumerito(0)
    }
    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className="h4 mt-4"> Ejercicio 3 - Contador - Funciones </h2>
                    <hr />
                </div>
                <div className="col-12 text-center">
                    <p className="h1">{numerito}</p>
                    <div className="col-12 mb-5 gap-5">
                        <button className="btn btn-success fw-bold" onClick={contador}>
                            Sumar
                        </button>
                        <button className="btn btn-success fw-bold ms-4" onClick={reiniciar}>
                            Reiniciar
                        </button>
                        <button className="btn btn-success fw-bold ms-4" onClick={restar}>
                            Restar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ejercicio03
