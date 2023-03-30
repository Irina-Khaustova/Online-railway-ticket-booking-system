export default function SearchTrainForm() {
    
    return (
      <form className="search-form">
        <h2 className="search-form-title">Направление</h2>
        <div className="search-form-input-container">
          <input className="search-form-input"></input>
          <input className="search-form-input"></input>
        </div>
        <h2 className="search-form-title">Дата</h2>
        <div className="search-form-input-container">
          <input className="search-form-input"></input>
          <input className="search-form-input"></input>
        </div>
        <div className="search-form-input-container">
        <button className="search-form-button">найти билеты</button>
        </div>
      </form>
    );
  }
  