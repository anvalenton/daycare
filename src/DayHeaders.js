import React from "react";

// import DayJS from 'react-dayjs';
import dayjs from 'dayjs';



const DayHeaders = () => {

    // const today = new Date();
    // const day = today.getDay();
    // const date = today.getDate();
    // const year = dayjs().get('year');
    // console.log(year);
    // const twoUnitYr = year.slice(2);

 
    // console.log('dayjs is', dayjs())
    // console.log('day is', dayjs().day())
    // console.log('date is', dayjs().date())
    // console.log('to string is', dayjs().get('year'))
    console.log('next',dayjs().add(1,'day') )

    let next5WorkingDays = [];
    let curDateObj = dayjs();
    const daysOfWeek = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    // while (next5WorkingDays.length < 5) {
    
    //     let dayIs = curDateObj.day();
    //     //if its a weekday. Sunday 0. Saturday is 6
    //     if (dayIs >= 1 && dayIs <6 ) {
    //         console.log('inside here');
    //         let month = curDateObj.get('month');
    //         let year = curDateObj.get('year');
    //         let day = daysOfWeek[curDateObj.get('day')];
    //         let twoDigitYr = year.slice(2);

    //         let workingDay = {day, month, year: twoDigitYr}

    //         next5WorkingDays.push(workingDay);
    //         curDateObj = curDateObj.add(1,'day');
    //     }

    // }    

    console.log('array is', next5WorkingDays);

    return (

        <div className='dayheader-container'>
            <div>hello      
            </div>

        </div>

    )


}

export default DayHeaders;