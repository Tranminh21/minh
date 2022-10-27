import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Abouts } from "./pages/Abouts"
import { Navbar } from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCartProvider } from "./context/ShoppingCartContext"




function App() {
  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<Abouts />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
   </>
  )
}

export default App