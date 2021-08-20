import React from "react";


import ShiftBlock from "./ShiftBlock";
import { useSelector } from "react-redux";

const Room = ({roomNum,aShift,bShift, roomData}) => {

    // 1 = a = red;
    // 2 = b = blue;
    // 3 = c = yellow;
    // 4 = d = green;

let lastShiftGroup = useSelector(st => st.yesterdayShift);

const numKeys = {
    A: 1,
    B: 2,
    C: 3,
    D: 4
}

const hours = {
    amStart: '7:00 AM',
    amEnd:'12:00 PM',
    pmStart: '12:00 PM',
    pmEnd: '5:30 PM'
}

let rows = [];
for (let i = 0; i < 5; i++) {

    if (lastShiftGroup === 'B') {

        rows.push(<div  className='shiftblock-container'>
        <ShiftBlock className='shiftblock' colorNum={numKeys[aShift.am]} startTime={hours.amStart} endTime={hours.amEnd}></ShiftBlock>
        <ShiftBlock className='shiftblock'  colorNum={numKeys[aShift.pm]} startTime={hours.pmStart} endTime={hours.pmEnd}></ShiftBlock>
        </div>)

        lastShiftGroup = 'A';

    }

    else {
        rows.push(    <div className='shiftblock-container'>
        <ShiftBlock className='shiftblock' colorNum={numKeys[bShift.am]} startTime={hours.amStart} endTime={hours.amEnd}></ShiftBlock>
        <ShiftBlock className='shiftblock' colorNum={numKeys[bShift.pm]} startTime={hours.pmStart} endTime={hours.pmEnd}></ShiftBlock>
        </div>);

        lastShiftGroup = 'B';
    }
    ;
  }

return (

    <div>
       <div>Room {roomNum}</div>
       <div>{roomData.notes}</div>

       <div>
           {rows}
       </div>
       

    </div>


)

}


export default Room;