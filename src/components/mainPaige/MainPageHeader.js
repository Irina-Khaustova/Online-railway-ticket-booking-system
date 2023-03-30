import Menu from "./Menu";
//import MyImage from "../img/banner.jpg";
import SearchTrainForm from "./SearchTrainForm";

export default function MainPageHeader() {
  return (
    <>
      <div className="container main-page-container">
        <div className="logo"></div>
        <Menu className="menu"></Menu>

        <div className="main-page-header-title">
          <div className="banner-header">
            <span> Вся жизнь - </span>
            <span className="bold"> путешествия!</span>
          </div>
          </div>
          <SearchTrainForm></SearchTrainForm>
      </div>
    </>
  );
}