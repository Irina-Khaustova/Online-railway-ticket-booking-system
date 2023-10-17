import { useState } from "react";

export default function PaymentPageMain() {


    const [classButton, setClassButton] = useState('passenger-number-button-hidden')
    const [classDisplay, setClassDisplay] = useState('passengers-information-display-none')

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [passportSeries, setPassportSeries] = useState('');
    const [stateForm, setStateForm] = useState({firstName: '', lastName: ''});

    const handleClickOpen = (evt) => {
      if(evt.currentTarget.className === 'passenger-number-button-hidden') {
        setClassButton('passenger-number-button-open')
        setClassDisplay('passengers-information-display')
      } else {
        setClassButton('passenger-number-button-hidden')
        setClassDisplay('passengers-information-display-none') 
      }
    } 

    const handleClickClose = () => {

    } 

    const handleChangeValue = (evt) => {
     if(evt.target.name === 'firstName') {
      setFirstName(evt.target.value)
     } else if(evt.target.name === 'lastName') {
      setLastName(evt.target.value)
     } else if(evt.target.name === 'patronymic') {
      setPatronymic(evt.target.value) 
     } else if(evt.target.name === 'passportSeries') {
      setPassportSeries(evt.target.value) 
     } else if(evt.target.name === 'dateOfBirth') {
      setDateOfBirth(evt.target.value) 
     }
      console.log()
    }

    const handleCklickGender  = (evt) => {
      evt.target.parentNode.firstChild.className = 'gender-button';
      evt.target.parentNode.lastChild.className = 'gender-button';
      evt.target.className = 'gender-button active';
    }
 
      return (
        <div className="payment-item-container">
          <div className="passenger-number-container">
            <div className="passenger-number-text">Персональные данные</div>
            </div>
            <div className="passenger-item-item-container">
            <div className="payment-names-container">
            <label className="input-container">
	           <span className="name-label">Фамилия</span>
	           <input className='payment-names-input'value={firstName} name='firstName' onChange={handleChangeValue} type="text"/>
            </label>
            <label className="input-container">
	           <span className="name-label">Имя</span>
	           <input className='payment-names-input' value={lastName} name='lastName' onChange={handleChangeValue} type="text"/>
            </label>
            <label className="input-container">
	           <span className="name-label"> Отчество</span>
	           <input className='payment-names-input' value={patronymic} name='patronymic' onChange={handleChangeValue} type="text"/>
            </label>
            </div>
            
            </div>
            <div className="payment-documents-container">
            <label className="input-documents-container"> 
            <span className="name-label">Контактный телефон</span>  
            <input className='passenger-page-input'value={passportSeries} name='passportSeries' onChange={handleChangeValue} type="text"/>
            </label>
            </div>
            <div className="payment-documents-container">
            <label className="input-documents-container">
	           <span className="name-label">E-mail</span>
	           <input className='passenger-page-input'value={passportSeries} name='passportSeries' onChange={handleChangeValue} type="text"/>
            </label>
            </div>
            <div className="passenger-number-container">
            <div className="passenger-number-text">Способ оплаты</div>
            </div>
            <div className="payment-method-container">
            <div className="check-online-cash">
               <input className="checkbox" type="checkbox"></input>
               <div className="">Онлайн</div>
            </div>
            <div className="online-methods-container">
                <div className="online-methods-item">Банковской <br/> картой</div>
                <div className="online-methods-item">PayPal</div>
                <div className="online-methods-item">Visa QIWI Wallet</div>
            </div>
            </div>
            <div className="payment-method-cash-container">
            <div className="check-online-cash">
               <input className="checkbox" type="checkbox"></input>
               <div className="">Наличными</div>
            </div>
            </div>
            
        </div>
      );
    }