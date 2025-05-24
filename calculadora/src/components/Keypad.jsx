import Button from './Button'

export default function Keypad ({ onClick }) {
    const keys = [
    'C', '%', '+/-', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
    ]

    return (
        <div className='keypad'>
        {keys.map(k => (
            <Button key={k} label={k} onClick={onClick} />
        ))}
        </div>
    )
}