import InputSeats from "../additionals/InputSeats";
import WagonSchemeFourthClass from "./WagonSeatsFourthClass"; 
import { useGetWagonQuery } from "../../store/slices/MyApi";


export default function SeatsSelectionPageMain(props) {

  const {id} = props;
  console.log(id + 646)

  const { data: wagons, error, isLoading} = useGetWagonQuery(`${id}`);
  console.log(wagons)

  return (
    <>
      <div className="container seats-selection-page-container">
      <h3 className="seats-selection-page">ВЫБОР МЕСТ</h3>
       <div className="seats-selection-page seats-selection-page-departure">
        <div className="seats-selection-page-departure-header">
        <svg width="76" height="60" viewBox="0 0 76 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23877 0 0 2.23859 0 5V55C0 57.7614 2.23877 60 5 60H71C73.7612 60 76 57.7614 76 55V5C76 2.23859 73.7612 0 71 0H5ZM42.3628 32.8239V40C45.9434 36.6445 49.5586 33.2558 53 30.0664C49.5239 26.7774 45.9434 23.3887 42.3281 20V27.5747H23V32.8239H42.3628Z" fill="#FFA800"/>
</svg>
        <button className="seats-selection-page-choice-another-train-button">Выбрать другой поезд</button>
        </div>
        <div className="seats-selection-page-departure-about-train">
            <div className="directions-container">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.461 22.2222C19.7849 22.9136 20.7325 23.152 20.7685 24.0698C16.906 24.0698 13.0914 24.0698 9.22885 24.0698C9.28883 23.1639 10.2125 22.9136 10.5604 22.2342C10.2485 22.1626 9.96058 22.115 9.68468 22.0315C8.31719 21.6143 7.34556 20.3509 7.34556 18.9086C7.32157 15.8334 7.32157 12.782 7.33356 9.71865C7.33356 8.30023 7.99332 7.22747 9.32481 6.76261C10.4044 6.3931 11.556 6.16663 12.6955 6.05935C14.9267 5.85672 17.1699 5.85672 19.377 6.32158C19.9408 6.44078 20.4926 6.64341 20.9964 6.89372C22.076 7.4301 22.6398 8.3479 22.6518 9.52794C22.6758 12.6866 22.6878 15.8453 22.6518 19.004C22.6398 20.4582 21.5602 21.6978 20.1447 22.0554C19.9288 22.1269 19.7009 22.1626 19.461 22.2222ZM14.0151 9.82593C12.4077 9.82593 10.8362 9.82593 9.28883 9.82593C9.28883 11.4231 9.28883 12.9727 9.28883 14.5222C10.8842 14.5222 12.4316 14.5222 14.0151 14.5222C14.0151 12.9488 14.0151 11.4112 14.0151 9.82593ZM20.7325 9.82593C19.1251 9.82593 17.5537 9.82593 16.0063 9.82593C16.0063 11.4231 16.0063 12.9727 16.0063 14.5222C17.6017 14.5222 19.1491 14.5222 20.7325 14.5222C20.7325 12.9488 20.7325 11.4112 20.7325 9.82593ZM12.1198 18.8609C12.1318 18.0742 11.472 17.4187 10.6803 17.4187C9.91259 17.4187 9.26484 18.0385 9.24085 18.8013C9.21686 19.588 9.85262 20.2555 10.6443 20.2794C11.448 20.2913 12.1078 19.6476 12.1198 18.8609ZM20.7565 18.8371C20.7565 18.0504 20.0848 17.4068 19.2931 17.4187C18.5254 17.4306 17.8896 18.0623 17.8776 18.8252C17.8656 19.6119 18.5134 20.2674 19.3051 20.2794C20.1088 20.2794 20.7565 19.6238 20.7565 18.8371Z" fill="#FFA800"/>
<circle cx="15" cy="15" r="14" stroke="#FFA800" stroke-width="2"/>
</svg>
            <div className="directions-information">
            <div className="train-number">
            116C
            </div>
            <div className="from">Адлер</div>
              <div className="">Москва</div>
              <div className="point-of-departure"></div>
              <div className="to">Санкт-Петербург</div> 
              <div className="train-name">Волга</div>
            </div>
            </div>
        
            <div className="train-direction-item">
                <div className="train-direction-item-section departure-from">
                  <p className="date">00:10</p>
                  <p className="city">Москва</p>
                  <p className="station">Курский вокзал</p>
                </div>
                <div className="train-direction-item-section duration">
                  
                  <div className="right-arrow">
                  <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z" fill="#FFA800" fill-opacity="0.79"/>
</svg>
                  </div>
                </div>
                <div className="train-direction-item-section departure-to">
                <p className="date">15:20</p>
                  <p className="city">Санкт-Петербург</p>
                  <p className="station">Ладожский вокзал</p>
                </div>
              </div>
        <div className="direction-duration">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1454 29.9951C7.11437 30.2063 0.215587 23.5269 0.00493763 15.3691C-0.205712 7.13207 6.35076 0.188668 14.4871 0.00386308C22.9131 -0.180942 29.8119 6.28724 29.9962 14.6035C30.1805 22.9989 23.624 29.8103 15.1454 29.9951ZM27.4421 15.0259C27.4684 8.1881 21.9389 2.59114 15.0664 2.53834C8.29927 2.45913 2.61173 8.0825 2.5854 14.8939C2.53274 21.7845 8.16762 27.4607 14.9874 27.4607C21.8072 27.4607 27.4157 21.8373 27.4421 15.0259Z" fill="#FFA800"/>
<path d="M15.3296 14.3923C17.3571 13.4947 19.1476 12.6762 20.9381 11.8842C21.2278 11.7522 21.5174 11.5146 21.8071 11.541C22.2284 11.5674 22.6233 11.805 23.0446 11.937C22.8603 12.333 22.8077 12.9138 22.4917 13.0722C21.4648 13.6795 20.3589 14.1547 19.3056 14.6563C17.989 15.2899 16.6725 15.9499 15.3559 16.5571C14.171 17.1116 13.5917 16.7684 13.5654 15.5011C13.5391 12.6762 13.5127 9.85136 13.5917 7.02647C13.5917 6.63046 14.1447 6.23445 14.4343 5.83844C14.7503 6.23445 15.3033 6.60406 15.3033 7.00007C15.3822 9.37614 15.3296 11.7522 15.3296 14.3923Z" fill="#FFA800"/>
</svg>
<div className="direction-duration-information">
    <p className="">9 часов</p>
    <p className="">50 минут</p>
</div>
        </div>
       </div>
       <div className="seats-selection-page-departure-number-tickets">
        <h3 className="bold">Количество билетов</h3>
        <div className="seats-selection-page-departure-number-tickets-container">
        
           <InputSeats classContainer="adults-container-input number-item" ></InputSeats>

        
        <InputSeats classContainer="children-container-input number-item" ></InputSeats>
        
        <InputSeats classContainer="children-no-seat-container-input number-item" ></InputSeats>
        
        
       </div>
       </div>
       <div className="seats-selection-page-departure-type-wagon">
       <h3 className="bold">Тип вагона</h3>
       <div className="seats-selection-page-departure-type-wagon-container">
       <div className="seats-selection-page-departure-type-wagon-class fourth-class-container">
       <svg width="31" height="50" viewBox="0 0 31 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19.0289C0.307988 18.6378 0.559979 18.1523 0.951964 17.8691C2.23992 16.952 3.90585 17.5859 4.28384 19.1368C4.61983 20.5394 4.89982 21.9554 5.19381 23.3714C5.71179 25.8124 6.21577 28.2669 6.74775 30.7079C7.44772 33.8771 9.58964 35.5494 12.9635 35.5629C15.3714 35.5764 17.7653 35.5494 20.1732 35.5764C21.5872 35.5898 22.3852 36.2102 22.6092 37.397C22.8331 38.6782 21.9232 39.8649 20.5792 39.8784C17.4573 39.9054 14.3355 39.9863 11.2136 39.8515C7.37772 39.6896 3.80786 36.6418 2.81389 32.7847C2.16992 30.2628 1.69394 27.7005 1.13396 25.1651C0.769971 23.4793 0.377986 21.807 0 20.1213C0 19.7572 0 19.393 0 19.0289Z" fill="#C4C4C4"/>
<path d="M9.87021 0C10.9762 0.229264 11.9981 0.579903 12.8801 1.30815C14.714 2.8186 15.274 5.58325 14.126 7.63314C12.8801 9.87183 10.2622 10.9777 7.86828 10.2899C5.48837 9.60211 4.06042 7.94332 3.87843 5.44839C3.73844 3.53336 4.8024 1.51044 7.01431 0.512472C7.51829 0.283208 8.07827 0.175319 8.62425 0C9.03024 0 9.45022 0 9.87021 0Z" fill="#C4C4C4"/>
<path d="M24.667 34.5108C24.331 34.5108 24.0931 34.5108 23.8691 34.5108C20.2852 34.5108 16.7013 34.5243 13.1035 34.5108C10.3596 34.4973 8.51164 33.0408 7.97966 30.4515C7.05569 26.055 6.14572 21.6586 5.22176 17.2621C4.28379 12.7982 8.44164 10.6404 11.4235 11.571C13.3275 12.1643 14.3074 13.5399 14.6994 15.3336C15.4834 18.9344 16.2253 22.5352 16.9533 26.1359C17.0793 26.7833 17.2893 27.026 18.0173 27.0125C20.9292 26.9856 23.8411 26.9856 26.753 27.08C28.7269 27.1339 30.2528 28.6713 30.3928 30.5729C30.4208 30.8965 30.4348 31.2202 30.4348 31.5439C30.4348 36.5472 30.4348 41.5371 30.4348 46.5404C30.4348 46.9855 30.4348 47.444 30.3368 47.8755C30.0288 49.2376 28.7969 50.0873 27.3549 49.9929C25.941 49.8985 24.835 48.86 24.695 47.4845C24.667 47.1608 24.667 46.8371 24.667 46.5135C24.667 42.7778 24.667 39.0287 24.667 35.293C24.667 35.0637 24.667 34.821 24.667 34.5108Z" fill="#C4C4C4"/>
</svg>
<p className="">Сидячий</p>
       </div>
       <div className="seats-selection-page-departure-type-wagon-class third-class-container">
       <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.4854 0H4.51465C2.03174 0 0 2.0293 0 4.50958V45.4904C0 47.9707 2.03174 50 4.51465 50H17.6475H18.6475H45.4854C47.9683 50 50 47.9707 50 45.4904V4.50958C50 2.0293 47.9683 0 45.4854 0ZM18.6475 47.1815H35.1582C36.3994 47.1815 37.4155 46.1669 37.4155 44.9268H37.3589V40.868C37.3589 39.6279 36.3433 38.6133 35.1016 38.6133H18.6475V47.1815ZM17.6475 38.6133H14.8418C13.6006 38.6133 12.5845 39.6279 12.5845 40.868V44.9268C12.5845 46.1669 13.6006 47.1815 14.8418 47.1815H17.6475V38.6133ZM6.60254 29.0868C5.64355 29.0868 4.85352 28.2976 4.85352 27.3394V11.7646H13.4312V27.3394C13.4312 28.2976 12.6411 29.0868 11.6816 29.0868H6.60254ZM4.85352 6.08795V10.7646H13.4312V6.08795C13.4312 5.12964 12.6411 4.34045 11.6816 4.34045H6.60254C5.64355 4.34045 4.85352 5.12964 4.85352 6.08795ZM36.0044 27.283V11.7646H44.6387V27.283C44.6387 28.2976 43.7925 29.1432 42.7764 29.1432H37.8667C36.8511 29.1432 36.0044 28.2976 36.0044 27.283ZM36.0044 10.7646H44.6387V6.14429C44.6387 5.12964 43.7925 4.28412 42.7764 4.28412H37.8667C36.8511 4.28412 36.0044 5.12964 36.0044 6.14429V10.7646Z" fill="#C4C4C4"/>
</svg>
<p className="">Плацкарт</p>
       </div>
       <div className="seats-selection-page-departure-type-wagon-class second-class-container">
       <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.51465 0H45.4854C47.9683 0 50 2.04547 50 4.54547V45.4546C50 47.9546 47.9683 50 45.4854 50H4.51465C2.03174 50 0 47.9546 0 45.4546V4.54547C0 2.04547 2.03174 0 4.51465 0ZM38.6006 6.25C37.3589 6.25 36.3433 7.27271 36.3433 8.52271V13.7059H44.9775V8.52271C44.9775 7.27271 43.9614 6.25 42.7202 6.25H38.6006ZM44.9775 14.7059H36.3433V29.5455C36.3433 30.7955 37.3589 31.8182 38.6006 31.8182H42.7202C43.9614 31.8182 44.9775 30.7955 44.9775 29.5455V14.7059ZM13.3745 13.7059V8.75C13.3745 7.38635 12.2461 6.25 10.8916 6.25H7.22363C5.86914 6.25 4.74023 7.38635 4.74023 8.75V13.7059H13.3745ZM4.74023 14.7059H13.3745V29.375C13.3745 30.7386 12.2461 31.875 10.8916 31.875H7.22363C5.86914 31.875 4.74023 30.7386 4.74023 29.375V14.7059ZM44.8081 49.2046C47.1782 49.2046 49.1533 47.2727 49.1533 44.8296V36.7046H0.84668V44.8296C0.84668 47.2159 2.76514 49.2046 5.19189 49.2046H44.8081Z" fill="#C4C4C4"/>
</svg>
<p className="">Купе</p>
       </div>
       <div className="seats-selection-page-departure-type-wagon-class first-class-container">
       <svg width="57" height="50" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.2258 0L34.8606 19.0776H56.4516L39.0213 30.9224L45.6561 50L28.2258 38.26L10.7955 50L17.4303 30.9224L0 19.0776H21.5911L28.2258 0Z" fill="#FFA800"/>
</svg>
<p className="">Люкс</p>
       </div>
       </div>
       
        </div> 
        <div className="seats-selection-page-departure-number-wagon">
          <span className="">Вагоны</span>
          <span className="">Нумерация вагонов начинается с головы поезда</span>
        </div>
        <div className="seats-selection-page-departure-wagon-information">
          <div className="seats-selection-page-departure-wagon-item information-container">
            <p className="wagon-number">02</p>
            <p className="wagon-text"> вагон</p>
            </div>
          <div className="seats-selection-page-departure-wagon-item information-seats">
          <div className="information-seats-header">Места 8</div>
          <div className="">
            <p className="information-seats-text">Верхние: 5</p>
            <p className="information-seats-text">Нижние: 3</p>
          </div>
          </div>
          <div className="seats-selection-page-departure-wagon-item price-seats">
          <div className="information-seats-header">Стоимость</div>
          <div className="">
            <p className="information-seats-text">1250</p>
            <p className="information-seats-text">2500</p>
          </div>
        </div>
        <div className="seats-selection-page-departure-wagon-item service-seats">
            <div className="information-seats-header-container">
             <p className="information-seats-header">Обслуживание</p>
             <p className="information-seats-header-light">ФПК</p>
              </div>
            <div className="information-seats-text">2950 p</div>
        </div>
       </div>
       <WagonSchemeFourthClass></WagonSchemeFourthClass>
       <div className="final-coast">2960 </div>
       </div>
       <div className="seats-selection-page seats-selection-page-arrival"></div>  
       </div>
    </>
  );
}