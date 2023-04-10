import Menu from "./Menu";
import MyImage from "../../img/552ec05b23bca029a735fc146cf0ebff.png";
import SearchTrainForm from "./SearchTrainForm";

export default function MainPageHeader() {
  return (
    <>
      <div className="container main-page-container">
        <div className="logo"></div>
        <Menu className="menu"></Menu>
        <img className="img-nain-page-header" src={MyImage} alt="К весне готовы!"></img>
        <div className="main-page-header-title">
          <div className="banner-header">
            <span className="thin"> Вся жизнь - </span>
            <span className="thick"> путешествия!</span>
          </div>
          </div>
          <SearchTrainForm></SearchTrainForm>
          <div className="try"></div>
      </div>
    </>
  );
}

