import React from "react";

const WeatherDisplay=({weather})=>{
   // const{temperature,conditions}=weather;


    const changecolor={
        color:weather.temperature > 20 ? "red":"blue"
    }
    return(
        <div>
            <p>
                Temperature: <span style={changecolor}>{weather.temperature}</span>
            </p>
            <p>Conditions: {weather.conditions}</p>
        </div>
    )
}

export default WeatherDisplay;
