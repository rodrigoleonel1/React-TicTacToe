import { Button } from "./Button.jsx"
import { Square } from "./Square.jsx"

export function WinnerModal({ winner, resetGame }) {
    if (winner == null) return null
    const winnerText = winner == false ? 'Empate' : 'Ganador'

    let color = ''
    if (winner == "✕") color = "red"
    else if ((winner == "◯")) color = "blue"
    
    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>
                <header className='win'>
                    {winner && <Square color={color}>{winner}</Square>}
                </header>
                <footer>
                    <Button resetGame={resetGame} />
                </footer>
            </div>
        </section>
    )
}