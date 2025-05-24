// test/TestCalculatorComponent.jsx
import React from 'react';
import { useCalculator } from '../hooks/useCalculator.js';

export function TestCalculatorComponent({ expression, onResult }) {
  const {
    input, operate, equal, percent, toggleSign, decimal, clear, display
  } = useCalculator();

  React.useEffect(() => {
    clear(); // aseguramos estado limpio

    for (const char of expression) {
      if (char === '+') operate('+');
      else if (char === '-') operate('-');
      else if (char === '*') operate('*');
      else if (char === '/') operate('/');
      else if (char === '%') percent();
      else if (char === '.') decimal();
      else if (char === '±') toggleSign();
      else if (char === 'C') clear();
      else if (!isNaN(char)) input(char);
    }

    equal(); // calcula el resultado
    onResult(display);
  }, [expression]);

  return <div>{display}</div>;
}
