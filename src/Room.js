import React from "react";
import "./Room.css";
import ShiftBlock from "./ShiftBlock";
import { shallowEqual, useSelector} from "react-redux";


const Room = ({roomNum, roomData}) => {


const hours = useSelector(st => st.hours);
const days =  useSelector(st =>st.workingdays, shallowEqual);
const roomSked = useSelector(st => st[`room${roomNum}`]);
const employees = useSelector (st => st.data, shallowEqual);
const numKeys = useSelector(st => st.numKeys2);

const empAndDayMatchedArray = [];

//loops below match employees to their designated days
//so child components do not need to filter the array again
for (let day of days) {
                    //e.g. 'A', 'B'
    let shiftGroup = day.shiftGrp;
    let amEmpGroup =[];
    let pmEmpGroup =[];
                  //e.g. {'a': {'am: 'red', 'pm': 'blue'}}
    let daySked = roomSked[shiftGroup]

    for (let emp of employees) {
            //e.g. 1,2         
        if (numKeys[emp.group].color === daySked.AM  ) {
            amEmpGroup.push(emp);
        }

        if (numKeys[emp.group].color === daySked.PM  ) {
            pmEmpGroup.push(emp);
        }

    }
    if (!amEmpGroup.length) amEmpGroup.push({name: 'None'})
    if (!pmEmpGroup.length) pmEmpGroup.push({name: 'None'});

    empAndDayMatchedArray.push({day, amEmpGroup,pmEmpGroup})
}


return (

    <div className='room-container'>
        <div className='room-container-roomnum-container'>
            <div className={`room-container-roomnum room${roomNum}`}>ROOM {roomNum}</div>
       </div>

       <div className='room-container-notes'>
           <h2>ROOM DETAILS</h2>
           {roomData.notes}
        </div>

       <div className='room-rows'>
           {empAndDayMatchedArray.map((elem) => {

                
                return <ShiftBlock dateObj={elem.day} hoursObj={hours} roomObj={roomSked} amEmployees={elem.amEmpGroup} pmEmployees={elem.pmEmpGroup}></ShiftBlock>

           })}

           
       </div>
       

    </div>


)

}


export default Room;