import { useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { putSearchFormValues,putTest } from "../../store/slices/searchTrainForm";
import { searchTrainForm } from "../../store/slices/searchTrainForm";
import { useGetCitiesQuery, useGetTrainQuery } from "../../store/slices/MyApi";
import { myApi } from "../../store/slices/MyApi";

export default function Input(props) {

  //const { className1 } = useSelector((state) => state.searchTrainForm);
  //console.log(className1)
  const {classContainer} = props;
  //let flag = false;

  const dispatch = useDispatch();
  const {pointOfDeparture, destination, datePointOfDeparture, dateDestination} = useSelector((state) => state.searchTrainForm)
  console.log(pointOfDeparture, destination, 789)

  const [cityDestination, setCityDestination] = useState();
  const [cityPointOfDeparture, setCityPointOfDeparture] = useState();
  const [citiesToDraw, setCitiesToDraw] = useState();
  const [valuePointOfDeparture, setValuePointOfDeparture] = useState(pointOfDeparture);
  const [valueDestination,setValueDestination] = useState(destination);
  const [valueDatePointOfDeparture, setValueDatePointOfDeparture] = useState(datePointOfDeparture);
  const [valueDateDestination, setValueDateDestination] = useState(dateDestination);
  const [classNamePointOfDeparture, setClassNamePointOfDeparture] = useState('point-of-departure-menu-active');
  const [classNameDestination, setClassNameDestination] = useState('destination-menu-active');

  
  console.log(pointOfDeparture + 2)

  const navigate = useNavigate();
 
  const handleClick = (e) => {
    e.preventDefault();
    let a = `from_city_id=${cityPointOfDeparture}&to_city_id=${cityDestination}`;
    dispatch(putSearchFormValues({
      pointOfDeparture: valuePointOfDeparture,
      destination: valueDestination,
      datePointOfDeparture: valueDatePointOfDeparture,
      dateDestination: valueDateDestination,
      trainSelection: a,
    }))
    console.log(valueDatePointOfDeparture, valueDestination, cityPointOfDeparture, cityDestination)

    
if(classContainer === 'search-train-form-container'){
  navigate('/train.html');
}
  
  
}

const handleChangePointOfDeparture = (evt) => {
  setValuePointOfDeparture(evt.target.value);
  console.log(evt.target.value) 
  setClassNamePointOfDeparture('point-of-departure-menu-active')
   console.log(valuePointOfDeparture + 77)
  dispatch(putSearchFormValues({
    pointOfDeparture: valuePointOfDeparture,
    destination: valueDestination,
    datePointOfDeparture: valueDatePointOfDeparture,
    dateDestination: valueDateDestination,
    trainSelection: '',
  }))
}

const handleChangeDestination = (evt) => {
  setValueDestination(evt.target.value);
  setClassNameDestination('destination-menu-active')
  console.log(valueDestination + 33)
  dispatch(putSearchFormValues({
    pointOfDeparture: valuePointOfDeparture,
    destination: valueDestination,
    datePointOfDeparture: valueDatePointOfDeparture,
    dateDestination: valueDateDestination,
    trainSelection: '',
  }))
}

const handleChangeDatePointOfDeparture = (evt) => {
  setValueDatePointOfDeparture(evt.target.value);
}

const handleChangeDateDestination = (evt) => {
  setValueDateDestination(evt.target.value);
}

const   {data: cities, isLoading, isError, isSuccess} = useGetCitiesQuery(`${valuePointOfDeparture}`);


const {data: citiesDestination, isLoading: isLoadingDestination} = useGetCitiesQuery(`${valueDestination}`);


const handleClickCity= (evt) => {
  if(evt.target.className === 'point-of-departure-menu-text') {
    const name = evt.target.getAttribute('custom-attribute')
    setCityPointOfDeparture(evt.target.id);
    setValuePointOfDeparture(name);
    setClassNamePointOfDeparture('point-of-departure-menu')
    console.log(cityPointOfDeparture)
  }
  if(evt.target.className === 'destination-menu-text') {
    const name = evt.target.getAttribute('custom-attribute');
    setCityDestination(evt.target.id);
    setValueDestination(name);
    setClassNameDestination('destination-menu')
    console.log(cityDestination)
  }
}

const handleBlur = () => {
  setClassNamePointOfDeparture('point-of-departure-menu');
}

      return (
        <>
        <div className={classContainer}>
          <div className="search-form-container">
            <h3 className="search-form-title">Направление</h3>
            <div className="search-form-input-container">
            <input type="string" className="search-form-input point-of-departure" key={1} onChange={handleChangePointOfDeparture}  value={valuePointOfDeparture}></input>
            { valuePointOfDeparture && <div className={classNamePointOfDeparture}>
            {(cities && cities.length > 0)? cities.map((el) => <div className="point-of-departure-menu-text" key={el._id} onClick={handleClickCity} custom-attribute={el.name} id={el._id}>{el.name}</div>): null}
            </div>}
            <input type="string" className="search-form-input destination" key={2} onChange={handleChangeDestination} value={valueDestination}></input>
            { valueDestination && <div className={classNameDestination}>
            {(citiesDestination && citiesDestination.length) ? citiesDestination.map((el) => <div className="destination-menu-text" key={el._id} onClick={handleClickCity} custom-attribute={el.name} id={el._id}>{el.name}</div>): null}
            </div>}
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