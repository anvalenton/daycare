import React, {useEffect} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./DayHeaders2.css";
import { checkOrUpdateWorkingDays } from "./actionCreators";
import uuid from 'react-uuid'

const DayHeaders2 = () => {

   
    const dispatch = useDispatch();

    const workingDaysInStore= useSelector(st => st.workingdays,shallowEqual);
    const updatedDays = checkOrUpdateWorkingDays(workingDaysInStore);
    //updates days in store array after render. will cause rerender
    //if workingdays array is not current
    useEffect(() => {

        if (!updatedDays.length === undefined) {

            dispatch(checkOrUpdateWorkingDays(updatedDays))
        }
        

    }, [dispatch, updatedDays])
    


    return (

        <div className='dayheader-container'>
           
            <div className='days-container' >
                {workingDaysInStore.map((dayElem) => (
                   <div key={uuid()} className='wholeday-container'>

                        <div className='day-container'>
                        {dayElem.day}
                        </div>

                        <div>
                        {dayElem.moDate}   
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )

}

export default DayHeaders2;