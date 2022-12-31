import React, { useState } from 'react'

const Counter = () => {
    const [counters, setCounters] = useState<number[]>([0]);


    const addCounter = () => {
        setCounters([...counters, 0])
    }
    const increaseCounter = (index: number) => {
        setCounters(counters.map((counter, i) => i === index ? counter + 1 : counter))
    }
    const decreaseCounter = (index: number) => {
        setCounters(counters.map((counter, i) => i === index ? counter - 1 : counter))
    };

    return (
        <React.Fragment>
            {counters.map((counter, index) => {
                let color = "black";
                if (counter > 0) {
                    color = "green"
                }
                else if (counter < 0) {
                    color = "red"
                }
                return (
                    <div
                        key={index}
                        style={{ display: "flex", flex:1,flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <button onClick={() => increaseCounter(index)}>Omhoog</button>
                        <div style={{color:color}}>Count: {counter}</div>
                        <button onClick={() => decreaseCounter(index)}>Omlaag</button>
                    </div>
                )
            })}
            <div> Som van de tellers {counters.reduce((prev,curr) => prev+curr,0)}</div>
            <button onClick={addCounter}>Voeg teller toe</button>
        </React.Fragment>
    )
}

export default Counter