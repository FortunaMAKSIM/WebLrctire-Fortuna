import React, {useState, useEffect} from 'React';

function NumberSystemCalculator() {
    const [input, setInput] = React.useState('');
    const [base, setBase] = React.useState(10);
    const [output, setOutput] = React.useState('');

    const convertNumber = () => {
        try {
            const number = parseInt(input, base);
            setOutput(number.toString(10));
        } catch (error) {
            setOutput('Invalid input');
        }
    };

    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <select value={base} onChange={e => setBase(e.target.value)}>
                <option value="2">Binary</option>
                <option value="10">Decimal</option>
                <option value="16">Hexadecimal</option>
            </select>
            <button onClick={convertNumber}>Convert</button>
            <p>Result: {output}</p>
        </div>
    );
}

export default NumberSystemCalculator;