import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";
import TrainSelectionPageMain from "../components/trainSelectionPage/TrainSelectionPageMain";
import TrainSelectionPageSideBar from "../components/trainSelectionPage/TrainSelectionPageSideBar";

export default function TrainSelectionPage() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(putInputValue(""));
    //   // eslint-disable-next-line
    // }, []);
    return (
      <>
      <TrainSelectionPageHeader/>
      <div className="train-selection-page-content" >
      <TrainSelectionPageSideBar/>
      </div>
      <TrainSelectionPageMain/>
           </>
    );
  }
  