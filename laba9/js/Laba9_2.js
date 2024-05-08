import React, {useState, useEffect} from 'React';

function Calculator() {
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [operation, setOperation] = React.useState('+');
    const [result, setResult] = React.useState(0);

    const calculate = () => {
        switch (operation) {
            case '+': setResult(num1 + num2); break;
            case '-': setResult(num1 - num2); break;
            case '*': setResult(num1 * num2); break;
            case '/': setResult(num1 / num2); break;
            default: setResult(0);
        }
    };

    return (
        <div>
            <input type="number" value={num1} onChange={e => setNum1(+e.target.value)} />
            <select value={operation} onChange={e => setOperation(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={num2} onChange={e => setNum2(+e.target.value)} />
            <button onClick={calculate}>Calculate</button>
            <p>{`${num1} ${operation} ${num2} = ${result}`}</p>
        </div>
    );
}

export default Calculator;