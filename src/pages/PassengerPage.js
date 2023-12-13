import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PassengerPageMain from "../components/passengerPage/PassengerPageMain";
import PassengerPageSidebar from "../components/passengerPage/PassengerPageSidebar";

export default function PassengerPage() { 

  const {chooseTrainItem} = useSelector((state)=> state.chooseTrainItem);
  console.log(chooseTrainItem)
    
    return (
      <>
      <TrainSelectionPageHeader step={{step1: 'step-orange', step2: 'step-orange', step3: '', step4: ''}}/>
      <div className="train-selection-page-content" >
      <PassengerPageSidebar/>
      <PassengerPageMain/>
      </div>
           </>
    );
  }