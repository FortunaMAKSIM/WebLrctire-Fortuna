import React, {useState, useEffect} from 'React';

function RegistrationForm() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const Submit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Форма успешно отправлена');
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <form onSubmit={Submit}>
            <div>
                <label htmlFor="login">Логин:</label>
                <input type="text" id="login" name="login" required minLength="6" maxLength="20" pattern="[a-zA-Z0-9]+" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="confirmPassword">Подтверждение пароля:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {errors.confirmPassword && <div style={{color: 'red'}}>{errors.confirmPassword}</div>}
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default RegistrationForm;