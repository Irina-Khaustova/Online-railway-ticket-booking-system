import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PaymentPageMain from "../components/paymentPage/paymentPageMain";
import PassengerPageSidebar from "../components/passengerPage/PassengerPageSidebar";

export default function PaymentPage() { 

  const {chooseTrainItem} = useSelector((state)=> state.chooseTrainItem);
  console.log(chooseTrainItem)
    
    return (
      <>
      <TrainSelectionPageHeader step={{step1: 'step-orange', step2: 'step-orange', step3: 'step-orange', step4: ''}}/>
      <div className="train-selection-page-content" >
      <PassengerPageSidebar/>
      <PaymentPageMain/>
      </div>
           </>
    );
  }