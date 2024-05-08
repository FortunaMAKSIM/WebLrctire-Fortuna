import React, {useState, useEffect} from 'React';

function Revert({ s }) {
    const [text, setText] = React.useState(s);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setText(text => text[text.length - 1] + text.substring(0, text.length - 1));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div>{text}</div>;
}

export default Revert;