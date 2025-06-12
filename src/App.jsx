import ButtonComponent from "./components/ButtonComponent"
import ComponentNew from "./components/ComponentNew"
import Ejercicio01 from "./components/ejercicio01"
import { Ejercicio02 } from "./components/Ejercicio02"
import Ejercicio03 from "./components/Ejercicio03"
import Ejercicio04 from "./components/Ejercicio04"

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
        <Ejercicio02/>
        <Ejercicio03/>
        <Ejercicio04/>
      </div>
    </>

  )
}

export default App
