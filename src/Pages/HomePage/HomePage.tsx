import React, { useState } from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [leeftijd, setLeeftijd] = useState<number>(23)                //Extra moet niet leek me leuk
    return (
        <>
            <main>
                <h1> HomePage</h1>
                <div className={styles.section}>
                    <div>
                        <img src="/Pasfoto.png" alt="Pasfoto" title='Pasfoto Vincent' />
                    </div>
                    <div className={styles.info}>
                        <h3>Hallo!<br />Mijn naam is Vincent Van den Heuvel. <br />Hieronder vertel ik graag wat meer over mezelf:</h3>
                        <p>Ik ben geboren op 17 maart 1999, dat maakt mij nu {leeftijd} jaar.<br />
                            Mijn verblijfplaats is gelegen in Merksem (Antwerpen)<br />
                            Aan de AP Hogeschool Antwerpen heb ik de graduaatopleiding Programmeren gevolgd.<br />
                            In mijn (programmeer)taken werk ik steeds zo nauwkeurig mogelijk.<br />
                            Het vraagt me hierdoor iets meer tijd om mijn doelen af te werken, wat als een zwakker punt kan worden gezien. <br />
                            Het feit dat ik me wil inzetten om een goed en kwaliteitsvol resultaat neer te zetten, zie ik echter als een pluspunt. </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <div>
                        <p>API Joke</p>
                    </div>
                    <div>
                        <p>Mijn punten liggen vrij verspreid. Ap heeft ons een basis van alles gegeven maar ik kan nog veel bijleren.</p>
                    </div>
                    <div>
                        <p> staafdiagram </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage