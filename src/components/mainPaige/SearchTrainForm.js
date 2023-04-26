import { useNavigate } from "react-router-dom";

export default function SearchTrainForm() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/train.html');
  }
    
    return (
      <form className="search-train-form">
        <h3 className="search-form-title">Направление</h3>
        <div className="search-form-input-container">
          <input className="search-form-input"></input>
          <input className="search-form-input"></input>
        </div>
        <h3 className="search-form-title">Дата</h3>
        <div className="search-form-input-container">
          <input className="search-form-input"></input>
          <input className="search-form-input"></input>
        </div>
        <div className="search-form-input-container">
        <button className="search-form-button" onClick={handleClick}>найти билеты</button>
        </div>
      </form>
    );
  }
  