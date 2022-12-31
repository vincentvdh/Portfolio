import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div>
            <h2>Mijn excuses maar de pagina die u wou bereiken bestaat niet.</h2>
            <h3>Onderstaande pagina's zijn echter wel bereikbaar</h3>
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default PageNotFound