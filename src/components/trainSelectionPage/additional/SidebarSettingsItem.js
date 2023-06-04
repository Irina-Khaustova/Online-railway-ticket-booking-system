import { useState } from "react";
import { putValues } from "../../../store/slices/sidebarSettingsItem";
import { useSelector,useDispatch } from "react-redux";

export default function SidebarSettingsItem(props) {

const dispatch = useDispatch();

const [select, setSelect] = useState("train-selection-sidebar-railway-carriage-item-slider slider-off")

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

          return (
              <div className="train-selection-sidebar-railway-carriage-item">
                {props.children}
                <div className="">{props.type}</div>
                <div className={select} onClick={handleClick}>
                  <div className="off"></div>
                  <div className="on"></div>
                </div>
              </div>
          )    
        }
        