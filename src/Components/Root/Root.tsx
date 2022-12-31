
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Root.module.css';

const Root = () => {
  return (
    <div className={styles.pages}>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root