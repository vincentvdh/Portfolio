import { useParams } from 'react-router-dom';
import Lijst from '../../Components/EightComponents/EightComp/page/Lijst';
import Counter from '../../Components/EightComponents/FifthComp/Counter';
import ColorSelect from '../../Components/EightComponents/FirstComp/ColorSelect';
import Filtering from '../../Components/EightComponents/FourthComp/Filtering';
import SlotMachine from '../../Components/EightComponents/SecondComp/SlotMachine';
import Calculator from '../../Components/EightComponents/SeventhComp/Calculator';
import ColorBox from '../../Components/EightComponents/SixthComp/ColorBox';
import ShoppingList from '../../Components/EightComponents/ThirdComp/ShoppingList';

const DetailPagineComponent = () => {
  let { id } = useParams();
  let number = +id!;

  const Bepaling: any = () => {
    if (number === 1) {
      return <ColorSelect />
    }
    else if (number === 2) {
      return <SlotMachine slots={3} />
    }
    else if (number === 3) {
      return <ShoppingList />
    }
    else if (number === 4) {
      return <Filtering />
    }
    else if (number === 5) {
      return <Counter />
    }
    else if (number === 6) {
      return <ColorBox />
    }
    else if (number === 7) {
      return <Calculator />
    }
    else if (number === 8) {
      return <Lijst />
    }
    else {

      return <p>Het spijt me maar de detail pagina met id nummer {id} bestaat niet</p>
    }
  }
  return (
    <div>
      <h1>Detail Pagina</h1>
      <Bepaling />
    </div>
  )
}

export default DetailPagineComponent