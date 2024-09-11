import CreateProduct from './Component/Route/CreateProduct'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
     <Routes>
         <Route path="/createproduct" element={<CreateProduct/>}/>
     </Routes>
    </>
  )
}

export default App
