import { useDispatch, useSelector } from "react-redux";
import PassengerItem from "./PassengerItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import seatsSelection, { putNumberPassengers } from "../../store/slices/seatsSelection";
import { putNumbers, putValid } from "../../store/slices/passengers";

export default function PassengerPageMain(props) {

    const {adultsDeparture, childrenWithSeatDeparture} = useSelector(state => state.seatsSelection)
    const {validSet, isValid} = useSelector(state => state.passengers)
   // const [isValid, setIsValid] = useState(false);
    const [classButton, setClassButton] = useState('seats-selection-button-next gray')
    const [arrValid, setArrValid] = useState([])

    const arr = [];
  
    const dispatch = useDispatch();
    // let passengers = Number(adultsDeparture) + Number(childrenWithSeatDeparture);

    let passengers = Number(adultsDeparture) + Number(childrenWithSeatDeparture);
    const newarr = [];
    for(let i=0; i < passengers; i+=1) {
      newarr.push({'id': i + 1, 'status': false})
    }


  useEffect(() => {
    
      setArrValid(newarr)
      dispatch(putNumbers({passengers: passengers, arrValid: newarr}))
    
  },[])

  useEffect(() => {
   if(isValid) {
    setClassButton('seats-selection-button-next orange')
   } else {
    setClassButton('seats-selection-button-next gray')
   }
  },[isValid])

    // for(let i=1; i < passengers + 1; i+=1) {
    //   arrValid.push({'id': i, 'status': false})
    // }
    
    for(let i=1; i < passengers+1; i+=1) {
      arr.push(i)
    }

    // const isValidFunc = (id, status) => {
      
    //   setArrValid(arr)
    //   dispatch(putValid({id: id, status: status}))
    //   if(isValid === true) {
    //     console.log(isValid + 999)
    //     setClassButton('seats-selection-button-next orange')
    //   } else {
    //     setClassButton('seats-selection-button-next gray')
    //   }
    //   console.log(validSet)
    //   for(let i=0; i < validSet.length; i+=1) {
    //     if(validSet[i].status === false) {
    //       setIsValid(false);
    //     } else {
    //       setIsValid(true)
    //     }
    //   }
    //   if(isValid === true) {
    //     setClassButton('seats-selection-button-next orange')
    //   } else {
    //     setClassButton('seats-selection-button-next gray')
    //   }
    //   console.log(validSet)
    // }
    

    // useEffect(() => {
    //   if(validSet) {
    //   for(let i=0; i < validSet.length; i+=1) {
    //     if(validSet[i].status === false) {
    //       setIsValid(false);
    //     } else {
    //       setIsValid(true)
    //     }
    //   }
    // }
      // if(isValid === true) {
      //   console.log(isValid + 999)
      //   setClassButton('seats-selection-button-next orange')
      // } else {
      //   setClassButton('seats-selection-button-next gray')
      // }
    // },[validSet])

    const navigate = useNavigate();

    console.log(arr, adultsDeparture, childrenWithSeatDeparture)
    
    const handleClickOpen = () => {

    } 

    const handleClickClose = () => {

    }
    
    const handleClickNext = () => {
      navigate('/payment.html')
    }

  
      return (
        <div className="passenger-main-container">
          {arr.map((el) => <PassengerItem key={el} classN='passenger-number-button-hidden'  id={el}></PassengerItem>)} 
          <div className="passenger-main-button-next-container"><button className={classButton} onClick={handleClickNext}>ДАЛЕЕ</button></div>
        </div>
      );
    }