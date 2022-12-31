import styles from "./Slot.module.css"
let images = [
  require("./Images/cherry.png"),
  require("./Images/lemon.png"),
  require("./Images/melon.png"),
  require("./Images/prune.png"),
  require("./Images/seven.png")
]
interface SlotProp {
  value: number;
}
const Slot = ({ value }: SlotProp) => {
  return (
    <>
      <img src={images[value]} alt="slot" width={100} className={styles.slot} />
    </>
  )
}

export default Slot