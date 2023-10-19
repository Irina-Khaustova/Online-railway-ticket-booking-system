import { useState, useEffect } from "react";
import validationString from "./additionals/validation";
import { useDispatch } from "react-redux";
import { putNumbers , putValid, putisValid} from "../../store/slices/passengers";

export default function PassengerItem(props) {

    const { id}  = props; 

    const [classButton, setClassButton] = useState('passenger-number-button-hidden')
    const [classDisplay, setClassDisplay] = useState('passengers-information-display-none')
    const [classButtonNext, setClassButtonNext] = useState('seats-selection-button-next gray')

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [passportSeries, setPassportSeries] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validPatronymic, setValidPatronymic] = useState(false);
    const [isChild, setIsChild] = useState(true);
    const [includeChild, setIncludeChild] = useState(false);
    const [gender, setGender] = useState(true);
    const [document, setDocument] = useState('Паспорт')

    const [passengers, setPassengers] = useState([]);

    const dispatch = useDispatch();

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

    const validDate = (date) => {
      const datenow = new Date();
      console.log(datenow)
      const dateIsValid = 1
    }

    useEffect(() => {
      
        const stringRegex = /^[а-яА-Я]+$/;
        
        console.log()
        if(stringRegex.test(firstName) && stringRegex.test(lastName) && stringRegex.test(patronymic) ) {
            console.log('good')
            //valid(id, true)
        } else {
            //valid(id, false)
            console.log(55)

        }
      //dispatch(putPassengers(passengers));
    },[firstName, lastName, patronymic, dateOfBirth, passportSeries])

    const handleChangeValue = (evt) => {
      const stringRegex = /^[а-яА-Я]+$/;
     if(evt.target.name === 'firstName') {
      setFirstName(evt.target.value)
      setValidFirstName(validationString(evt.target.value))
     } else if(evt.target.name === 'lastName') {
      setLastName(evt.target.value)
     } else if(evt.target.name === 'patronymic') {
      setPatronymic(evt.target.value) 
      dispatch(putValid({id: id, status: stringRegex.test(evt.target.value)}))
      dispatch(putisValid())
     } else if(evt.target.name === 'passportSeries') {
      setPassportSeries(evt.target.value) 
     } else if(evt.target.name === 'dateOfBirth') {
      console.log(evt.target.value)
      setDateOfBirth(evt.target.value) 
     }
      console.log()
    }

    const handleChangeIsAdult = (evt) => {
      if(evt.target.value === 'Детский') {
      setIsChild(true);
      setIncludeChild(false);
      } else {
        setIsChild(false);
        setIncludeChild(true);
      }
    }

    const handleChangeDocument = (evt) => {
      setDocument(evt.target.value);
    }

    const handleCklickGender  = (evt) => {
      evt.target.parentNode.firstChild.className = 'gender-button';
      evt.target.parentNode.lastChild.className = 'gender-button';
      evt.target.className = 'gender-button active';
      if(evt.target.id === 'man') {
        setGender(true)
      } else {
        setGender(false)
      }
    }

    const handleClickbutton = () => {
      passengers.push({
        "person_info": {
          "is_adult": true,
          "first_name": {firstName},
          "last_name": {lastName},
          "patronymic": {patronymic},
          "gender": {gender},
          "birthday": "1980-01-01",
          "document_type": {document},
          "document_data": "45 6790195"
        },
        "seat_number": 10,
        "is_child": {isChild},
        "include_children_seat": {includeChild}
      })
      console.log(new Date())
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
            <select className="passenger-page-input" onChange={handleChangeIsAdult} defaultValue={'Взрослый'}>
              <option value="value1">Детский</option>
              <option value="value2" selected >Взрослый</option>
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
            <select className="input-documents-set" onChange={handleChangeDocument} id="document">
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
                <button className="button-next-passenger" onClick={handleClickbutton}>Следующий пассажир</button>
            </div>
            </div>
        </div>
      );
    }