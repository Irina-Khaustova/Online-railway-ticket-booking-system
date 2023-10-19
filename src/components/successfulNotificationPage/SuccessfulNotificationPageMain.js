import { useState, useEffect } from "react";
import { usePutOrderMutation } from "../../store/slices/MyApi";
import { putUser } from "../../store/slices/passengers";
import { useDispatch } from "react-redux";
import validationString from "../passengerPage/additionals/validation";
import { validationTel } from "../passengerPage/additionals/validation";

export default function SuccessfulNotificationPageMain() {


    const [classButton, setClassButton] = useState('seats-selection-button-next gray')
    const [classDisplay, setClassDisplay] = useState('passengers-information-display-none')

    

    const dispatch = useDispatch();
    const data = {
        "user": {
          "first_name": "string",
          "last_name": "string",
          "patronymic": "string",
          "phone": "string",
          "email": "string",
          "payment_method": "cash"
        },
        "departure": {
          "route_direction_id": "string",
          "seats": [
            {
              "coach_id": "string",
              "person_info": {
                "is_adult": true,
                "first_name": "string",
                "last_name": "string",
                "patronymic": "string",
                "gender": true,
                "birthday": "string",
                "document_type": "string",
                "document_data": "string"
              },
              "seat_number": 0,
              "is_child": true,
              "include_children_seat": true
            }
          ]
        },
        "arrival": {
          "route_direction_id": "string",
          "seats": [
            {
              "coach_id": "string",
              "person_info": {
                "is_adult": true,
                "first_name": "string",
                "last_name": "string",
                "patronymic": "string",
                "gender": false,
                "birthday": "string",
                "document_type": "string",
                "document_data": "string"
              },
              "seat_number": 0,
              "is_child": true,
              "include_children_seat": true
            }
          ]
        }
      }

    const [putOrder, result] = usePutOrderMutation()

    useEffect(() => {
      console.log(result)
    },[])

    const handleClickOpen = (evt) => {
      
    } 
    
   
    const handleClickClose = () => {

    } 

    const handleChangeValue = (evt) => {
     
    }



    const handleClick  = (evt) => {
      putOrder(`${data}`)
    }

    const handleChangeCheckbox = (evt) => {
        
     
        
    }
      return (
        <>
        <div className='order-confirmation-container'>
        <div className='order-confirmation-train'>
           <div className='order-confirmation-train-title-container'>
             Поезд
        </div>
          <div className='order-confirmation-train-inform-container'>
          <div className='order-confirmation-train-main-inform'>
             Тоже Поезд
        </div>
          <div className='order-confirmation-train-detailed-inform'>
            <div className='order-confirmation-train-detailed-inform-date'>
               <div className='order-confirmation-train-detailed-inform-date-departure'>
                 <div className="">
                 <div className="item-date">00:10</div>
                 <div className="item-town">Москва</div>
                 <div className="item-railway-station">Курский вокзал</div>
                 </div>
                  <div className="">
                    <div className="item-duration">1:49</div>
                 <div className="">стрелочка</div>
                 </div>
                  <div className="">
                 <div className="item-date">10:20</div>
                 <div className="item-town">Адлер</div>
                 <div className="item-railway-station">Морской вокзал</div>
                 </div>
                 
            </div>
              <div className='order-confirmation-train-detailed-inform-date-departure'>
                 <div className="">
                 <div className="item-date">00:10</div>
                 <div className="item-town">Москва</div>
                 <div className="item-railway-station">Курский вокзал</div>
                 </div>
                  <div className="">
                    <div className="item-duration">1:49</div>
                 <div className="">стрелочка</div>
                 </div>
                  <div className="">
                 <div className="item-date">10:20</div>
                 <div className="item-town">Адлер</div>
                 <div className="item-railway-station">Морской вокзал</div>
                 </div>
                 
            </div>
            </div>
              <div className='order-confirmation-train-detailed-inform-date-arrival'>
              </div>
               <div className='order-confirmation-train-detailed-inform-price'>
             </div>
        </div>
        </div>
          </div>
        </div>
         <div className='order-confirmation-passengers'>
        </div>
        <div className="" onClick={handleClick}>Привет</div>
      </>
      );
    }