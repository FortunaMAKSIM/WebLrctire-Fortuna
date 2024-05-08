import React, {useState, useEffect} from 'React';

function CitySelect() {
    const [city, setCity] = React.useState('');

    return (
        <div>
            <select value={city} onChange={e => setCity(e.target.value)}>
                <option value="rio">Рио-де-Жанейро</option>
                <option value="moscow">Москва</option>
                <option value="new-york">Нью-Йорк</option>
            </select>
            {city !== 'rio' && city && <p>Нет, это не Рио-де-Жанейро!</p>}
        </div>
    );
}

export default CitySelect;