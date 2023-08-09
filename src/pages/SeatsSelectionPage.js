import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import SeatsSelectionPageMain from "../components/seatsSelection/SeatsSelectionPageMain";
import TrainSelectionPageSideBar from "../components/trainSelectionPage/TrainSelectionPageSideBar";
import { useParams } from "react-router-dom";

export default function SeatsSelectionPage() {

  const {id} = useParams();
  console.log(id + 111)
    
    return (
      <>
      <TrainSelectionPageHeader/>
      <div className="train-selection-page-content" >
      <TrainSelectionPageSideBar/>
      <SeatsSelectionPageMain id={id}/>
      </div>
           </>
    );
  }