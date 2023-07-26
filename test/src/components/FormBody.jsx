import { useEffect, useState } from "react";

const FormBody = ({submit}) => {  
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorSurname, setErrorSurname] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [formValid, setFormValid] = useState(false);

    console.log('object', formValid);
    function inputNameChange(e) {              
            setName(e.target.value);
            setErrorName('')        
    };

    function inputSurnameChange(e) {        
            setSurname(e.target.value); 
            setErrorSurname('');    
    };

    function inputEmailChange(e) {         
            setEmail(e.target.value); 
            setErrorEmail('');       
    };

    function errorInputName (e) {
        if (e.target.value === '') {
            setErrorName('Поле обязательно для заполнения');
        }
    };

    function errorInputSurname (e) {
        if (e.target.value === '') {
            setErrorSurname('Поле обязательно для заполнения');
        }
    };

    function errorInputEmail (e) {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if (e.target.value === '') {
            setErrorEmail('Поле обязательно для заполнения');
        };

        if (!EMAIL_REGEXP.test(e.target.value)) {
            setErrorEmail('Не корректное значение');
        };
    };
   
    useEffect(() => {
        if (errorName || errorSurname || errorEmail) {
            console.log('err', setFormValid());
            setFormValid(false)
        } else {
            setFormValid(true)}
    }, [errorName, errorSurname, errorEmail])

    return (
        <form className="form" action="#" onSubmit={submit} >
            <label className="form__label" htmlFor="name">
                Введите Ваше имя
                <input 
                    className="form__input input-name" 
                    value={name}                
                    type="text" 
                    name="name"  
                    placeholder="Имя"
                    onChange={e => inputNameChange(e)}
                    onBlur={e => {errorInputName(e)} }
                />
                {errorName && <span className="form__error">{errorName}</span>}
            </label>
            <label className="form__label" htmlFor="surname">
                Введите Вашу фамилию
                <input 
                    className="form__input input-surname" 
                    value={surname}  
                    type="text" 
                    name="surname"
                    placeholder="Фамилия"
                    onChange={e => inputSurnameChange(e)}
                    onBlur={e => {errorInputSurname(e)}}
                />
                 {errorSurname && <span className="form__error">{errorSurname}</span>}
            </label>
            <label className="form__label" htmlFor="email">
                Введите Вашу почту
                <input 
                    className="form__input input-email" 
                    value={email}  
                    type="email" 
                    name="email"
                    placeholder="Email"
                    onChange={e => inputEmailChange(e)}
                    onBlur={e => {errorInputEmail(e)}}
                />
                 {errorEmail && <span className="form__error">{errorEmail}</span>}
            </label>
            <button 
                className="form__btn" 
                type="submit"
                disabled={!formValid}
            >Добавить
            </button>
        </form>
    )
};

export default FormBody;