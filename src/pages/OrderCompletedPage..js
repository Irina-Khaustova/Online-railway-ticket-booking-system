import Footer from "../components/Footer.js";
import OrderCompletedPageHeader from "../components/orderCompletedPage/OrderCompletedHeader.js";
import OrderCompletedPageMain from "../components/orderCompletedPage/OrderCompletedPageMain.js";

export default function OrderCompletedPage() {
   // const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(putInputValue(""));
  //     // eslint-disable-next-line
  //   }, []);
    return (
      <>
      <OrderCompletedPageHeader></OrderCompletedPageHeader>
      <OrderCompletedPageMain></OrderCompletedPageMain>
      <Footer></Footer>
      </>
    );
  }
  