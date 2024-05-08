import React, {useState, useEffect} from 'React';

function OnlyEven({ arr }) {
    return <div>{arr.filter(num => num % 2 === 0).join(", ")}</div>;
}

export default OnlyEven;