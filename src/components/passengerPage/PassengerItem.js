import { useState } from "react";
import validationString from "./additionals/validation";

export default function PassengerItem(props) {

    const {classN, id}  = props; 

    const [classButton, setClassButton] = useState('passenger-number-button-hidden')
    const [classDisplay, setClassDisplay] = useState('passengers-information-display-none')

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [passportSeries, setPassportSeries] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validPatronymic, setValidPatronymic] = useState(false);

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
      validationString(evt.target.value)
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
        <div className="passenger-item-container">
          <div className="passenger-number-container">
            <div className="passenger-number-block">
            <button className={classButton} onClick={handleClickOpen}></button>
            <div className="passenger-number-text">Пассажир {id}</div>
            </div>
            <div className="passenger-number-button-close" onClick={handleClickClose}></div>
            </div>
            <div className={classDisplay}>
            <div className="passenger-item-item-container">
            <select className="passenger-page-input" defaultValue={'Взрослый'}>
              <option value="value1">Детский</option>
              <option value="value2">Взрослый</option>
              <option value="value3">Детский без места</option>
            </select>
            <div className="full-name-container">
            <label className="input-container">
	           <span className="name-label">Фамилия</span>
	           <input className={`passenger-page-input ${validFirstName}`} value={firstName} name='firstName' onChange={handleChangeValue} type="text"/>
            </label>
            <label className="input-container">
	           <span className="name-label">Имя</span>
	           <input className='passenger-page-input' value={lastName} name='lastName' onChange={handleChangeValue} type="text"/>
            </label>
            <label className="input-container">
	           <span className="name-label"> Отчество</span>
	           <input className='passenger-page-input' value={patronymic} name='patronymic' onChange={handleChangeValue} type="text"/>
            </label>
            </div>
            <div className="date-gender-container">
                <div className="">
                <div className="genders-title">Пол</div>
              <div className="genders-button-container">
	           <div className="gender-button active" id="man" onClick={handleCklickGender}>M</div>
	           <div className='gender-button' id="woman" onClick={handleCklickGender}>Ж</div>
              </div>
              </div>
            <label className="input-container-date">
	           <span className="name-label" >Дата рождения</span>
	           <input className='passenger-page-input' value={dateOfBirth} name='dateOfBirth' onChange={handleChangeValue} type="dste" placeholder="ДД/MM/ГГ"/>
            </label>
            </div>
            <div className="check-mobility-container">
               <input className="checkbox" type="checkbox"></input>
               <div className="">ограниченная подвижность</div>
            </div>
            </div>
            <div className="passenger-documents-container">
            <label className="input-documents-container"> 
            <span className="name-label">Тип документа</span>  
            <select className="input-documents-set" id="document">
              <option value="value2" selected>Паспорт</option>
              <option value="value3">Свидетельство о рождении</option>
            </select>
            </label>
            <label className="input-documents-container">
	           <span className="name-label">Серия</span>
	           <input className='passenger-page-input'value={passportSeries} name='passportSeries' onChange={handleChangeValue} type="text"/>
            </label>
            <label className="input-documents-container">
	           <span className="name-label">Паспорт</span>
	           <input className='passenger-page-input' type="text"/>
            </label>
            </div>
            <div className="button-next-container">
                <button className="button-next-passenger">Следующий пассажир</button>
            </div>
            </div>
        </div>
      );
    }