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
      <TrainSelectionPageHeader/>
      <div className="train-selection-page-content" >
      <PassengerPageSidebar/>
      <SuccessfulNotificationPageMain/>
      </div>
      </>
    );
  }
  