import { useState } from 'react'
import Slot from './Slot';
import styles from "./SlotMachine.module.css"


const getRandomSlots = (numberOfSlots: number) => {

    let slotArr: number[] = [];
    for (let index = 0; index < numberOfSlots; index++) {
        slotArr.push(Math.floor(Math.random() * 5));

    }
    return slotArr;
}

interface SlotMachineProps {
    slots: number;
}
const SlotMachine = ({ slots: amountOfSlots }: SlotMachineProps) => {
    const [slots, setSlots] = useState<number[]>(getRandomSlots(amountOfSlots))
    const [money, setMoney] = useState<number>(10)



    const isWinning = () => {
        return slots.every((slot) => slot === slots[0])

    }
    const pullLever = () => {
        setSlots(getRandomSlots(amountOfSlots));
        if (isWinning()) {
            setMoney(money => money + 20)
        } else {
            setMoney(money => money - 1)
        }
    }
    return (
        <div>
            {money > 0 && <div>Saldo:  € {money}</div>}
            {money === 0 && <div>Je bent bankroet</div>}
            <div>

                <button className={styles.lever} onClick={pullLever} disabled={money <= 0 ? true : false}>Pull Lever</button>
                {
                    slots.map((slot, i) => <Slot value={slot} key={i} />)
                }
            </div>

        </div>
    )
}

export default SlotMachine