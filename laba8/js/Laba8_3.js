import React, {useState, useEffect} from 'React';

function Primes() {
    const [primes, setPrimes] = React.useState([]);

    React.useEffect(() => {
        let n = 2;
        const intervalId = setInterval(() => {
            function isPrime(num) {
                for (let i = 2, s = Math.sqrt(num); i <= s; i++)
                    if (num % i === 0) return false;
                return num > 1;
            }

            while (!isPrime(n)) n++;
            setPrimes(primes => [...primes, n]);
            n++;
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div>{primes.join(", ")}</div>;
}

export default Primes;