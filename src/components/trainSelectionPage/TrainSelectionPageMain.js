import { useDispatch, useSelector } from "react-redux";
import { useGetTrainQuery } from "../../store/slices/MyApi";
import searchTrainForm from "../../store/slices/searchTrainForm";
import trainSelection, { putTrains, putError } from "../../store/slices/trainSelection";
import { useEffect, useState } from "react";
//import { useGetCitiesQuery } from "../../store/slices/MyApi";
import TrainItem from "./additional/TrainItem";

let id = 2;

export default function TrainSelectionPageMain() {

    //const [searchTrain, setSearchTrain] = useState('');
    const { pointOfDeparture, deatination, trainSelection, className} = useSelector((state) => state.searchTrainForm);
    const { trainsToDraw} = useSelector((state ) => state.trainSelection)
    const { data: trainsData, error, isLoading} = useGetTrainQuery(`${trainSelection}`);
    console.log(trainsData)

    const dispatch = useDispatch();

    const handleClick = () => {
      if (sortingSelector === 'train-selection-page-main sortingElements') {
        setSortingSelector('train-selection-page-main sortingElements-active')
      } else {
        setSortingSelector('train-selection-page-main sortingElements');
      }
    }

    const handleClickChoice = (evt) => {
      console.log(evt.target.id)
      let sort;
      if(evt.target.id === 'date') {
        setSortElement('времени')
      } else if (evt.target.id === 'price') {
        setSortElement('стоимости')
      } else if (evt.target.id === 'duration') {
        setSortElement('длительности');
      }
      setSortingSelector('train-selection-page-main sortingElements');
    }

    const onClickNumber = (evt) => {
      const s = evt.currentTarget.getElementsByTagName('div')
      console.log(s[0].className)
      const arr = [...s]  
      console.log(evt.target)
      arr.forEach((el) => {el.className = 'number'})
      if (evt.target.className !== 'number-container') {
        evt.target.className = "number bold";
    }
      //setSortNumber(evt.target.id);
    }

useEffect(() => {
  if (error) {
    dispatch(putError(error));
    return
  }
  if(trainsData) {
  let numbers = (trainsData.items % sortNumber ===0)? trainsData.items /sortNumber : (trainsData.items /sortNumber)+1;
  setSortNumber(numbers);
  setTrains(trainsData.items);
  setCount(trainsData.total_count);
  dispatch(putTrains(trainsData));

  console.log(sortNumber)
  }
}, [trainsData])

useEffect(() => {

}, [])
    
    const [sortNumber, setSortNumber] = useState(5);
    const [sortElement, setSortElement] = useState('времени');
    const [sortingSelector, setSortingSelector] = useState('train-selection-page-main sortingElements');
    const [count, setCount] = useState(0);
    const [trains, setTrains] = useState(trainsToDraw);
    const [firstClass, setFirstClass] = useState(true);
    const [secondclass, setSecondClass] = useState(true);
    const [thirdClass, setThirdClass] = useState(true);
    const [sliderArray, setSliderArray] = useState(null);

    //const dispatc,h = useDispatch()
    const aht = [1, 2, 3];

  console.log(trains, 33);
    
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
                    <p className="" id='price'>стоимости</p>
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

          </div>
        </div>
    );
  }