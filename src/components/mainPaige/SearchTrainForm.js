import { useNavigate} from "react-router-dom";
import { useState } from "react";
import Input from "../additionals/Input";

export default function SearchTrainForm() {

 
    
    return (
      <form className="search-train-form">
        <Input></Input>
      </form>
    );
  }
  
  // return (
  //   <form className="search-train-form">
  //     <h3 className="search-form-title">Направление</h3>
  //     <div className="search-form-input-container">
  //       <input className="search-form-input  point-of-departure" onChange={handleChangePointOfDeparture} value={valuePointOfDeparture}></input>
  //       <input className="search-form-input destination" onChange={handleChangeDestination} value={valueDestination}></input>
  //     </div>
  //     <h3 className="search-form-title">Дата</h3>
  //     <div className="search-form-input-container">
  //       <input className="search-form-input" type="date" value={datePointOfDeparture}></input>
  //       <input className="search-form-input" type="date" value={dateDestination}></input>
  //     </div>
  //     <div className="search-form-input-container">
  //     <button className="search-form-button" onClick={handleClick}>найти билеты</button>
  //     </div>
  //   </form>
  // );