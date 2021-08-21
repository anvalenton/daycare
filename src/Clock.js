import React, {useState, useEffect} from "react";
import moment from 'moment';


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
        <div>
            <div>{moment().format("MMM Do YY")}</div>
            <div>{clock}</div>


        </div>
        


    )


}


export default Clock;