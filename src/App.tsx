import HomePage from './Pages/HomePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import Root from './Components/Root/Root';
import ContactPage from './Pages/ContactPage/ContactPage';
import DetailPagineComponent from './Pages/DetailPaginaComponent/DetailPagineComponent';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import React, { useState } from 'react';

interface IThemeContext {
  theme: string,
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({ theme: 'light', setTheme: (theme: string) => { } });

const App = () => {
  const [theme, setTheme] = useState("light");
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
          element: <DetailPagineComponent />
        },
        {
          path: "contact",
          element: <ContactPage />
        }, {
          path: "*",
          element: <PageNotFound />
        }
      ]
    }
  ])


  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
