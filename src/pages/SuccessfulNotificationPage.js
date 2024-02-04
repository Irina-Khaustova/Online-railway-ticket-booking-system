import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import PassengerPageSidebar from "../components/passengerPage/PassengerPageSidebar";
import SuccessfulNotificationPageMain from "../components/successfulNotificationPage/SuccessfulNotificationPageMain";

export default function SuccessfulNotificationPage() {
   // const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(putInputValue(""));
  //     // eslint-disable-next-line
  //   }, []);
    return (
      <>
      <TrainSelectionPageHeader step={{step1: 'step-orange', step2: 'step-orange', step3: 'step-orange', step4: 'step-orange'}}/>
      <div className="train-selection-page-content" >
      <PassengerPageSidebar/>
      <SuccessfulNotificationPageMain/>
      </div>
      </>
    );
  }
  