import { useState } from 'react'

const ColorBox = () => {
  const [color, setColor] = useState<number>(0);

  const Kleuren: string[] = ["red", "orange", "yellow", "green", "blue"];


  const handleNext = () => {
    setColor((color + 1) % Kleuren.length)

  }

  return (
    <>

      {<div style={{ backgroundColor: Kleuren[color], height: '200px', width: '200px', minHeight: '100%', content: "" }}></div>}
      <button onClick={handleNext}>Next Color</button>

    </>
  )
}

export default ColorBox;
