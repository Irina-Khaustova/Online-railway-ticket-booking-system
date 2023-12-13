import InputSeats from "../additionals/InputSeats";
import WagonItem from "./WagonItem"; 
import { useGetWagonQuery } from "../../store/slices/MyApi";
import SeatsSelectionPageMainItem from "./SeatselectionPageMainItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSeats } from "../../store/slices/sidebarSettingsItem";


export default function SeatsSelectionPageMain(props) {

  const {el} = props;
  console.log()

  const queryArrival = el? `${el.arrival._id}`: null;
  const queryDeparture = el? `${el.departure._id}`: null
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {adultsDeparture, 
    childrenWithSeatDeparture, 
    childrenWithoutSeatDeparture, 
    adultsArrival, 
    childrenWithSeatArrival, 
    childrenWithoutSeatArrival
  } = useSelector(state => state.seatsSelection);
  const {seatsDeparture, seatsArrival} = useSelector(state => state.sidebarSettingsItem);
  const [colorButton, setColorButton] = useState('seats-selection-button-next gray');

  useEffect(() => {
    dispatch(clearSeats());
  },[])

  useEffect(() => {
    console.log(adultsDeparture, childrenWithSeatDeparture)
    const numberDeparture = Number(adultsDeparture) + Number(childrenWithSeatDeparture);
    
    const numberArrDeparture = seatsDeparture? seatsDeparture.length : 0;
    console.log(numberDeparture, numberArrDeparture)
    if(numberDeparture !== 0) {
      console.log('да')
      if(numberDeparture === numberArrDeparture) {
        console.log('да да')
        setColorButton('seats-selection-button-next orange');
    } else { 
      console.log('нет')
      setColorButton('seats-selection-button-next gray');
    }
  }
  },[adultsDeparture, childrenWithSeatDeparture, seatsDeparture])

  const { data: wagonsDeparture, errorDeparture, isLoadingDeparture} = useGetWagonQuery(`${queryDeparture}`);
  const { data: wagonsArrival, errorArrival, isLoadingArrival} = useGetWagonQuery(`${queryArrival}`);

  

  console.log(wagonsArrival, wagonsDeparture)

  const handleClickNext = () => {
    console.log(seatsArrival, seatsDeparture)
    const numberDeparture = Number(adultsDeparture) + Number(childrenWithSeatDeparture);
    
    const numberArrDeparture = seatsDeparture? seatsDeparture.length : 0;
    
    if(numberDeparture !== 0) {
      if(numberDeparture === numberArrDeparture) {
    navigate('/passenger.html');
    }
  }
  }

  return ( 
    <>
      <div className="container seats-selection-page-container">
      <h3 className="seats-selection-page">ВЫБОР МЕСТ</h3>
        <SeatsSelectionPageMainItem category="Departure" wagons={wagonsDeparture}></SeatsSelectionPageMainItem>
        <SeatsSelectionPageMainItem category="Arrival" wagons={wagonsArrival}></SeatsSelectionPageMainItem>
        <div className="seats-selection-button-next-container">
        <button className={colorButton} onClick={handleClickNext}>ДАЛЕЕ</button>
        </div>
      </div>
    </>
  );
}