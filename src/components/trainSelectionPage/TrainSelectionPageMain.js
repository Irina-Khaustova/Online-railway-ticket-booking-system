import { useDispatch, useSelector } from "react-redux";
import { useGetTrainQuery } from "../../store/slices/MyApi";
import searchTrainForm from "../../store/slices/searchTrainForm";
import { useState } from "react";
//import { useGetCitiesQuery } from "../../store/slices/MyApi";
import TrainItem from "./additional/TrainItem";

let id = 2;

export default function TrainSelectionPageMain() {

    //const [searchTrain, setSearchTrain] = useState('');
    const { pointOfDeparture, deatination, trainSelection, className} = useSelector((state) => state.searchTrainForm);
    const { data: trains, error, isLoading} = useGetTrainQuery(`${trainSelection}`);
    console.log(trains)

    const [firstClass, setFirstClass] = useState(true);
    const [secondclass, setSecondClass] = useState(true);
    const [thirdClass, setThirdClass] = useState(true);
    
    //const dispatch = useDispatch()

  console.log();
    
    return (
        <div className="train-selection-page-main-container">
          <div className="train-selection-page-main-header">
            <div className="">
                Найдено {} 
            </div>
            <div className="train-selection-page-main sortingElements-container">
                <div>сортировать по {}</div>
                <div className="train-selection-page-main sortingElements">
                    <p>времени</p>
                    <p>стоимости</p>
                    <p>длительности</p>
                </div>
            </div>
            <div className="">Показывать по</div>
            <div>5</div>
            <div>10</div>
            <div>20</div>
          </div>
          <div className="train-selection-page-mane search-train-container">
            
          </div>
        </div>
    );
  }