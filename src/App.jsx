import { createBrowserRouter, Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { RouterProvider } from 'react-router'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {

  const Layout = () => {
    return (
      <>
        <Header />
        <div className='pageContainer'>
          <Outlet />
        </div>
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
