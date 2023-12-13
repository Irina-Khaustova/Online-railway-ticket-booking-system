import { useState, useEffect } from "react";
import validation from "./additionals/validation";
import { useDispatch, useSelector } from "react-redux";
import { putNumbers , putValid, putisValid, changePassenger} from "../../store/slices/passengers";

export default function PassengerItem(props) {

    const {el}  = props; 

    console.log(el.passenger.document_data)
    const [classButton, setClassButton] = useState('passenger-number-button-hidden')
    const [classDisplay, setClassDisplay] = useState('passengers-information-display-none')
    const [classButtonNext, setClassButtonNext] = useState('seats-selection-button-next gray')

    const docPassSer = el.passenger.document_type === 'Паспорт'? el.passenger.document_data.series: '';
    const docPassNum = el.passenger.document_type === 'Паспорт'? el.passenger.document_data.number: '';
    const docSertif = el.passenger.document_type === 'Свидетельство о рождении'? el.passenger.document_data.series: '';

    const {seatsDeparture, seatsArrival, chooseWagon} = useSelector(state => state.sidebarSettingsItem);
    console.log(docPassSer, docPassNum, docSertif)

    const [firstName, setFirstName] = useState(el.passenger.first_name);
    const [lastName, setLastName] = useState(el.passenger.last_name);
    const [patronymic, setPatronymic] = useState(el.passenger.patronymic);
    const [dateOfBirth, setDateOfBirth] = useState(el.passenger.birthday);
    const [passportSeries, setPassportSeries] = useState(docPassSer);
    const [passportNumber, setPassportNumber] = useState(docPassNum);
    const [sertificateNumber, setSertificateNumber] = useState(docSertif);
    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validPatronymic, setValidPatronymic] = useState(false);
    const [validPassportSeries, setValidPassportSeries] = useState(false);
    const [validPassportNumber, setValidPassportNumber] = useState(false);
    const [validSertificateNumber, setValidSertificateNumber] = useState(false);
    const [isChild, setIsChild] = useState(true);
    const [includeChild, setIncludeChild] = useState(false);
    const [gender, setGender] = useState(true);
    const [document, setDocument] = useState('Паспорт')
    const [documentNumber, setDocumentNumber] = useState('')

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
      
      setValidFirstName(validation('string', firstName));
      setValidLastName(validation('string', lastName));
      setValidPatronymic(validation('string', patronymic));
      setValidPassportSeries(validation('passportSeries', passportSeries));
      setValidPassportNumber(validation('passportNumber', passportNumber));
      console.log(passportNumber, validPassportNumber, validation('passportNumber', 1))
      setValidSertificateNumber(validation('sertificateNumber', sertificateNumber));
      
      console.log(document)

        const validDocument = document === 'Паспорт'? validPassportNumber : validSertificateNumber;
        const validPassport = document === 'Паспорт'? validPassportSeries : true;
        const docementData = document === 'Паспорт'? {series: passportSeries, number: passportNumber}: {series: sertificateNumber, number: ''};
        console.log(validDocument, validPassport, validFirstName, validLastName, validPatronymic)

        if(validFirstName && validLastName && validPatronymic && validDocument && validPassport) {
            console.log('good')
            dispatch(putValid({id: el.id, status: true}))
            dispatch(putisValid())
               dispatch(changePassenger({'id': el.id, 
      'passenger': {
        "is_adult": {},
        "first_name": firstName,
        "last_name": lastName,
        "patronymic": `${patronymic}`,
        "gender": `${gender}`,
        "birthday": `${dateOfBirth}`,
        "document_type": `${document}`,
        "document_data": docementData
      , 
      "seat_number": 10,
      "is_child": isChild,
      "include_children_seat": {includeChild}
    }}))
        } else {
          dispatch(putValid({id: el.id, status: false}))
          dispatch(putisValid())
            console.log(55)
 
        }
      //dispatch(putPassengers(passengers));
    },[validFirstName,validLastName,validPatronymic ,firstName, lastName, patronymic, sertificateNumber, passportNumber, passportSeries, validPassportNumber, validPassportSeries, validSertificateNumber])

    const handleChangeValue = (evt) => {
      // const stringRegex = /^[а-яА-Я]+$/;
      // const passportSeriesRegex = /^([0-9]{2}\s{1}[0-9]{2})?$/;
      // const passportNumberRegex = /^([0-9]{6})?$/;
      // const sertificateNumberRegex = /^([IVX]{3}[-]{1}[а-яА-Я]{2}[-]{1}[0-9]{6})?$/;
      // const a = stringRegex.test(evt.target.value);
      // const b = passportSeriesRegex.test(evt.target.value);
      // const c = passportNumberRegex.test(evt.target.value);
      // const d = sertificateNumberRegex.test(evt.target.value);
       
     if(evt.target.name === 'firstName') {
      setFirstName(evt.target.value)
      setValidFirstName(validation('string', evt.target.value))
      console.log(validFirstName)
     } else if(evt.target.name === 'lastName') {
      setLastName(evt.target.value)
      setValidLastName(validation('string', evt.target.value));
     } else if(evt.target.name === 'patronymic') {
      setPatronymic(evt.target.value) 
      setValidPatronymic(validation('string', evt.target.value));
     } else if(evt.target.name === 'passportSeries') {
      setPassportSeries(evt.target.value);
      setValidPassportSeries(validation('passportSeries', evt.target.value));
      console.log(passportSeries, validPassportSeries)
    } else if(evt.target.name === 'passportNumber') {
      setPassportNumber(evt.target.value);
      setValidPassportNumber(validation('passportNumber', evt.target.value));
    } else if(evt.target.name === 'sertificateNumber') {
      setSertificateNumber(evt.target.value);
      setValidSertificateNumber(validation('sertificateNumber', evt.target.value));
      console.log(validSertificateNumber + 357)
     } else if(evt.target.name === 'dateOfBirth') {
      setDateOfBirth(evt.target.value);
      
     }
    //   dispatch(changePassenger({'id': id, 'passenger': 
    //  {"coach_id": "",
    //   "person_info": {
    //     "is_adult": {},
    //     "first_name": {firstName},
    //     "last_name": {lastName},
    //     "patronymic": {patronymic},
    //     "gender": {gender},
    //     "birthday": {dateOfBirth},
    //     "document_type": {document},
    //     "document_data": {}
    //   }, 
    //   "seat_number": 10,
    //   "is_child": {isChild},
    //   "include_children_seat": {includeChild}
    // }}))
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
            <div className="passenger-number-text">Пассажир {el.id}</div>
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
            {document === 'Паспорт'? <><label className="input-documents-container">
	           <span className="name-label">Серия</span>
	           <input className='passenger-page-input'value={passportSeries} name='passportSeries' onChange={handleChangeValue} type="text" placeholder="__ __  __ __"/>
            </label>
            
            <label className="input-documents-container">
	           <span className="name-label">Номер</span>
	           <input className='passenger-page-input' value={passportNumber} name='passportNumber' onChange={handleChangeValue} type="text" placeholder="__ __ __ __ __ __"/>
            </label></>: 
            <label className="input-documents-container">
            <span className="name-label">Номер</span>
            <input className='passenger-page-input' value={sertificateNumber} name='sertificateNumber' onChange={handleChangeValue} type="text" placeholder="ххх-хх-хххххх"/>
           </label>}
            </div>
            <div className="button-next-container">
                <button className="button-next-passenger" onClick={handleClickbutton}>Следующий пассажир</button>
            </div>
            </div>
        </div>
      );
    }