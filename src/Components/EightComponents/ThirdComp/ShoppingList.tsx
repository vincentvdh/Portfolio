import React, { useState } from 'react'
import styles from "./ShoppingList.module.css"

interface shoppingListItem {
    name: string;
    quantity: number;
}
const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState<shoppingListItem[]>([])

    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [succesMessage, setSuccesMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    }
    const handleQuantity: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setQuantity(parseInt(event.target.value));
    }


    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (quantity < 1) {
            setErrorMessage("Een boodschap zonder hoeveelheid bestaat niet!")
            setSuccesMessage("")
        }
        else if (name === "") {
            setErrorMessage("Een naamloze boodschap bestaat niet!")
            setSuccesMessage("")
        }
        else {
            setShoppingList([...shoppingList, { name: name, quantity: quantity }])

            setSuccesMessage(name + " is toegevoegd aan de boodschappenlijst")
            setErrorMessage("")
        }

    }
    const removeItem = (index: number) => {
        let shoppingListCopy = shoppingList.filter((item, i) => i !== index);
        setShoppingList(shoppingListCopy);
        setSuccesMessage("Item is verwijderd van de boodschappenlijst")
        setErrorMessage("")
    }

    return (
        <React.Fragment>

            {errorMessage && <div className={styles.error}>
                {errorMessage}
            </div>}
            {succesMessage && <div className={styles.succes}>
                {succesMessage}
            </div>}
            <div className={styles.shoppingAddForm}>
                <label >Naam:</label>
                <input type="text" placeholder='Name' value={name} onChange={handleName} />
                <label>Hoeveelheid:</label>
                <input type="number" placeholder='0' value={quantity} onChange={handleQuantity} />
                <button onClick={handleAdd}>Toevoegen</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Hoeveelheid</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map((item, index) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td><button onClick={() => removeItem(index)}>Remove</button></td>
                        </tr>
                    )}

                </tbody>
            </table>

        </React.Fragment>
    )
}

export default ShoppingList