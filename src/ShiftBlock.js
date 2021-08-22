// import './Employee.css';
import React from "react";
import { useSelector, shallowEqual } from 'react-redux'
import Employee from "./Employee";
import "./ShiftBlock.css";
import uuid from 'react-uuid';

const ShiftBlock = ({colorNum, startTime, endTime, className}) => {
    

const colorKeys = {
    1: 'red', 2: 'blue', 3: 'yellow', 4: 'green'
}

let updatedShifts = useSelector(store => store.data, shallowEqual);

//compare group numbers on data to passed group number, if its a match and emp is working, render that <employee>
let workersToDisplay = updatedShifts.filter((worker) => {
    return (worker.group === colorNum) && worker.working}); 

if (workersToDisplay.length === 0) {
    workersToDisplay = [{name: 'None'}]
}

return (
<>
     
    <div className={`shiftblock-container ${className}`}> 
    <div className='shiftblock-subcontainer-starttime time'>{startTime}</div>

        <div className='shiftblock-subcontainer-emp'>

            {workersToDisplay.map((worker) => (
                 <Employee key={uuid()} name={worker.name} group={colorKeys[colorNum]}></Employee>
            ))}

        </div>

    <div className="time">{endTime}</div>
    </div>       
</>



)

};

export default ShiftBlock;