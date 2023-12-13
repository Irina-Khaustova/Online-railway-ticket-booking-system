import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import SeatsSelectionPageMain from "../components/seatsSelection/SeatsSelectionPageMain";
import TrainSelectionPageSideBar from "../components/trainSelectionPage/TrainSelectionPageSideBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SeatsSelectionPage() {

  const {chooseTrainItem} = useSelector((state)=> state.chooseTrainItem);
  console.log(chooseTrainItem)
    
    return (
      <>
      <TrainSelectionPageHeader step={{step1: 'step-orange', step2: '', step3: '', step4: ''}}/>
      <div className="train-selection-page-content" >
      <TrainSelectionPageSideBar/>
      <SeatsSelectionPageMain el={chooseTrainItem}/>
      </div>
           </>
    );
  }