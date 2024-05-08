import React, {useState, useEffect} from 'React';

function ChangeColor() {
    const [color, setColor] = React.useState('red');
    const toggleColor = () => setColor(prevColor => prevColor === 'red' ? 'green' : 'red');
    return <button onClick={toggleColor} style={{ backgroundColor: color }}>Смена цвета</button>;
}

export default ChangeColor;