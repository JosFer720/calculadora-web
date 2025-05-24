import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useEffect } from 'react';
import { useCalculadora } from '../hooks/useCalculator';
import React from 'react';

function TestCalculatorComponent({ expression, onResult }) {
  const { input, calcular } = useCalculadora();

  useEffect(() => {
    for (const char of expression) {
      input(char);
    }
    calcular();
    onResult(input());
  }, []);

  return null;
}

describe('Calculadora usando hook con render', () => {
  it('2 + 2 = 4', () => {
    let resultado = '';
    render(<TestCalculatorComponent expression="2+2" onResult={r => (resultado = r)} />);
    expect(resultado).toBe('4');
  });

  it('5 * 3 = 15', () => {
    let resultado = '';
    render(<TestCalculatorComponent expression="5*3" onResult={r => (resultado = r)} />);
    expect(resultado).toBe('15');
  });

  it('10 / 2 = 5', () => {
    let resultado = '';
    render(<TestCalculatorComponent expression="10/2" onResult={r => (resultado = r)} />);
    expect(resultado).toBe('5');
  });

  it('7 - 4 = 3', () => {
    let resultado = '';
    render(<TestCalculatorComponent expression="7-4" onResult={r => (resultado = r)} />);
    expect(resultado).toBe('3');
  });

  it('Uso del decimal: 1.5 + 2.5 = 4', () => {
    let resultado = '';
    render(<TestCalculatorComponent expression="1.5+2.5" onResult={r => (resultado = r)} />);
    expect(resultado).toBe('4');
  });

  it('Toggle de signo: ±5 + 10 = 5', () => {
    let resultado = '';
    render(<TestCalculatorComponent expression="-5+10" onResult={r => (resultado = r)} />);
    expect(resultado).toBe('5');
  });

  it('Porcentaje: 50% = 0.5', () => {
    let resultado = '';
    render(<TestCalculatorComponent expression="50%" onResult={r => (resultado = r)} />);
    expect(resultado).toBe('0.5');
  });
});
