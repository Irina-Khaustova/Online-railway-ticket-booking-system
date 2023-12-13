import { useEffect, useState } from "react";
import { putValues } from "../../../store/slices/sidebarSettingsItem";
import { useSelector,useDispatch } from "react-redux";

export default function SidebarSettingsItem(props) {

const dispatch = useDispatch();

const [select, setSelect] = useState("train-selection-sidebar-railway-carriage-item-slider slider-off");
const [type, setType] = useState('');
const {parameters} = useSelector(state => state.sidebarSettingsItem);

useEffect(() => {
  if(parameters.includes(props.id)) {
    dispatch(putValues({type: props.id, meaning: true}));
    setSelect("train-selection-sidebar-railway-carriage-item-slider slider-on");
  }
  if(props.id === 'have_first_сlass') {
    setType('Люкс') 
    } else if(props.id === 'have_second_сlass') {
      setType('Купе')
    } else if(props.id === 'have_third_сlass') {
      setType('Плацкарт')
    } else if(props.id === 'have_fourth_сlass') {
      setType('Сидячий')
    } else if(props.id === 'have_wifi') {
      setType('WI-FI')
    } else if(props.id === 'is_express') {
      setType('Экспресс')
    }
},[])

const handleClick = (evt) => {
  console.log()
  if(evt.target.className === "off") {
    setSelect("train-selection-sidebar-railway-carriage-item-slider slider-off");
    dispatch(putValues({type: props.id, meaning: false}))
    console.log(44)
  }
  if(evt.target.className === "on") {
    setSelect("train-selection-sidebar-railway-carriage-item-slider slider-on");
    dispatch(putValues({type: props.id, meaning: true}))
  }
}

const handleClickOff = () => {
  console.log(3)
}

const handleClickOn = () => {
  console.log(3)
}

          return (
              <div className="train-selection-sidebar-railway-carriage-item">
                {props.children}
                <div className="">{type}</div>
                <div className={select} onClick={handleClick}>
                  <div className="off" onClick={handleClickOff}></div>
                  <div className="on" onClick={handleClickOn}></div>
                </div>
              </div>
          )    
        }
        