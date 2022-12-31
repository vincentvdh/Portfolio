import HomePage from './Pages/HomePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import Root from './Components/Root/Root';
import ContactPage from './Pages/ContactPage/ContactPage';
import DetailPagineComponent from './Pages/DetailPaginaComponent/DetailPagineComponent';
import PageNotFound from './Pages/PageNotFound/PageNotFound';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "portfolio",
          element: <PortfolioPage />
        },
        {
          path: "portfolio/:id",
          element: <DetailPagineComponent/>
        },
        {
          path: "contact",
          element: <ContactPage />
        },{
          path: "*",
          element: <PageNotFound/>
      }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
