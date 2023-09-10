import { useDispatch, useSelector } from "react-redux";
import { useGetTrainQuery } from "../../store/slices/MyApi";
import searchTrainForm from "../../store/slices/searchTrainForm";
import trainSelection, { putTrains, putError, putSort, putSortNumber } from "../../store/slices/trainSelection";
import sidebarSettingsItem from "../../store/slices/sidebarSettingsItem";
import { useEffect, useState } from "react";
//import { useGetCitiesQuery } from "../../store/slices/MyApi";
import TrainItem from "./additional/TrainItem";

let id = 2;

export default function TrainSelectionPageMain() {

    //const [searchTrain, setSearchTrain] = useState('');
    const { pointOfDeparture, deatination, datePointOfDeparture, dateDestination,  trainSelection, className} = useSelector((state) => state.searchTrainForm);
    const { trainsToDrawFiltered, trainsToDraw, sort, sortNumber} = useSelector((state ) => state.trainSelection);
    const {parameters, startDepartureHourFrom, endDepartureHourFrom ,startDepartureHourTo ,endDepartureHourTo ,startArrivalHourFrom,
    endArrivalHourFrom ,startArrivalHourTo ,endArrivalHourTo ,priceFrom ,priceTo} = useSelector((state) => state.sidebarSettingsItem);
    console.log(datePointOfDeparture, dateDestination)
    const [pageNumber, setPageNumber] = useState('');
    const [sortElement, setSortElement] = useState('времени');
    const [sortingSelector, setSortingSelector] = useState('train-selection-page-main sortingElements');
    const [count, setCount] = useState(0);
    const [trains, setTrains] = useState(trainsToDraw);
    const [params, setParams] = useState(trainSelection);
    const [offset, setOffset] = useState(0);
    const [activeNumber, setActiveNumber] = useState(1);
    const [startNumber, setStartNumber] = useState(1);

    const { data: trainsData, error, isLoading} = useGetTrainQuery(`${params}`);
    //console.log(parameters)

    useEffect(() => {
      //console.log(sort + 'sort')
     // let requestParams = trainSelection? trainSelection.concat(parameters.includes('have_first_class')? "&have_first_class": '') : ''
      let requestParams = trainSelection? trainSelection.concat(parameters.includes('have_first_сlass')? "&have_first_class=true": '')
      .concat(parameters.includes('have_second_сlass')? "&have_second_class=true": '')
      .concat(parameters.includes('have_third_сlass')? "&have_third_class=true": '')
      .concat(parameters.includes('have_fourth_сlass')? "&have_fourth_class=true": '')
      .concat(parameters.includes('have_wifi')? "&have_wifi=true": '')
      .concat(parameters.includes('is_express')? "&is_express=true": '')
      .concat(datePointOfDeparture? `&date_start=${datePointOfDeparture}`: '')
      .concat(dateDestination? `&date_end=${dateDestination}`: '')
      .concat(startDepartureHourFrom? `&start_departure_hour_from=${startDepartureHourFrom}`: '')
      .concat(endDepartureHourFrom? `&end_departure_hour_from=${endDepartureHourFrom}`: '')
      .concat(startDepartureHourTo? `&start_departure_hour_to=${startDepartureHourTo}`: '')
      .concat(endDepartureHourTo? `&end_departure_hour_to=${endDepartureHourTo}`: '')
      .concat(startArrivalHourFrom? `&start_arrival_hour_from=${startArrivalHourFrom}`: '')
      .concat(endArrivalHourFrom? `&end_arrival_hour_from=${endArrivalHourFrom}`: '')
      .concat(startArrivalHourTo? `&start_arrival_hour_to=${startArrivalHourTo}`: '')
      .concat(endArrivalHourTo? `&end_arrival_hour_to=${endArrivalHourTo}`: '')
      .concat(priceFrom? `&price_from=${priceFrom}`: '')
      .concat(priceTo? `&price_to=${priceTo}`: '')
      .concat(`&sort=${sort}`)
      .concat(`&limit=${sortNumber}`)
      .concat(`&offset=${offset}`)
       : ''
      setParams(requestParams)
      //console.log(requestParams)
    },[parameters,trainSelection,datePointOfDeparture, dateDestination, startDepartureHourFrom, startDepartureHourTo, endDepartureHourFrom, endDepartureHourTo,
    startArrivalHourFrom, endArrivalHourFrom, startArrivalHourTo, endArrivalHourTo, priceFrom, priceTo, sort, sortNumber, offset])


    //const [trainsToDraw, setTrainsToDraw] = [];

    

    const dispatch = useDispatch();

    const handleClick = () => {
      if (sortingSelector === 'train-selection-page-main sortingElements') {
        setSortingSelector('train-selection-page-main sortingElements-active')
      } else {
        setSortingSelector('train-selection-page-main sortingElements');
      }
    }

    const handleClickChoice = (evt) => {
      if(evt.target.id === 'date') {
        setSortElement('времени')
      } else if (evt.target.id === 'price_min') {
        setSortElement('стоимости')
      } else if (evt.target.id === 'duration') {
        setSortElement('длительности');
      }
      dispatch(putSort(`${evt.target.id}`));
      setSortingSelector('train-selection-page-main sortingElements');
    }

    const onClickNumber = (evt) => {
      const s = evt.currentTarget.querySelectorAll('div')
      const arr = [...s]  
      arr.forEach((el) => {el.className = 'number'})
      if (evt.target.className !== 'number-container') {
        evt.target.className = "number bold";
    }
     // setSortNumber(evt.target.id);
      dispatch(putSortNumber(evt.target.id));
    }

useEffect(() => {

  setPageNumber([])
  if (error) {
    dispatch(putError(error));
    return
  }
  if(trainsData) {
    console.log(trainsData.total_count, sortNumber)
  setTrains(trainsData.items);
  setCount(trainsData.total_count);
  dispatch(putTrains(trainsData));
  let pageNumbers = trains? (trainsData.total_count % sortNumber ===0)? trainsData.total_count/sortNumber : Math.floor((trainsData.total_count/sortNumber)+1) : 0;
  let arrPage = [];
  if (pageNumbers <= 5) {
    for (let i = startNumber; i <= pageNumbers; i+=1) {
      arrPage.push(i);
    }
  } else {
     if(pageNumber !== NaN) {
      arrPage.push(startNumber, startNumber + 1, startNumber + 2, '...', pageNumbers);
     }
  }

  setPageNumber(arrPage);
  console.log(pageNumber)
  }
  
}, [trainsData, trains, startNumber, activeNumber])

const onClickPageNumber = (evt) => {
  const parent= evt.target.parentNode;
  console.log(parent)
  if (parent) {
    const arr = Array.from(parent.children);
    console.log(arr)
    arr.forEach((el) => el.className='page-number-item');
}  ;
  evt.target.className = 'page-number-item activeFirst'
  const off = Number(evt.target.id) * sortNumber;
  setOffset(off);
  setActiveNumber(evt.target.id);
  console.log(evt.target)
}

const handleClickPageTranslation = (evt) => {
  evt.stopPropagation()
  const newStartNumberLeft = startNumber + 1;
  const newStartNumberRight = startNumber - 1;
  if(evt.currentTarget.id === 'right') {
    
    setStartNumber(newStartNumberLeft);
    
  } else {
    if(newStartNumberRight > 1)
    setStartNumber(newStartNumberRight);
  }
  console.log(startNumber);
}
 //const dispatc,h = useDispatch()
    const aht = [1, 2, 3];


  console.log( 33);
    
    return (
        <div className="train-selection-page-main-container">
          <div className="train-selection-page-main-header">
            <div className="train-selection-page-main-found">
                Найдено {count} 
            </div>
            <div className="train-selection-page-main sortingElements-container">
                <div className="">
                  <span>сортировать по: </span>
                  <span className="sorting bold" onClick={handleClick}>{sortElement}</span>
                </div>
                <div className={sortingSelector} onClick={handleClickChoice}>
                    <p className="" id='date'>времени</p>
                    <p className="" id='price_min'>стоимости</p>
                    <p id='duration'>длительности</p>
                </div>
            </div>
            <div className="">показывать по:</div>
            <div className="number-container" onClick={onClickNumber}>
            <div className="number bold" id={5}> 5</div>
            <div className="number" id={10}> 10</div>
            <div className="number" id={20}>20</div>
            </div>
          </div>
          <div className="train-selection-page-mane search-train-container">
            { trains? trains.map((el, i) => <TrainItem className="" key ={i} el={el}></TrainItem>): null}
          </div>
          <div className="train-selection-page-mane slider-container">
            {pageNumber.length > 2 ? <><div className="page-number-item-img" id='left' onClick={handleClickPageTranslation}>
            <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33625 14.5C9.82076 11.0945 13.1201 7.89424 16.3731 4.72332C17.2669 3.85207 17.1987 2.34671 16.3094 1.47083C15.4416 0.616038 14.1195 0.686134 13.2516 1.54092C9.06317 5.66637 4.86165 9.80466 0.72327 13.8808C0.325571 14.2725 0.325472 14.9137 0.723293 15.3053C4.70972 19.2293 8.86225 23.2984 12.9949 27.3844C13.8955 28.2748 15.2685 28.3485 16.1445 27.4338C16.9987 26.5419 17.0517 25.0479 16.1744 24.1785C13.0758 21.1078 9.80952 17.8945 6.33625 14.5Z" fill="#928F94"/>
</svg>
              </div> {pageNumber.map((el, i) => <div  className='page-number-item-img' onClick={onClickPageNumber} id={i} key={i}>{el}</div>)} <div className="page-number-item-img" id='right' onClick={handleClickPageTranslation}>
              <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6637 14.5C8.17924 11.0945 4.87989 7.89424 1.62688 4.72332C0.733082 3.85207 0.801327 2.34671 1.69059 1.47083C2.55844 0.616038 3.88051 0.686134 4.74835 1.54092C8.93683 5.66637 13.1384 9.80466 17.2767 13.8808C17.6744 14.2725 17.6745 14.9137 17.2767 15.3053C13.2903 19.2293 9.13775 23.2984 5.00506 27.3844C4.10447 28.2748 2.7315 28.3485 1.85554 27.4338C1.00133 26.5419 0.948345 25.0479 1.82557 24.1785C4.92418 21.1078 8.19048 17.8945 11.6637 14.5Z" fill="#928F94"/>
</svg>
                </div></> : null}
          </div>
        </div>
    );
  }