
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../App";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Root.module.css';

const Root = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${styles.pages} ${theme === 'dark' ? styles.pagesDark: ''}`}>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root