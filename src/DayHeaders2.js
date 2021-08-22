import React, {useState, useEffect} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./DayHeaders2.css";
import moment from 'moment';
import uuid from 'react-uuid'

const DayHeaders2 = () => {

    // const curDayObject = moment(); 
    // const curDay = curDayObject.day(); 

    const workingDaysInStore= useSelector(st => (st.workingdays),shallowEqual);
   //returns 0 (sunday) to 6 (saturday);

    
    // const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

   

//    while (next5WorkingDays.length < 6) {
    
//         let dayIs = cur.format('dddd');
//         console.log('dayIs is', dayIs);
//         //if its a weekday. Sunday 0. Saturday is 6
//         if (daysOfWeek.indexOf(dayIs) >=0 ) {
           
//             let moDate = cur.format("M[/]YY")
//             let workingDay = {'day':dayIs, 'monthDate': moDate}

//             next5WorkingDays.push(workingDay);

//         }
//         cur = moment().add(1, 'd');
//         console.log('cur is', cur);
//     }    

//     console.log('next5working is', next5WorkingDays);

    return (

        <div className='dayheader-container'>
           
            <div className='days-container' >
                {next5WorkingDays.map((dayElem) => (
                   <div key={uuid()} className='wholeday-container'>

                        <div className='day-container'>
                        {dayElem.day}
                        </div>

                        <div>
                        {dayElem.monthDate}   
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )

}

export default DayHeaders2;