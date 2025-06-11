import ButtonComponent from "./components/ButtonComponent"
import ComponentNew from "./components/ComponentNew"
import Ejercicio01 from "./components/ejercicio01"

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">
              Hola UTSH
            </h1>
          </div>
        </div>
        {/**Mando llamar componente externo */}
        <Ejercicio01 />
        <ButtonComponent/>
        <ComponentNew/>
      </div>
    </>

  )
}

export default App
