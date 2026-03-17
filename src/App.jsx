
import './App.css'
import Fotter from './Componant/Fotter'
import Heading from './Componant/Heading'
import Cart from './Componant/Pages/Cart'

import Products from './Componant/Pages/Products'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {


  return (
    <>
    <BrowserRouter>
    <Heading/>
    <Routes>
      <Route path='/' element={<Products></Products>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    
    </Routes>
<Fotter/>
    </BrowserRouter>
    </>
  )
}

export default App
