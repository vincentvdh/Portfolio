
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import styles from './Footer.module.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.containerDark: ''}`}>

      <h3>©Copyright 2022</h3>
      <h3>Vincent Van den Heuvel </h3>
      <h3>info?</h3>
    </div>
  )
}

export default Footer