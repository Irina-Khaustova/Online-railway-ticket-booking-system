import { useSelector } from "react-redux";
import PassengerItem from "./PassengerItem";
import { useNavigate } from "react-router-dom";

export default function PassengerPageMain(props) {

    const {adultsDeparture, childrenWithSeatDeparture} = useSelector(state => state.seatsSelection)

    const arr = [];
    let passengers = Number(adultsDeparture) + Number(childrenWithSeatDeparture);

    for(let i=1; i < passengers+1; i+=1) {
      arr.push(i)
    }

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
          {arr.map((el) => <PassengerItem key={el} classN='passenger-number-button-hidden' id={el}></PassengerItem>)} 
          <div className="passenger-main-button-next-container"><button className="seats-selection-button-next" onClick={handleClickNext}>ДАЛЕЕ</button></div>
        </div>
      );
    }