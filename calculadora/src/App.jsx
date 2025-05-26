import './App.css'
import Display from './components/Display'
import Keypad from './components/Keypad'
import { useCalculator } from './hooks/useCalculator'

function App () {
  const {
    display, input, operate, equal,
    decimal, clear
  } = useCalculator()

  const handleClick = key => {
    if (!isNaN(key)) return input(key)
    if (key === '.') return decimal()
    if (key === '+/-') return // toggleSign deshabilitado
    if (key === 'C') return clear()
    if (key === '=') return equal()
    if (key === 'mod') return operate('%')
    if (['+', '-', '*', '/'].includes(key)) return operate(key)
  }

  return (
    <div className='app-container'>
      <div className='calculator'>
        <Display value={display} />
        <Keypad onClick={handleClick} />
      </div>
      <a
        className='github-button'
        href='https://github.com/JosFer720/calculadora-web'
        target='_blank'
        rel='noopener noreferrer'
      >
        Repositorio
      </a>
    </div>
  )
}

export default App
