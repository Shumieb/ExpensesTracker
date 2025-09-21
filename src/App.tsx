import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout';
import Home from './pages/home';
import About from './pages/about';
import Expenses from './pages/expenses';
import Dashboard from './components/dashboard';
import Transactions from './components/transactions';
import Profile from './components/profile';

function App() {

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
          path: "/expenses",
          element: <Expenses />,
          children: [
            {
              path: "/expenses/",
              element: <Dashboard />
            },
            {
              path: "/expenses/transactions",
              element: <Transactions />
            },
            {
              path: "/expenses/profile",
              element: <Profile />
            }
          ]
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
