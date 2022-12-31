import { useEffect, useState } from 'react';
import styles from './JokeAPI.module.css';

interface Joke {
    id: string,
    joke: string,
    status: number
}
const JokeAPI = () => {
    const [joke, setJoke] = useState("")

    const loadJoke = async () => {
        let response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });
        let joke: Joke = await response.json();
        setJoke(joke.joke)
    }
    useEffect(() => {
        loadJoke();
    }, [])


    return (
        <div className={styles.jokes}>
            <h4>Klein weetje</h4>
            <p>Ik vind moppen geweldig daarom dat ik jullie een willekeurige mop wil vertellen</p>
            <div>{joke}</div>
        </div>
    )
}

export default JokeAPI