// import './Employee.css';
import React from "react";
import { useSelector, shallowEqual } from 'react-redux'
import Employee from "./Employee";


//RECEIVES  start time, end time, names based on group, color, attendance

const ShiftBlock = ({colorNum, startTime, endTime}) => {
    
//SHIFTBLOCK takes in one group or color, start time, end time, 

const colorKeys = {
    1: 'red', 2: 'blue', 3: 'yellow', 4: 'green'
}

let updatedShifts = useSelector(store => store.data, shallowEqual);

console.log('updatedShifts in ShiftBlock is', updatedShifts);
//compare group numbers on data to passed group number, if its a match and emp is working, render that <employee>

console.log('colorNum is', colorNum);

return (
<>
    <div>{startTime}</div>
        <div className='employeename-container' >

            {updatedShifts.map((worker) => {


                if (worker.group === colorNum && worker.working) {
                    console.log('hi im inside conditional');
                    return <Employee name={worker.name} group={colorKeys[colorNum]}></Employee>
                }

                

            })}

        </div>
    <div>{endTime}</div>

</>



)

};

export default ShiftBlock;