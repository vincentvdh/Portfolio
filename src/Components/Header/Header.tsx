import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import SwitchContext from '../SwitchContext/SwitchContext';


const Header = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <header >
            {/* <nav className={`${styles.nav} ${mode == 'dark' ? styles.navDark: ''}`}> */}
            <nav className={`${styles.navigation} ${theme === 'dark' ? styles.navigationDark : ''}`}>
                <ul>
                    <li><NavLink className={({ isActive }: any) => isActive ? styles.active : styles.notactive} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }: any) => isActive ? styles.active : styles.notactive} to="/portfolio">PortfolioPage</NavLink></li>
                    <li><NavLink className={({ isActive }: any) => isActive ? styles.active : styles.notactive} to="/contact">ContactPage</NavLink></li>
                    <SwitchContext />
                </ul>

            </nav>
        </header>
    )
}

export default Header