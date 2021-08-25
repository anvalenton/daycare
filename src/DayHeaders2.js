import React, {useEffect} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./DayHeaders2.css";
import { checkOrUpdateWorkingDays } from "./actionCreators";
import uuid from 'react-uuid'

const DayHeaders2 = () => {

   
    const dispatch = useDispatch();

    const workingDaysInStore= useSelector(st => st.workingdays,shallowEqual);

    useEffect(() => {
        
        const updatedDays = checkOrUpdateWorkingDays(workingDaysInStore);
         //updates days in store array after render. will cause rerender
            //if workingdays array is not current
        dispatch(updatedDays);

        //below code gets rid of error of missing dependency. if i add dispatch or workingDaysInstore to dependency, it will create an infinite loop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    


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