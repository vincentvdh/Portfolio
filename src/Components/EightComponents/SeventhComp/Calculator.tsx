import React, { useState } from 'react'

const Calculator = () => {
    const [count1, setCount1] = useState<number>(1);
    const [count2, setCount2] = useState<number>(1);
    const [things, setThings] = useState<string>("+");
    const [calculate, setCalculate] = useState<number>(2);
    const [error, setError] = useState<string | undefined>();

    const Bereken: React.MouseEventHandler<HTMLButtonElement> = () => {
        setError(undefined)
        if (things === "+") {
            setCalculate(count1 + count2);
        }
        else if (things === "-") {
            setCalculate(count1 - count2);
        }
        else if (things === "*") {
            setCalculate(count1 * count2);

        }
        else {

            if (count2 === 0) {
                setError("cannot devide by zero");
            }
            else { setCalculate(count1 / count2); }

        }
    }

    const handleThings: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setThings(event.target.value)
    }
    const handleCoun1: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCount1(parseInt(event.target.value));
    }
    const handleCount2: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCount2(parseInt(event.target.value));
    }



    return (
        <>
            <div>
                <label >Number1</label>
                <input type="number" value={count1} onChange={handleCoun1} />
                <label >Number2</label>
                <input type="number" value={count2} onChange={handleCount2} />
                <select name="solver" id="solver" onChange={handleThings}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <button onClick={Bereken}>Calculate</button>
            </div>
            <div>
                {error ? <p style={{ color: "red" }}>Cannot devide by 0</p> : <p>Result = {calculate}</p>}
            </div>
        </>
    )
}

export default Calculator