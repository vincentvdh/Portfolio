import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { AiFillBulb } from "react-icons/ai";
import styles from './SwitchContent.module.css';

const SwitchContext = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div className={styles.switch}>
            {theme === 'dark' ?
                <button onClick={() => { setTheme('light') }}><AiFillBulb className={styles.switchIcon} /></button>
                :
                <button onClick={() => { setTheme('dark') }}><AiFillBulb className={styles.switchIconDark} /></button>
            }
        </div>
    )
}

export default SwitchContext