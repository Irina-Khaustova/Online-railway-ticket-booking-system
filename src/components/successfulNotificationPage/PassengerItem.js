export default function PassengerItem(props) {

  const el = props.el

  console.log(el)

      return (
        <div className="succesful-passenger-item-container">
        <div className='succesful-type-container'>
        <div className="succesful-passenger-number-container">
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34 0C15.2492 0 0 15.2492 0 34C0 52.7508 15.2492 68 34 68C52.7508 68 68 52.7508 68 34C68 15.2492 52.7508 0 34 0ZM33.887 16.3787C38.8571 16.3787 42.9236 20.3322 42.9236 25.3023C42.9236 30.2724 38.9701 34.3389 34 34.3389C29.0299 34.3389 24.9635 30.2724 24.9635 25.3023C25.0764 20.4452 29.0299 16.3787 33.887 16.3787ZM51.9601 52.186C39.8738 52.186 28.1262 52.186 16.2658 52.186C15.701 46.5382 15.701 44.392 21.3488 41.6811C29.7076 37.7276 38.2924 37.7276 46.7641 41.6811C47.8937 42.1329 48.9103 42.9236 49.8139 43.6013C51.2824 44.8439 52.0731 46.4252 51.9601 48.3455C51.9601 49.701 51.9601 50.8306 51.9601 52.186Z" fill="#FFA800"/>
</svg>
        </div>
            <div className="succesful-passenger-text">{el.is_adult? 'Взрослый' : 'Детский'}</div>
        </div> 
        <div className='succesful-confirmation-passengers-item-container'>
        <div className="succesful-confirmation-passenger succesful-passenger-text">{el.passenger.first_name + ' '+ el.passenger.last_name + ' '+ el.passenger.patronymic}</div>
        <div className="succesful-confirmation-passenger text-gray">Пол {el.passenger.gender === 'true'? 'Мужской' : 'Женский'}</div>
        <div className="succesful-confirmation-passenger text-gray">Дата рождения {el.passenger.birthday}</div>
        <div className="succesful-confirmation-passenger text-gray">{el.passenger.document_type + el.passenger.document_data}</div>
        </div> 
      </div>
      );
    }