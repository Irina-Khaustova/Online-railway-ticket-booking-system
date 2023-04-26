import Input from "../additionals/Input";

export default function TrainSelectionSearchForm() {
    
    return (
      <form className="train-selection-search-form">
      <div className="train-selection-search-form-container">
        <div className="train-selection-search-form-item">
        <h3 className="search-form-title">Направление</h3>
        <Input classContainer="search-form-input-container" classInput="search-form-input" type="string"></Input>
       
        </div>
        <div className="train-selection-search-form-item">
        <h3 className="search-form-title">Дата</h3>
        <Input classContainer="search-form-input-container" classInput="search-form-input" type="date"></Input>
        
        </div>
        <div className="train-selection-search-form-button">
        <div className="search-form-input-container">
        <button className="search-form-button">найти билеты</button>
        </div>
        </div>
        </div>
      </form>
    );
  }