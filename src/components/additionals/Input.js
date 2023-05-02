import { useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { putSearchFormValues,putTest } from "../../store/slices/searchTrainForm";
import { searchTrainForm } from "../../store/slices/searchTrainForm";
import { useGetCitiesQuery } from "../../store/slices/MyApi";
import { MyApi } from "../../store/slices/MyApi";

export default function Input(props) {
  const {classContainer} = props;

  const dispatch = useDispatch();

  const [valuePointOfDeparture, setValuePointOfDeparture] = useState();
  const [valueDestination,setValueDestination] = useState();
  const [valueDatePointOfDeparture, setValueDatePointOfDeparture] = useState();
  const [valueDateDestination, setValueDateDestination] = useState();

  const {pointOfDepartur, destination, datePointOfDeparture, dateDestination} = useSelector((state) => state.searchTrainForm)
  console.log(pointOfDepartur + 2)

  useEffect(() => {
    setValuePointOfDeparture(pointOfDepartur);
    console.log(pointOfDepartur + 3)
    setValueDestination(destination);
    setValueDatePointOfDeparture(datePointOfDeparture);
    setValueDateDestination(dateDestination);
  }, [])

  const navigate = useNavigate();

  const handleClick = () => {
  if (classContainer === "search-train-form-container") {
  navigate('/train.html');
  }
  dispatch(putSearchFormValues({
    pointOfDepartur: valuePointOfDeparture,
    destination: valueDestination,
    datePointOfDeparture: valueDatePointOfDeparture,
    dateDestination: valueDateDestination,
  }))
  dispatch(putTest(13))

}

const handleChangePointOfDeparture = (evt) => {
  setValuePointOfDeparture(evt.target.value);
}

const handleChangeDestination = (evt) => {
  setValueDestination(evt.target.value);
  console.log(evt.target)
}

const handleChangeDatePointOfDeparture = (evt) => {
  setValueDatePointOfDeparture(evt.target.value);
}

const handleChangeDateDestination = (evt) => {
  setValueDateDestination(evt.target.value);
}

const   [getCities, {data, isloading}]= useGetCitiesQuery();
console.log()

const handleFocus = () => {
  
}

      return (
        <>
        <div className={classContainer}>
          <div className="search-form-container">
            <h3 className="search-form-title">Направление</h3>
            <div className="search-form-input-container">
            <input type="string" className="search-form-input point-of-departure" onChange={handleChangePointOfDeparture} onFocus={handleFocus} value={valuePointOfDeparture}></input>
            <input type="string" className="search-form-input destination" onChange={handleChangeDestination} value={valueDestination}></input>
            </div>
          </div>
          <div className="search-form-container">
          <h3 className="search-form-title">Дата</h3>
          <div className="search-form-input-container">
          <input type="date" className="search-form-input" onChange={handleChangeDatePointOfDeparture} value={ valueDatePointOfDeparture}></input>
          <input type="date" className="search-form-input" onChange={handleChangeDateDestination} value={valueDateDestination}></input>
          </div>
        </div>
        </div>
        <div className="search-form-button-container">
        <button className="search-form-button" onClick={handleClick}>найти билеты</button>
        </div>
        </>
      )    
    }
    
  //   return (
        
  //     <div className={classContainer}>
  //       <input type={type} className={classInput} name={name}></input>
  //       <input type={type} className={classInput}></input>
  //     </div>
  //  )   