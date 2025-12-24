import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'; 
import About from './Pages/About/About.jsx'; 
import Portofolio from './Pages/Portofolio/Portofolio.jsx';
import Contact from './Pages/Contact/Contact.jsx';



function App() {


  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portofolio' element={<Portofolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
