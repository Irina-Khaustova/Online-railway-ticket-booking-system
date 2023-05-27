import { useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { putSearchFormValues,putTest } from "../../store/slices/searchTrainForm";
import { searchTrainForm } from "../../store/slices/searchTrainForm";
import { useGetCitiesQuery, useGetTrainQuery } from "../../store/slices/MyApi";
import { myApi } from "../../store/slices/MyApi";

export default function Input() {

  //const { className1 } = useSelector((state) => state.searchTrainForm);
  //console.log(className1)
  //const {classContainer} = props;
  //let flag = false;

  const dispatch = useDispatch();

   const [classInput, setClassInput] = useState();
  const [cityDestination, setCityDestination] = useState();
  const [cityPointOfDeparture, setCityPointOfDeparture] = useState();
  const [citiesToDraw, setCitiesToDraw] = useState();
  const [valuePointOfDeparture, setValuePointOfDeparture] = useState();
  const [valueDestination,setValueDestination] = useState();
  const [valueDatePointOfDeparture, setValueDatePointOfDeparture] = useState();
  const [valueDateDestination, setValueDateDestination] = useState();
  const [classNamePointOfDeparture, setClassNamePointOfDeparture] = useState('point-of-departure-menu-active');
  const [classNameDestination, setClassNameDestination] = useState('destination-menu-active');

  const {pointOfDeparture, destination, datePointOfDeparture, dateDestination, className1} = useSelector((state) => state.searchTrainForm)
  console.log(pointOfDeparture + 2)

  useEffect(() => {
    setClassInput(className1);
    setValuePointOfDeparture(pointOfDeparture);
    console.log(className1 + 3)
    setValueDestination(destination);
    setValueDatePointOfDeparture(datePointOfDeparture);
    setValueDateDestination(dateDestination);
  }, [])

  const navigate = useNavigate();
 
  const handleClick = () => {
    console.log(valueDatePointOfDeparture, valueDestination, cityPointOfDeparture, cityDestination)
  if (classInput === '') {
    console.log(4445)
    setClassInput('train-selection-search-form-inputs');
    console.log(classInput + 666)
  navigate('/train.html');
  }
  setClassInput('good')
  const a = `from_city_id=${cityPointOfDeparture}&to_city_id=${cityDestination}`;
  console.log(cityPointOfDeparture, cityDestination, 44)
  setCitiesToDraw(a)
  console.log(a + 77);
  dispatch(putSearchFormValues({
    pointOfDeparture: valuePointOfDeparture,
    destination: valueDestination,
    datePointOfDeparture: valueDatePointOfDeparture,
    dateDestination: valueDateDestination,
    trainSelection: a,
    class: "train-selection-search-form-inputs",
  }))
  dispatch(putTest(13))
  console.log(citiesToDraw + 77);
}

const handleChangePointOfDeparture = (evt) => {
  setValuePointOfDeparture(evt.target.value);
  setClassNamePointOfDeparture('point-of-departure-menu-active')
}

const handleChangeDestination = (evt) => {
  setValueDestination(evt.target.value);
  setClassNameDestination('destination-menu-active')
  console.log(evt.target)
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
        <div className={classInput}>
          <div className="search-form-container">
            <h3 className="search-form-title">Направление</h3>
            <div className="search-form-input-container">
            <input type="string" className="search-form-input point-of-departure" key={1} onChange={handleChangePointOfDeparture}  value={valuePointOfDeparture}></input>
            { valuePointOfDeparture && <div className={classNamePointOfDeparture}>
            {cities.length > 0? cities.map((el) => <div className="point-of-departure-menu-text" key={el._id} onClick={handleClickCity} custom-attribute={el.name} id={el._id}>{el.name}</div>): null}
            </div>}
            <input type="string" className="search-form-input destination" key={2} onChange={handleChangeDestination} value={valueDestination}></input>
            { valueDestination && <div className={classNameDestination}>
            {citiesDestination.length > 0? citiesDestination.map((el) => <div className="destination-menu-text" key={el._id} onClick={handleClickCity} custom-attribute={el.name} id={el._id}>{el.name}</div>): null}
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