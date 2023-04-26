import Menu from "../mainPaige/Menu";
//import MyImage from "../../img/455f149d5f9743f2b028fa407e8d4464.png";
import TrainSelectionSearchForm from "./TrainSelectionSearchForm";
export default function TrainSelectionPageHeader() {
  return (
    <>
      <div className="container train-selection-page-container">
        <div className="logo"></div>
        <Menu className="menu"></Menu>
        
          <TrainSelectionSearchForm/>
        <div className="order-steps-container">
        <div className="order-steps-item step-1 step-orange">
            <div className="order-step">
            <div className="triangle-orange"></div>
            </div>
        </div>
        <div className="order-steps-item step-2">
            <div className="order-step"> 
            <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
        </div>
        <div className="order-steps-item step-3">
            <div className="order-step"> 
            <div className="triangle-orange"></div>
            </div>
        </div>
        <div className="order-steps-item step-4">
            <div className="order-step"> 
            </div>
        </div>
        </div>
      </div>
    </>
  );
}