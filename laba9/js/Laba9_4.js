import React, {useState, useEffect} from 'React';

function AgeInSeconds() {
    const [birthday, setBirthday] = React.useState('');
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        if (birthday) {
            const birthDate = new Date(birthday);
            const updateSeconds = () => {
                const now = new Date();
                const diff = (now.getTime() - birthDate.getTime()) / 1000;
                setSeconds(Math.floor(diff));
            };
            updateSeconds();
            const intervalId = setInterval(updateSeconds, 1000);
            return () => clearInterval(intervalId);
        }
    }, [birthday]);

    return (
        <div>
            <input
                type="date"
                value={birthday}
                onChange={e => setBirthday(e.target.value)}
            />
            <p>Вы прожили: {seconds} секунд.</p>
        </div>
    );
}

export default AgeInSeconds;