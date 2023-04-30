import JokeAPI from '../../Components/API/JokeAPI/JokeAPI';
import Chart from '../../Components/Chart/Chart';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <main>
                <h1> Home</h1>
                <div className={styles.section}>
                    <div>
                        <img src="/Pasfoto.png" alt="Pasfoto" title='Pasfoto Vincent' />
                    </div>
                    <div className={styles.info}>
                        <h3>Hallo!<br />Mijn naam is Vincent Van den Heuvel. <br />Hieronder vertel ik graag wat meer over mezelf:</h3>
                        <p>Ik ben geboren op 17 maart 1999, dat maakt mij nu 23 jaar.<br />
                            Mijn verblijfplaats is gelegen in Merksem (Antwerpen)<br />
                            Aan de AP Hogeschool Antwerpen heb ik de graduaatopleiding Programmeren gevolgd.<br />
                            In mijn (programmeer)taken werk ik steeds zo nauwkeurig mogelijk.<br />
                            Het vraagt me hierdoor iets meer tijd om mijn doelen af te werken, wat als een zwakker punt kan worden gezien. <br />
                            Het feit dat ik me wil inzetten om een goed en kwaliteitsvol resultaat neer te zetten, zie ik echter als een pluspunt. </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <JokeAPI />
                    <div>
                        <p>Zoals je op de grafiek kan terugvinden ligt mijn kennis van de programmeer talen heel verspreid <br />
                            Hoewel AP ons een goeie basis geeft van verschillede talen kan ik mij het beste terugvinden in die talen. <br />
                            Je merkt ook snel op dat ik meer bezig ben met JS en TS dit komt omdat mijn interesse daar meer ligt.</p>
                    </div>
                    <Chart />
                </div>
            </main>
        </>
    )
}

export default HomePage