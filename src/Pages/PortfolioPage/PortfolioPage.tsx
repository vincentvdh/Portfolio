import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import styles from './Portfolio.module.css';

const PortfolioPage = () => {
  const [search, setSearch] = useState<string>("");
  const [getal, setGetal] = useState<number>(1)
  const { theme } = useContext(ThemeContext)

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <main className={styles.page}>
        {/*<div className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}>*/}
        <h1>PortFolioPage</h1>
        <div className={styles.searchbalk}>
          <input type="text" placeholder='Search' value={search} onChange={handleSearch} /> <button>search</button>
        </div>
        <div className={`${styles.seperate} ${theme === 'dark' ? styles.seperateDark: ''}`}>

          <article><Link to="/portfolio/1" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>Kleuren Selectie</h3> <p>We gaan bij deze oefening gebruik maken van Kleuren die we in een array gaan steken om vervolgens weer te geven.</p></Link></article>
          <article><Link to="/portfolio/2" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>Slotmachine</h3> <p>Bij deze oefening hebben we slim gebruik gemaakt van useStates en functies om een werkende slotmachine te bouwen. <br />(geen zorgen dit werkt niet met echt geld)</p></Link></article>
          <article><Link to="/portfolio/3" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>ShoppingList</h3> <p>Een boodschappenlijst is heel handig in het dagelijkse leven. We hebben een oefening gemaakt zodat we onze boodschappen kunnen bijhouden.</p></Link></article>
          <article><Link to="/portfolio/4" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>Filtering</h3> <p>Hier gaan we de manieren om te filteren eens overlopen in een lijstje.</p></Link></article>
          <article><Link to="/portfolio/5" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>Counter</h3> <p>Een kleinere oefening maar heel interessante oefening om door een lijstje van counters te lopen.</p></Link></article>
          <article><Link to="/portfolio/6" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>Colorbox</h3> <p>Door 5 Kleuren van de regenboog blijven loopen is ook een kleienere oefening maar wat erachter zit heeft mij geholpen met logisch nadenken.</p></Link></article>
          <article><Link to="/portfolio/7" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>Calculator</h3> <p>In het dagelijkse leven word een rekenmachine heel vaak gebruikt daarom dat we zelf een kleine versie hebben gemaakt.</p></Link></article>
          <article><Link to="/portfolio/8" className={`${styles.link} ${theme === 'dark' ? styles.linkDark: ''}`}><h3>TodoList</h3> <p>Een TodoList wordt ook vaak gebruikt hier heb ik vooral uit geleerd hoe componenten gesplitst kunnen worden en hoe er data kan doorgegeven worden.</p></Link></article>

        </div>

      </main>
    </>
  )
}

export default PortfolioPage