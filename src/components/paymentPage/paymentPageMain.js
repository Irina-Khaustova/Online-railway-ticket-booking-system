import { useState, useEffect } from "react";
import { usePutOrderMutation } from "../../store/slices/MyApi";
import { putUser } from "../../store/slices/passengers";
import { useDispatch } from "react-redux";
import validationString from "../passengerPage/additionals/validation";
import { validationTel } from "../passengerPage/additionals/validation";
import { useNavigate } from "react-router-dom";

export default function PaymentPageMain() {


    const [classButton, setClassButton] = useState('seats-selection-button-next gray')
    const [classDisplay, setClassDisplay] = useState('passengers-information-display-none')

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [telephone, setTelephone] = useState('');
    const [eMail, setEMail] = useState('');
    const [payMethod, setPayMethod] = useState('');
    const [user, setUser] = useState('');
    const [checkOnline, setCheckOnline] = useState(false);
    const [checkCash, setCheckCash] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickOpen = (evt) => {
      if(evt.currentTarget.className === 'passenger-number-button-hidden') {
        setClassButton('passenger-number-button-open')
        setClassDisplay('passengers-information-display')
      } else {
        setClassButton('passenger-number-button-hidden')
        setClassDisplay('passengers-information-display-none') 
      }
    } 
    
    useEffect(() => {
        const phoneRegex =/(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
        const stringRegex = /^[а-яА-Я]+$/;
        const eMailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        console.log(phoneRegex.test())
        if(phoneRegex.test(telephone) && stringRegex.test(firstName) && stringRegex.test(lastName) && stringRegex.test(patronymic) && eMailRegex.test(eMail)) {
            console.log(telephone + 'good')
            setClassButton('seats-selection-button-next orange')
        } else {

        setClassButton('seats-selection-button-next gray')
        }
       
    },[firstName,lastName,patronymic,telephone,eMail, checkCash, checkOnline])
    

    const handleClickClose = () => {

    } 

    const handleChangeValue = (evt) => {
     if(evt.target.name === 'firstName') {
      setFirstName(evt.target.value)
     } else if(evt.target.name === 'lastName') {
      setLastName(evt.target.value)
     } else if(evt.target.name === 'patronymic') {
      setPatronymic(evt.target.value) 
     } else if(evt.target.name === 'telephone') {
        setTelephone(evt.target.value)
        
        console.log(telephone)
     }else if(evt.target.name === 'eMail') {
        setEMail(evt.target.value)
     }
      console.log()
    }



    const handleClickPay  = (evt) => {
      if(evt.target.className === 'seats-selection-button-next orange') {
        setUser({"user": {
            "first_name": {firstName},
            "last_name": {lastName},
            "patronymic": {patronymic},
            "phone": {telephone},
            "email": {eMail},
            "payment_method": {payMethod}
          }})
        dispatch(putUser(user))
        navigate('/about.html')
      }
    }

    const handleChangeCheckbox = (evt) => {
        if(evt.target.className === 'checkbox online') {
            setCheckCash(false)
          if(checkOnline === true) {
             setCheckOnline(false);
        } else {
            setCheckOnline(true);
            setPayMethod('online') 
        }
       }
       if(evt.target.className === 'checkbox cash') {
        setCheckOnline(false);
        if(checkCash === true) {  
           setCheckCash(false);
        } else {
            setCheckCash(true);
            setPayMethod('cash') 
        }
        }
    }
      return (
              <div className="payment-item-containers">
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
            <input className='passenger-page-input'value={telephone} name='telephone'  required onChange={handleChangeValue} type="tel"/>
            </label>
            </div>
            <div className="payment-documents-container">
            <label className="input-documents-container">
	           <span className="name-label">E-mail</span>
	           <input className='passenger-page-input'value={eMail} name='eMail' onChange={handleChangeValue} type="text"/>
            </label>
            </div>
            <div className="passenger-number-container">
            <div className="passenger-number-text">Способ оплаты</div>
            </div>
            <div className="checked-container">
            <div className="payment-method-container">
            <div className="check-online-cash">
               <input className="checkbox online" type="checkbox" checked={checkOnline} onChange={handleChangeCheckbox}></input>
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
               <input className="checkbox cash" type="checkbox" checked={checkCash} onChange={handleChangeCheckbox}></input>
               <div className="">Наличными</div>
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