import React from "react";
import "./DayHeaders2.css";
import Clock from "./Clock";



const DayHeaders2 = () => {

    //static obj but can be retrieved through API in future

    const nextWorkingDays = [
        {'day': 'Monday',
         'date': 23,
         'month': 8  },
         {'day': 'Tuesday',
         'date': 24,
         'month': 8  },
         {'day': 'Wednesday',
         'date': 25,
         'month': 8  },
         {'day': 'Thursday',
         'date': 26,
         'month': 8  },
         {'day': 'Friday',
         'date': 27,
         'month': 8  },
         
    ]

    return (

        <div className='dayheader-container'>
            <Clock></Clock>
            <div className='days-container' >
                {nextWorkingDays.map((dayElem) => (
                   <div className='wholeday-container'>

                        <div className='day-container'>
                        {dayElem.day}
                        </div>

                        <div>
                        {`${dayElem.month}/${dayElem.date}`}   
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )

}

export default DayHeaders2;