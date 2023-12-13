import { useState } from "react";
import Menu from "../mainPaige/Menu";
//import MyImage from "../../img/455f149d5f9743f2b028fa407e8d4464.png";
import TrainSelectionSearchForm from "./TrainSelectionSearchForm";
export default function TrainSelectionPageHeader(props) {

  const {step} = props;

  return (
    <>
      <div className="container train-selection-page-container">
        <div className="logo"></div>
        <Menu className="menu"></Menu>
        
          <TrainSelectionSearchForm/>
        <div className="order-steps-container">
        <div className={`order-steps-item step-1 ${step.step1? step.step1: 'step-gray'}`}>
         
            <div className="order-step">
              <div className="order-step-text-container">
              <div className="order-step-circle">1</div>
              <span className="order-step-text">Билеты</span>
              </div>
            </div>
        </div>
        <div className={`order-steps-item step-2 ${step.step2? step.step2: 'step-gray'}`}>
        <div className={`triangle-${step.step1? step.step1: 'step-gray'}`}></div>
        <div className="order-step">

              <div className="order-step-text-container">
              <div className="order-step-circle">2</div>
              <span className="order-step-text">Пассажиры</span>
              </div>
            </div>
        </div>
        <div className={`order-steps-item step-3 ${step.step3? step.step3: 'step-gray'}`}>
        <div className={`triangle-${step.step2? step.step2: 'step-gray'}`}></div>
        <div className="order-step">
              <div className="order-step-text-container">
              <div className="order-step-circle">3</div>
              <span className="order-step-text">Оплата</span>
              </div>
            </div>
        </div>
        <div className={`order-steps-item step-4 ${step.step4? step.step4: 'step-gray'}`}>
        <div className={`triangle-${step.step3? step.step3: 'step-gray'}`}></div>
        <div className="order-step">
              <div className="order-step-text-container">
              <div className="order-step-circle">4</div>
              <span className="order-step-text">Проверка</span>
              </div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}