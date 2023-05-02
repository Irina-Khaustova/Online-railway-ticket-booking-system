import { useDispatch, useSelector } from "react-redux";
import { useGetCitiesQuery } from "../../store/slices/MyApi";

let id = 2;

export default function TrainSelectionPageMain() {

    //const {countPlaces, sortElement} = useSelector((state) => state.trainSelection);
    const { data: cities, error, isLoading} = useGetCitiesQuery('мос');
    console.log()
    //const dispatch = useDispatch()

  //dispatch()
    
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
          
        </div>
    );
  }