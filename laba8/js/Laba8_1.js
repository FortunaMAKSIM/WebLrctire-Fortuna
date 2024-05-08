import React, {useState, useEffect} from 'React';

function Countdown() {
    const [count, setCount] = React.useState(10);

    React.useEffect(() => {
        if (count > 0) {
            const timerId = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timerId);
        }
    }, [count]);

    return <div>{count}</div>;
}

export default Countdown;