import React, {useState, useEffect} from 'React';

function Timer() {
    const [time, setTime] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    return (
        <div>
            <div>{time}</div>
            <button onClick={() => setIsActive(!isActive)}>{isActive ? '⏸' : '▶'}</button>
        </div>
    );
}

export default Timer;