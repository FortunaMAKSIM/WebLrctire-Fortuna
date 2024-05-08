import React, {useState, useEffect} from 'React';

function ProfileForm() {
    const Submit = (event) => {
        event.preventDefault();
        alert('Форма отправлена');
    };

    return (
        <form onSubmit={Submit}>
            <div>
                <label htmlFor="firstName">Имя:</label>
                <input type="text" id="firstName" name="firstName" required />
            </div>
            <div>
                <label htmlFor="middleName">Отчество:</label>
                <input type="text" id="middleName" name="middleName" required />
            </div>
            <div>
                <label htmlFor="lastName">Фамилия:</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>
            <div>
                <label htmlFor="birthdate">Дата рождения:</label>
                <input type="date" id="birthdate" name="birthdate" />
            </div>
            <div>
                <label htmlFor="address">Адрес:</label>
                <input type="text" id="address" name="address" />
            </div>
            <button type="submit">Сохранить изменения</button>
        </form>
    );
}

export default ProfileForm;