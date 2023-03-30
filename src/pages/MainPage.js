import MainPageHeader from "../components/mainPaige/MainPageHeader";
import AboutUs from "../components/mainPaige/AboutUs";
import HowItsWorks from "../components/mainPaige/HowItsWorks";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MainPage() {
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(putInputValue(""));
  //   // eslint-disable-next-line
  // }, []);
  return (
    <>
      <MainPageHeader className="header" />
      <AboutUs className="sales-hits" />
      <HowItsWorks className="catalog" />
      <Footer />
    </>
  );
}
