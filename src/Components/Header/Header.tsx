
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header >
            <nav className={styles.navigation}>
                <ul>
                    <li><NavLink className={({isActive}) => isActive? styles.active:styles.notactive} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive? styles.active:styles.notactive} to="/portfolio">PortfolioPage</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive? styles.active:styles.notactive} to="/contact">ContactPage</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header