import React from "react";
import Icons from "../src/Icons.svg"

const Icon = ({name, color,size}) => (
    <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
        <use xlinkHref={`${Icons}#icon-${name}`}/>
    </svg>
    );
    export default Icon;
