
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar><Hero></Hero></Navbar></>,
  //   },
  //   {
  //     path: "/about",
  //     element: <><Navbar><About></About></Navbar></>,
  //   },
  //   {
  //     path: "/Services",
  //     element: <><Navbar><Services></Services></Navbar></>,
  //   },
  //   {
  //     path: "/portfolio",
  //     element: <><Navbar><Portfolio></Portfolio></Navbar></>,
  //   },
  //   {
  //     path: "/contact",
  //     element: <><Navbar><Contact></Contact></Navbar></>,
  //   },
  // ]);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
