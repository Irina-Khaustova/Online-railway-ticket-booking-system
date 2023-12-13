import { useDispatch, useSelector } from "react-redux";
import PassengerItem from "./PassengerItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import seatsSelection, { putNumberPassengers } from "../../store/slices/seatsSelection";
import { putNumbers, putValid } from "../../store/slices/passengers";

export default function PassengerPageMain(props) {

    const {adultsDeparture, childrenWithSeatDeparture} = useSelector(state => state.seatsSelection)
    const {validSet, isValid} = useSelector(state => state.passengers)
    const {seatsArrival, seatsDeparture, chooseWagon} = useSelector(state => state.sidebarSettingsItem)
   // const [isValid, setIsValid] = useState(false);

   let passengers = Number(adultsDeparture) + Number(childrenWithSeatDeparture);
    const newarr = [];
    const arr = [];
   
   for(let i=1; i < passengers+1; i+=1) {
     
    arr.push({i});
    newarr.push({'id': i, 'status': false, 
    'passenger': {
      
        "is_adult": '',
        "first_name": "",
        "last_name": "",
        "patronymic": "",
        "gender": null,
        "birthday": "",
        "document_type": "",
        "document_data": "",
        "seat_number_arrival": '',
      "seat_number_departure": '',
      "is_child": null,
      "include_children_seat": null
    }
  })


}
//const arrNew = validSet? validSet: newarr;

    const [classButton, setClassButton] = useState('seats-selection-button-next gray')
    const [arrValid, setArrValid] = useState('');
    const [classN, setclassN] = useState('passenger-number-button-hidden');

    // const arr = [];
  
    const dispatch = useDispatch();
    // let passengers = Number(adultsDeparture) + Number(childrenWithSeatDeparture);

    // let passengers = Number(adultsDeparture) + Number(childrenWithSeatDeparture);
    // const newarr = [];

    //const arrNew = validSet? validSet: newarr;

//     for(let i=1; i < passengers+1; i+=1) {
     
//       arr.push({i});
//       newarr.push({'id': i, 'status': false, 
//       'passenger': {
        
//           "is_adult": '',
//           "first_name": "",
//           "last_name": "",
//           "patronymic": "",
//           "gender": null,
//           "birthday": "",
//           "document_type": "",
//           "document_data": "",
//           "seat_number_arrival": '',
//         "seat_number_departure": '',
//         "is_child": null,
//         "include_children_seat": null
//       }
//     })
  
  
// }
const a = validSet? 1: 2
    
console.log(newarr, a)

  useEffect(() => {

      const arrNew = validSet.length >0 ? validSet: newarr;
      console.log(arrNew)
      const newClass = validSet? 'passenger-number-button-open': classN;
      setclassN(newClass)
      setArrValid(arrNew)
      console.log(newarr,arrValid)
      if(validSet.length === 0) {
      dispatch(putNumbers({passengers: passengers, arrValid: newarr}))
      } 
  },[])

  console.log()

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

    const putPass = () => {

    }

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
          {validSet.length > 0? validSet.map((el) => <PassengerItem key={el.id} classN='passenger-number-button-hidden'  el={el}></PassengerItem>):
          newarr.map((el) => <PassengerItem key={el.id} classN='passenger-number-button-hidden'  el={el}></PassengerItem>)} 
          <div className="passenger-main-button-next-container"><button className={classButton} onClick={handleClickNext}>ДАЛЕЕ</button></div>
        </div>
      );
    }