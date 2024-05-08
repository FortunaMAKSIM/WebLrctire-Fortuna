import React, {useState, useEffect} from 'React';

function Temperature({ t }) {
    const style = { color: t < 0 ? 'blue' : 'red' };
    return <div style={style}>{t}</div>;
}

export default Temperature;