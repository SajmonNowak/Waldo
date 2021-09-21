import React from 'react'
import Timer from 'react-compound-timer/build'

const TimerComponent = () => {

    return (
        <Timer formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`} >
            <Timer.Minutes/>: 
            <Timer.Seconds/>
        </Timer>
    )
}

export default TimerComponent;

