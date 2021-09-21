import React, {useEffect} from 'react'
import useTimer from '../hooks/useTimer'

const Timer = () => {
   const {timer, start} = useTimer()

    useEffect(() => {
        start()
    }, [])

    return (
        <div className="time">
            {timer}
        </div>
    )
}

export default Timer

