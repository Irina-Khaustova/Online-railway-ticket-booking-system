import { useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { putSearchFormValues,putTest } from "../../store/slices/searchTrainForm";

export default function InputSeats(props) {

  
  const {classContainer} = props;
 

  const dispatch = useDispatch();
  const {pointOfDeparture, destination, datePointOfDeparture, dateDestination} = useSelector((state) => state.searchTrainForm)
  console.log(pointOfDeparture, destination, 789)

  const [valueNumberSeats, setValueNumberSeats] = useState();
  const [cityPointOfDeparture, setCityPointOfDeparture] = useState();
  const [citiesToDraw, setCitiesToDraw] = useState();
  

const handleChangeNumberSeats= (evt) => {
//   if(evt.target.className === 'point-of-departure-menu-text') {
//     const name = evt.target.getAttribute('custom-attribute')
//     setCityPointOfDeparture(evt.target.id);
//     setValuePointOfDeparture(name);
//     setClassNamePointOfDeparture('point-of-departure-menu')
//     console.log(cityPointOfDeparture)
//   }
  
    setValueNumberSeats(evt.target.value);
    
  }

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