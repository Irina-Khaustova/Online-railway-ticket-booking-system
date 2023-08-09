import { useState } from "react";
import { putValues } from "../../../store/slices/sidebarSettingsItem";
import { useSelector,useDispatch } from "react-redux";
import Range from "./Range";

export default function SidebarChoiceTime(props) {
const dispatch = useDispatch();

const [] = useState("")


          return (
              <div className={props.classValue}>
                <div className="side-bar-choce-time-item-container side-bar-choce-time-item-container-from">
                <div className="side-bar-choce-time-item side-bar-choce-time-item-from">Время отбытия</div>
               <> <Range type={`start${props.type}`} begin='0:00' end='24:00' add=':00' min='0' max='24'></Range></>
                </div>
                <div className="side-bar-choce-time-item-container side-bar-choce-time-item-container-to">
                <div className="side-bar-choce-time-item side-bar-choce-time-item-to">Время прибытия</div>
                <><Range type={`end${props.type}`} begin='0:00' end='24:00' add=':00' min='0' max='24'></Range></>
                </div>
              </div>
          )    
        }
        