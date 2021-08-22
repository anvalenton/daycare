import React from "react";
import "./DayHeaders2.css";
// import moment from 'moment';




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
    //BELOW CODE CAUSING BUGS. ISSUE WITH MOMENT JS? DAYJS also caused same issue
    //app will not load in browser. loading circle forever despite succesful compilation.no errors in console for Chrome. Firefox displays TypeError
    //error was TypeError b is undefined. in index.js. connected to redux

    // let next5WorkingDays = [];
    // let cur = moment();

    // const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


    // while (next5WorkingDays.length < 5) {
    
    //     let dayIs = cur.format('dddd');
    //     //if its a weekday. Sunday 0. Saturday is 6
    //     if (daysOfWeek.indexOf(dayIs) >=0 ) {
    //         console.log('inside here');
    //         let moDate = cur.format("M[/]YY")
    //         let workingDay = {'day':dayIs, 'monthDate': moDate}

    //         next5WorkingDays.push(workingDay);

    //         cur = moment().add(1, 'd');
    //     }

    // }    

    return (

        <div className='dayheader-container'>
           
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