import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import SeatsSelectionPageMain from "../components/seatsSelection/SeatsSelectionPageMain";
import TrainSelectionPageSideBar from "../components/trainSelectionPage/TrainSelectionPageSideBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonalInformationPageMain from "../components/personalInformation/PersonalInformationPageMain";

export default function PersonalInformationPage() {

  const {chooseTrainItem} = useSelector((state)=> state.chooseTrainItem);
  console.log(chooseTrainItem)
    
    return (
      <>
      <TrainSelectionPageHeader order='personal-information-page'/>
      <div className="train-selection-page-content" >
      <TrainSelectionPageSideBar/>
      <PersonalInformationPageMain/>
      </div>
           </>
    );
  } 