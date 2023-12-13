import { useSelector } from "react-redux";

export default function PassengerPageSidebar() {

    const {chooseTrainItem} = useSelector(state => state.chooseTrainItem)

    console.log()

    console.log(chooseTrainItem)
    

    const handleClickButton = (evt) => {
      if(evt.target.className === 'passenger-page-sidebar-direction-minus') {
      evt.target.className = 'passenger-page-sidebar-direction-plus';
      evt.target.parentNode.nextSibling.className ='close';
    } else {
      evt.target.className = 'passenger-page-sidebar-direction-minus';
      evt.target.parentNode.nextSibling.className ='passenger-page-sidebar-item-main';
    }

   
}
const convert = (x) => {
  const milliseconds = x*1000;
  const seconds = Math.floor((milliseconds/1000) % 60);
  const minutes = Math.floor((milliseconds /1000 /60) % 60);
  const hours = Math.floor((milliseconds /1000 / 60 / 60) % 60);

return [
  hours.toString().padStart(2, "0"),
  minutes.toString().padStart(2, "0"),
].join(":");

}
  
      return (
        <>
  <div className="passenger-page-sidebar" >
  <div className="passenger-page-sidebar-header">
    ДЕТАЛИ ПОЕЗДКИ
  </div>
  <div className="passenger-page-sidebar-item-container">
    <div className="passenger-page-sidebar-item-header">
    <div className="">
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23853 0 0 2.23859 0 5V21C0 23.7615 2.23853 26 5 26H27C29.7615 26 32 23.7615 32 21V5C32 2.23859 29.7615 0 27 0H5ZM17.8372 14.2238V17.3334L17.8811 17.2911C19.374 15.8507 20.8811 14.3975 22.3159 13.0288L22.2261 12.9413C20.7908 11.5435 19.3137 10.1051 17.8225 8.66669V11.9491H9.68433V14.2238H17.8372Z" fill="#FFA800"/>
</svg>


    </div>
    <span className='passenger-page-sidebar-item-header-title'>Туда</span>
    <div className="passenger-page-sidebar-item-header-date">{new Date((Number(chooseTrainItem.departure.from.datetime))*1000).toLocaleDateString()}</div>
    <div className="passenger-page-sidebar-direction-minus" onClick={handleClickButton}></div>  
    </div>  
     <div className="passenger-page-sidebar-item-main">
       <div className="number-of-train-container text-block">
         <p className="text-think">№ Поезда</p>
          <p className="text-bold"> {chooseTrainItem.departure.train.name.replace(/[^0-9]/g,"")}</p>
         </div>
       <div className="name-of-train-container text-block-name">
         <p className="text-think"> Название</p>
          <p className="text-bold"> {chooseTrainItem.departure.from.city.name} <br/> {chooseTrainItem.departure.to.city.name}</p>
         </div>
       <div className="number-of-train-container text-block-end">
         <p className="text-bold"></p>
         </div>
        <div className="number-of-train-container text-block">
         <p className="time-begin text-bold"> {new Date(chooseTrainItem.departure.from.datetime*1000).toLocaleDateString()}</p>
          <div className="duration">
           <div className="text-think">{convert(chooseTrainItem.departure.duration)}</div>
          <div className="text-think">text-think</div>
          </div>
          <p className="time-end text-bold"> 10:30</p>
         </div>
        <div className="text-block">
          <div className="time text-think">31.08.2023</div>
          <div className="time text-think">01.09.2023</div>
        </div>
        <div className="text-block">
          <div className="point text-think">Москва</div>
          <div className="point text-think">Санкт-Петербург</div>
        </div>
        <div className="text-block railway-station">
          <div className="point text-medium">Курский</div>
          <div className="point text-medium">Курский</div>
        </div>
         <div className="text-block railway-station">
          <div className="point text-medium">Вокзал</div>
          <div className="point text-medium">Вокзал</div>
        </div>
    </div>   
    <div className="passenger-page-sidebar-item-container">
    <div className="passenger-page-sidebar-item-header">
    <div className="passenger-page-sidebar-item-header-image">
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M27 0C29.7615 0 32 2.23853 32 5V21C32 23.7615 29.7615 26 27 26H5C2.23853 26 0 23.7615 0 21V5C0 2.23853 2.23853 0 5 0H27ZM14.1628 14.2236V17.3333L14.0522 17.2267C12.5811 15.8075 11.0977 14.377 9.68408 13.0288L9.80811 12.908C11.2327 11.5205 12.6982 10.0935 14.1775 8.66663V11.949H22.3157V14.2236H14.1628Z" fill="#FFA800"/>
</svg>
    </div>
    <span className='passenger-page-sidebar-item-header-title'>Обратно</span>
    <div className='passenger-page-sidebar-item-header-date'>{new Date((Number(chooseTrainItem.departure.to.datetime))*1000).toLocaleDateString()}</div>
    <div className="passenger-page-sidebar-direction-minus"onClick={handleClickButton}></div>  
    </div>  
     <div className="passenger-page-sidebar-item-main">
       <div className="number-of-train-container text-block">
         <p className="text-think"></p>
          <p className="text-bold"> 116С</p>
         </div>
       <div className="name-of-train-container text-block-name">
         <p className="text-think"> Название</p>
          <p className="text-bold"> Адлер</p>
         </div>
       <div className="number-of-train-container text-block-end">
         <p className="text-bold"> Санкт-Петербург</p>
         </div>
        <div className="number-of-train-container text-block">
         <p className="time-begin text-bold"> 10:30</p>
          <div className="duration">
           <div className="text-think">длительность</div>
          <div className="text-think">text-think</div>
          </div>
          <p className="time-end text-bold"> 10:30</p>
         </div>
        <div className="text-block">
          <div className="time text-think">31.08.2023</div>
          <div className="time text-think">01.09.2023</div>
        </div>
        <div className="text-block">
          <div className="point text-think">Москва</div>
          <div className="point text-think">Санкт-Петербург</div>
        </div>
        <div className="text-block railway-station">
          <div className="point text-medium">Курский</div>
          <div className="point text-medium">Курский</div>
        </div>
         <div className="text-block railway-station">
          <div className="point text-medium">Вокзал</div>
          <div className="point text-medium">Вокзал</div>
        </div>
    </div> 
      <div className="passenger-page-sidebar-item-header">
    <div className="">значок</div>
    <div className="">Пассажиры</div>
    <button className="">кнопка</button>  
    </div>
      <div className="passengers-container">
        
        <div className="text-block">
        <div className="text-think passengers">Взрослых</div>
          <div className="">5000 </div>
        </div> 
         <div className="text-block">
        <div className="text-think passengers">Ребенок</div>
          <div className="">1500</div>
        </div>
  </div>
      <div className="total-cost-container">
        <div className="total-cost">ИТОГО</div>
         <div className="point text-medium">7500 руб.</div>
      </div>
  </div>
</div>
</div>
</>
      );
}