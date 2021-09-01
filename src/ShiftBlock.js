
import React from "react";
import "./ShiftBlock.css";
import './Employee.css';


const ShiftBlock = ({hoursObj, roomObj, dateObj, pmEmployees, amEmployees}) => {
   


const {shiftGrp} = dateObj;
const {amStart, amEnd, pmStart, pmEnd} = hoursObj;
const shifts = roomObj[shiftGrp];
const amShiftColor = shifts.AM;
const pmShiftColor = shifts.PM

return (
<>
    <div className='shiftblock-container-ampm'>
    
        <div className={'shiftblock-container amshiftblock'}> 
            <div className='shiftblock-subcontainer-starttime time'>{amStart}</div>

                <div className='shiftblock-subcontainer-emp'>
                    {amEmployees.map((worker) => {
                        return <div key={`${worker.name}-${amShiftColor}`} className={`employeename-subcontainer ${amShiftColor}`} >
                            <span className='employeename'>{worker.name}</span>
                        </div>
                    })}
                </div>
            <div className="time">{amEnd}</div>
        </div> 

        <div className={'shiftblock-container pmshiftblock'}> 
            <div className='shiftblock-subcontainer-starttime time'>{pmStart}</div>

                <div className='shiftblock-subcontainer-emp'>
                    {pmEmployees.map((worker) => {
                        return <div key={`${worker.name}-${pmShiftColor}`} className={`employeename-subcontainer ${pmShiftColor}`} >
                            <span className='employeename'>{worker.name}</span>
                        </div>
                    })}
                </div>
            <div className="time">{pmEnd}</div>
        </div> 
    </div>

</>
)

};

export default ShiftBlock;