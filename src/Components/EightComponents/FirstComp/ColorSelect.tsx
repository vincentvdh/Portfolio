import React, { useState } from 'react';
import styles from './ColorSelect.module.css';

const ColorSelect = () => {
    const [selectedColors, setSelectedColors] = useState<string[]>(['']);
    const [color, setColor] = useState<string[]>(['']);

    const handleSelectedColors: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelectedColors([...Array.from(event.target.selectedOptions)].map(option => option.value));
    }
    const handleColor: React.MouseEventHandler<HTMLButtonElement> = () => {
        setColor([...selectedColors]);

    }


    return (
        <React.Fragment>
            <select id="cars" name="cars" onChange={handleSelectedColors} value={selectedColors} multiple>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button onClick={handleColor}>Add</button>
            
            <div className={styles.colorContainer}>
                {
                    color.map((kleur) =>(
                        <div style={{ backgroundColor: kleur, height: 200,flex: 1,}} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default ColorSelect