import { useState } from 'react'

export function useCalculator () {
  const [display, setDisplay] = useState('0')
  const [prev, setPrev] = useState(null)
  const [op, setOp] = useState(null)
  const [reset, setReset] = useState(false)

  const input = val => {
    if (reset) {
      setDisplay(val)
      setReset(false)
    } else if (display.length < 9) {
      setDisplay(display === '0' ? val : display + val)
    }
  }

  const operate = nextOp => {
    console.log('perate llamada con:', nextOp)
  
    const current = parseFloat(display)
  
    if (prev !== null && op && !reset) {
      const result = calculate(prev, current, op)
      setDisplay(result)
      setPrev(result === 'ERROR' ? null : parseFloat(result))
    } else if (!reset) {
      setPrev(current)
    }
  
    setOp(nextOp)
    setReset(true)
  }
  

  const calculate = (a, b, operation) => {
    let res
    if (operation === '+') res = a + b
    if (operation === '-') res = a - b
    if (operation === '*') res = a * b
    if (operation === '/') res = b === 0 ? 'ERROR' : a / b
    if (operation === '%') res = a % b
    if (res === 'ERROR' || isNaN(res)) return 'ERROR'
    return res.toString().slice(0, 9)
  }

  const equal = () => {
    if (op && prev !== null) {
      const result = calculate(prev, parseFloat(display), op)
      setDisplay(result)
      setPrev(null)
      setOp(null)
      setReset(true)
    }
  }

  const decimal = () => {
    if (!display.includes('.') && display.length < 9) {
      setDisplay(display + '.')
    }
  }

  const toggleSign = () => {
    if (display === '0') return
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)
  }

  const clear = () => {
    setDisplay('0')
    setPrev(null)
    setOp(null)
    setReset(false)
  }

  const percent = () => {
    const current = parseFloat(display)
    let result

    if (op && prev !== null) {
      const percentage = (prev * current) / 100
      result = calculate(prev, percentage, op)
      setDisplay(result)
      setPrev(null)
      setOp(null)
    } else {
      result = (current / 100).toString().slice(0, 9)
      setDisplay(result)
    }

    setReset(true)
  }

  return {
    display,
    input,
    operate,
    equal,
    decimal,
    toggleSign,
    clear,
    percent
  }
}
