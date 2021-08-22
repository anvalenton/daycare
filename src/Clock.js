import React, {useState, useEffect} from "react";
import moment from 'moment';
import './Clock.css';


const Clock = () => {


    let timeNow = moment().format('LTS'); 
    const [clock, updateClock] = useState(timeNow);

    useEffect(() => {

        const timerID = setInterval(() => {
            updateClock(moment().format('LTS'))

        },1000)

        return () => clearInterval(timerID);

    }, [])

    return (
        <div className="clock-container">
            <div className='clock-date'>{moment().format("MMMM D YYYY")}</div>
            <div className='clock'>{clock}</div>


        </div>
        


    )


}


export default Clock;