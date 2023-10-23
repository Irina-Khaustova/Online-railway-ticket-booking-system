import { useState, useEffect } from "react";
import { usePutOrderMutation } from "../../store/slices/MyApi";
import { putUser } from "../../store/slices/passengers";
import { useDispatch } from "react-redux";
import  validation  from "../passengerPage/additionals/validation";
import { useNavigate } from "react-router-dom";

export default function PaymentPageMain() {


    const [classButton, setClassButton] = useState('seats-selection-button-next gray')
    const [classCheckOnline, setClassCheckOnline] = useState('checkbox')
    const [classCheckCash, setClassCheckCash] = useState('checkbox')

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [telephone, setTelephone] = useState('');
    const [eMail, setEMail] = useState('');
    const [payMethod, setPayMethod] = useState('');
    const [checkOnline, setCheckOnline] = useState(false);
    const [checkCash, setCheckCash] = useState(false);
    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validPatronymic, setValidPatronymic] = useState(false);
    const [validTelephone, setValidTelephone] = useState(false);
    const [validEMail, setValidEMail] = useState(false);
    const [validSertificateNumber, setValidSertificateNumber] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
        if(validFirstName && validLastName && validPatronymic && validEMail && validTelephone) {
          if(checkCash || checkOnline) {
            console.log(telephone + 'good')
            setClassButton('seats-selection-button-next orange')
          } else {
            setClassButton('seats-selection-button-next gray')
          }
        } else {

        setClassButton('seats-selection-button-next gray')
        }
       
    },[firstName,lastName,patronymic,telephone,eMail, checkCash, checkOnline, validFirstName, validLastName, validEMail, validTelephone])
    
    const handleChangeValue = (evt) => {
     if(evt.target.name === 'firstName') {
      setFirstName(evt.target.value)
      setValidFirstName(validation('string', evt.target.value));
     } else if(evt.target.name === 'lastName') {
      setLastName(evt.target.value)
      setValidLastName(validation('string', evt.target.value));
     } else if(evt.target.name === 'patronymic') {
      setPatronymic(evt.target.value) 
      setValidPatronymic(validation('string', evt.target.value));
     } else if(evt.target.name === 'telephone') {
      setTelephone(evt.target.value)
      setValidTelephone(validation('telephone', evt.target.value));
        console.log(telephone)
     }else if(evt.target.name === 'eMail') {
      setEMail(evt.target.value)
      setValidEMail(validation('eMail', evt.target.value));
     }
      console.log()
    }



    const handleClickPay  = (evt) => {
      if(evt.target.className === 'seats-selection-button-next orange') {
        dispatch(putUser({"user": {
          "first_name": firstName,
          "last_name": lastName,
          "patronymic": patronymic,
          "phone": telephone,
          "email": eMail,
          "payment_method": payMethod
        }}))
        navigate('/about.html')
      } else {
        if(checkCash === false && checkOnline === false) {

        }
        
      }
    }

    const handleChangeCheckbox = (evt) => {
      console.log(document.querySelector('.payment-checkbox-text online'))
        document.querySelectorAll('.payment-checkbox-text').forEach(element => {
          console.log(111111111)
        element.style.color = 'rgba(146, 143, 148, 1)';
      });
        
        if(evt.target.className === 'checkbox-active online') {
          setClassCheckOnline('checkbox');
          setCheckOnline(false)
        }
        if(evt.target.className === 'checkbox online') {
            setCheckCash(false)
            setClassCheckCash('checkbox');
          if(checkOnline === true) {
             setCheckOnline(false);
        } else {
            setCheckOnline(true);
            evt.target.nextSibling.style.color = 'rgba(255, 168, 0, 1)'
            setClassCheckOnline('checkbox-active');
            setClassCheckCash('checkbox');
            setPayMethod('online')
        }
       }
       if(evt.target.className === 'checkbox-active cash') {

        setClassCheckCash('checkbox');
        setCheckCash(false)
      }
       if(evt.target.className === 'checkbox cash') {
        setCheckOnline(false);
        setClassCheckOnline('checkbox');
        if(checkCash === true) {  
           setCheckCash(false);
        } else {
            setCheckCash(true);
            evt.target.nextSibling.style.color = 'rgba(255, 168, 0, 1)'
            setClassCheckCash('checkbox-active');
            setClassCheckOnline('checkbox')
            setPayMethod('cash') 
        }
        }
        console.log(checkCash || checkOnline)
    }
      return (
              <div className="payment-item-containers">
                <div className="payment-error-container-hidden">Выберите способ оплаты</div>
              <div className="payment-item-container">
          <div className="passenger-number-container">
            <div className="passenger-number-text">Персональные данные</div>
            </div>
            <div className="paiment-main-container">
            <div className="payment-names-container">
            <label className="input-container">
	           <span className="payment-name-label">Фамилия</span>
	           <input className='payment-names-input'value={firstName} name='firstName' onChange={handleChangeValue} type="text"/>
            </label>
            <label className="input-container">
	           <span className="payment-name-label">Имя</span>
	           <input className='payment-names-input' value={lastName} name='lastName' onChange={handleChangeValue} type="text"/>
            </label>
            <label className="input-container">
	           <span className="payment-name-label"> Отчество</span>
	           <input className='payment-names-input' value={patronymic} name='patronymic' onChange={handleChangeValue} type="text"/>
            </label>
            </div>
            <div className="payment-documents-container">
            <label className="input-documents-container"> 
            <span className="payment-name-label">Контактный телефон</span>  
            <input className='passenger-page-input'value={telephone} name='telephone'  required onChange={handleChangeValue} type="tel"/>
            </label>
            </div>
            <div className="payment-documents-container">
            <label className="input-documents-container">
	           <span className="payment-name-label">E-mail</span>
	           <input className='passenger-page-input'value={eMail} name='eMail' onChange={handleChangeValue} type="text"/>
            </label>
            </div>
            
            </div>
            <div className="passenger-number-container">
            <div className="passenger-number-text">Способ оплаты</div>
            </div>
            <div className="checked-container">
            <div className="payment-method-container">
            <div className="check-online-cash">
               <input className={`${classCheckOnline} online`} type="checkbox" checked={checkOnline} onChange={handleChangeCheckbox}></input>
               <div className="payment-checkbox-text online">Онлайн</div>
            </div>
            <div className="online-methods-container">
                <div className="online-methods-item">Банковской <br/> картой</div>
                <div className="online-methods-item">PayPal</div>
                <div className="online-methods-item">Visa QIWI Wallet</div>
            </div>
            </div>
            <div className="payment-method-cash-container">
            <div className="check-online-cash">
               <input className={`${classCheckCash} cash`} type="checkbox" checked={checkCash} onChange={handleChangeCheckbox}></input>
               <div className="payment-checkbox-text cash">Наличными</div>
            </div>
            </div>
            </div>
            
        </div>
        <div className="passenger-main-button-next-container">
                <div className={classButton} onClick={handleClickPay}>Купить билеты</div>
        </div>
        </div>
      );
    }