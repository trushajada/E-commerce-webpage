import './App.css'
import About from './Componets/About/About'
import Darkmode from './Componets/Darkmode/Darkmode'
import Hero from './Componets/Hero/Hero'
import Navbar from './Componets/Navbar/Navbar'
import Orderproduct from './Componets/orderproduct/orderproduct'
import Product from './Componets/Product/Product'
import Testimonials from './Componets/Testimonials/Testimonials'
import Winter from './Componets/Winter/Wnter'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Product/>
      <Orderproduct/>
      <Winter/>
      <About/>
      <Testimonials/>
    </>
  )
}

export default App
