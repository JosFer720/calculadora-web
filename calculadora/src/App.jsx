import './App.css'
import Display from './components/Display'
import Keypad from './components/Keypad'
import { useCalculator } from './hooks/useCalculator'

function App () {
  const {
    display, input, operate, equal,
    decimal, toggleSign, clear, percent
  } = useCalculator()

  const handleClick = key => {
    if (!isNaN(key)) return input(key)
    if (key === '.') return decimal()
    if (key === '+/-') return toggleSign()
    if (key === 'C') return clear()
    if (key === '=') return equal()
    if (key === '%') return percent()
    if (['+', '-', '*', '/'].includes(key)) return operate(key)
  }

  return (
    <div className='calculator'>
      <Display value={display} />
      <Keypad onClick={handleClick} />
    </div>
  )
}

export default App
