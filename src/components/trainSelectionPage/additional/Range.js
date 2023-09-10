import ReactSlider from "react-slider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putTime } from "../../../store/slices/sidebarSettingsItem";
import { sidebarSettingsItem } from "../../../store/slices/sidebarSettingsItem";


export default function Range(props) {

    console.log(typeof(props.max), props.max)

    const add = props.add;
    const [value, setValue] = useState([0, 24]);   
    const [classCloseBegin, setClassCloseBegin] = useState("") 
    const [classCloseEnd, setClassCloseEnd] = useState("")
    const dispatch = useDispatch();

    const {startDepartureHourFrom, startDepartureHourTo, startArrivalHourFrom, startArrivalHourTo,
    endDepartureHourFrom, endDepartureHourTo, endArrivalHourFrom, endArrivalHourTo} = useSelector((state) => state.sidebarSettingsItem);

    useEffect(() => {
      if (startDepartureHourFrom < 4 || startArrivalHourFrom < 4 )  {
        setClassCloseBegin('close')
        console.log(44444)
      } else {
        setClassCloseBegin('')
        console.log(222222)
      }
      if (startDepartureHourTo > 20 || startArrivalHourTo > 20 )  {
        setClassCloseEnd('close')
      } else {
        setClassCloseEnd('')
      }
      console.log(classCloseBegin)
    }, [startDepartureHourFrom, startDepartureHourTo, startArrivalHourFrom, startArrivalHourTo,
        endDepartureHourFrom, endDepartureHourTo, endArrivalHourFrom, endArrivalHourTo])

  const handleChange = () => {

  }

return (
<div className="range">
    <div className="range-text-begin" id={classCloseBegin}>{props.begin}</div>
<ReactSlider
    value={value}
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    defaultValue={[Number(props.min), Number(props.max)]}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext ={state => `Thumb value ${state.valueNow}`}
    onChange={(value, state) => {setValue(state.valueNow)
    dispatch(putTime({type: `${props.type}From`, value: value[0]}))
    dispatch(putTime({type: `${props.type}To`, value: value[1]}))}}
    renderThumb={(props, state) => <div {...props}>{<><div className="test">{`${state.valueNow}${add}`}</div></>}</div>}
    pearling
    min={Number(props.min)}
    max={Number(props.max)}
    minDistance={2}
/>
<div className="range-text-end" id={classCloseEnd}>{props.end}</div>
</div>
      )
      }