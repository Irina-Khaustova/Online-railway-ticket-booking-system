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
      <TrainSelectionPageHeader step={{step1: 'step-orange', step2: '', step3: '', step4: ''}}/>
      <div className="train-selection-page-content" >
      <TrainSelectionPageSideBar/>
      <TrainSelectionPageMain/>
      </div>
           </>
    );
  }
  