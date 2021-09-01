// import './Employee.css';
import React from "react";
import { useSelector, shallowEqual } from 'react-redux'
import "./ShiftBlock.css";
import './Employee.css';


const ShiftBlock = ({colorNum, startTime, endTime, className}) => {
    
//refers to shift designations
const colorKeys = {
    1: 'red', 2: 'blue', 3: 'yellow', 4: 'green'
}

//shallowEqual compares store value to previous store value
let updatedShifts = useSelector(store => store.data, shallowEqual);

//compare group numbers on data to passed group number, if its a match and emp is working, render that <employee>
let workersToDisplay = updatedShifts.filter((worker) => {
    return (worker.group === colorNum) && worker.working}); 

//if array is empty at least render "none" to show no available employee for that shift
if (workersToDisplay.length === 0) {
    workersToDisplay = [{name: 'None'}]
}

return (
<>
     
    <div className={`shiftblock-container ${className}`}> 
    <div className='shiftblock-subcontainer-starttime time'>{startTime}</div>

        <div className='shiftblock-subcontainer-emp'>

            {workersToDisplay.map((worker) => (
                

                <div key={`${worker.name}-${colorKeys[colorNum]}`} className={`employeename-subcontainer ${colorKeys[colorNum]}`} >

                    <span className='employeename'>{worker.name}</span>
                </div>
            ))}
        </div>

    <div className="time">{endTime}</div>
    </div>       
</>
)

};

export default ShiftBlock;