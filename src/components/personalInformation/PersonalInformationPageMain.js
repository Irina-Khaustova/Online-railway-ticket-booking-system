export default function PersonalInformationPageMain(props) {

    const {number}  = props; 
  
  
    const handleClickOpen = () => {

    } 

    const handleClickClose = () => {

    } 

  
      return (
        <div className="passenger-item-container">
          <div className="passenger-number-container">
            <div className="passenger-number-block">
            <button className="passenger-number-button-open" onClick={handleClickOpen}></button>
            <div className="passenger-number-text">Пассажир {number}</div>
            </div>
            <div className="passenger-number-button-close" onClick={handleClickClose}></div>
            </div>
            <div className="passengers-information-display">
            <div className="passenger-item-item-container">
            <select className="passenger-page-input">
              <option value="value1">Детский</option>
              <option value="value2" selected>Взрослый</option>
              <option value="value3">Детский без места</option>
            </select>
            <div className="full-name-container">
            <label className="input-container">
	           <span className="name-label">Фамилия</span>
	           <input className='passenger-page-input' type="text"/>
            </label>
            <label className="input-container">
	           <span className="name-label">Имя</span>
	           <input className='passenger-page-input'type="text"/>
            </label>
            <label className="input-container">
	           <span className="name-label"> Отчество</span>
	           <input className='passenger-page-input' type="text"/>
            </label>
            </div>
            <div className="date-gender-container">
                <div className="">
                <div className="genders-title">Пол</div>
              <div className="genders-button-container">
	           <div className="gender-button-man">M</div>
	           <div className='gender-button-woman'>Ж</div>
              </div>
              </div>
            <label className="input-container-date">
	           <span className="name-label" >Дата рождения</span>
	           <input className='passenger-page-input' type="dste" placeholder="ДД/MM/ГГ"/>
            </label>
            </div>
            <div className="check-mobility-container">
               <input className="checkbox" type="checkbox"></input>
               <div className="">ограниченная подвижность</div>
            </div>
            </div>
            <div className="passenger-documents-container">
            <label className="input-documents-container"> 
            <span className="name-label">Тип документа</span>  
            <select className="input-documents-set" id="document">
              <option value="value2" selected>Паспорт</option>
              <option value="value3">Свидетельство о рождении</option>
            </select>
            </label>
            <label className="input-documents-container">
	           <span className="name-label">Серия</span>
	           <input className='passenger-page-input'type="text"/>
            </label>
            <label className="input-documents-container">
	           <span className="name-label">Паспорт</span>
	           <input className='passenger-page-input' type="text"/>
            </label>
            </div>
            <div className="button-next-container">
                <button className="button-next-passenger">Следующий пассажир</button>
            </div>
            </div>
        </div>
      );
    }