import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import SeatsSelectionPageMain from "../components/seatsSelection/SeatsSelectionPageMain";
import TrainSelectionPageSideBar from "../components/trainSelectionPage/TrainSelectionPageSideBar";

export default function SeatsSelectionPage() {
    
    return (
      <>
      <TrainSelectionPageHeader/>
      <div className="train-selection-page-content" >
      <TrainSelectionPageSideBar/>
      <SeatsSelectionPageMain/>
      </div>
           </>
    );
  }