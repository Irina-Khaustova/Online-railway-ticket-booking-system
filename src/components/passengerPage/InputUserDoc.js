import { useState, useEffect } from "react";
import validation from "./additionals/validation";
import { useDispatch } from "react-redux";
import { putNumbers , putValid, putisValid, changePassenger} from "../../store/slices/passengers";

export default function InputuserDoc(props) {

    const { id}  = props; 


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [passportSeries, setPassportSeries] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [sertificateNumber, setSertificateNumber] = useState('');
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

    const handleClickClose = () => {

    } 

    useEffect(() => {
      
        const stringRegex = /^[а-яА-Я]+$/;
        
        console.log()

        const validDocument = document === 'Паспорт'? validPassportNumber : validSertificateNumber;
        const validPassport = document === 'Паспорт'? validPassportSeries : true;
        console.log(validDocument, validPassportSeries + '565')
        if(validFirstName && validLastName && validPatronymic && validDocument && validPassport) {
            console.log('good')
            dispatch(putValid({id: id, status: true}))
            dispatch(putisValid())
               dispatch(changePassenger({'id': id, 
      'passenger': {
        "is_adult": {},
        "first_name": firstName,
        "last_name": lastName,
        "patronymic": `${patronymic}`,
        "gender": `${gender}`,
        "birthday": `${dateOfBirth}`,
        "document_type": `${document}`,
        "document_data": {}
      , 
      "seat_number": 10,
      "is_child": isChild,
      "include_children_seat": {includeChild}
    }}))
        } else {
          dispatch(putValid({id: id, status: false}))
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
        
	           <input className={`passenger-page-input ${validFirstName}`} value={firstName} name='firstName' onChange={handleChangeValue} type="text"/>
           
      );
    }