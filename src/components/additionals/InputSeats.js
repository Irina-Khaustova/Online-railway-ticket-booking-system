import { useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { putSearchFormValues,putTest } from "../../store/slices/searchTrainForm";
import { putNumberPassengers } from "../../store/slices/seatsSelection"; 

export default function InputSeats(props) {

  
  const {classContainer,category} = props;
 

  const dispatch = useDispatch();
  const {pointOfDeparture, destination, datePointOfDeparture, dateDestination} = useSelector((state) => state.searchTrainForm);
  const {adultsDeparture, childrenWithSeatDeparture} = useSelector((state) => state.seatsSelection);
  console.log(pointOfDeparture, destination, 789)

  const [valueNumberSeats, setValueNumberSeats] = useState(0);
  const [cityPointOfDeparture, setCityPointOfDeparture] = useState();
  const [citiesToDraw, setCitiesToDraw] = useState();
  
useEffect(() => {
  if(category === 'adultsArrival') {
    setValueNumberSeats(adultsDeparture)
  }
  if(category === 'childrenWithSeatArrival') {
    setValueNumberSeats(childrenWithSeatDeparture)
  }
},[adultsDeparture, childrenWithSeatDeparture])

const handleChangeNumberSeats= (evt) => {
  if(category === 'adultsDeparture' || category === 'childrenWithSeatDeparture')
    setValueNumberSeats(evt.target.value);
  }


 useEffect(() => {
  dispatch(putNumberPassengers({category: category, value: valueNumberSeats}));
 },[valueNumberSeats]) 
    return (
        <>
        <div className={classContainer}>
          <div className="sats-number-input-container">
            <input type="string" className="seats-number-input" onChange={handleChangeNumberSeats}  value={valueNumberSeats}></input>
            <div className="">Можно добавить еще 
3 пассажиров </div>
            </div>
          </div>
        </>
      )    
    }