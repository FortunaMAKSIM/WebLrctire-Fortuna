import React, {useState, useEffect} from 'React';

function TrafficLight() {
    const [color, setColor] = React.useState('red');

    React.useEffect(() => {
        const colors = ['red', 'yellow', 'green'];
        let current = 0;

        const intervalId = setInterval(() => {
            current = (current + 1) % colors.length;
            setColor(colors[current]);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ width: '50px', height: '150px', backgroundColor: color }}>
        </div>
    );
}

export default TrafficLight;