import { Square } from "./Square.jsx"
import { Button } from './Button.jsx'
import { TURNS } from "../constants.js"


export const Turns = ({ turn, resetGame }) => {
  return (
    <section className='turn'>
      <Square color="red" isSelected={turn == TURNS.X}>
        {TURNS.X}
      </Square>
      <Button resetGame={resetGame} />
      <Square color="blue" isSelected={turn == TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  )
}