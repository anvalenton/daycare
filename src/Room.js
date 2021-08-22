import React from "react";
import "./Room.css";
import ShiftBlock from "./ShiftBlock";
import { useSelector} from "react-redux";
import uuid from "react-uuid";

const Room = ({roomNum,aShift,bShift, roomData}) => {

    // 1 = a = red;
    // 2 = b = blue;
    // 3 = c = yellow;
    // 4 = d = green;

let lastShiftGroup = useSelector(st => st.workingdays[0].shiftGrp);

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

const rows = [];
for (let i = 0; i < 5; i++) {

    if (lastShiftGroup === 'B') {
        //below is one day block. shows am and pm shift
        rows.push(<div key={uuid()} className='shiftblock-container-ampm'>
        <ShiftBlock className='amshiftblock' colorNum={numKeys[aShift.am]} startTime={hours.amStart} endTime={hours.amEnd}></ShiftBlock>

        <ShiftBlock className='pmshiftblock'  colorNum={numKeys[aShift.pm]} startTime={hours.pmStart} endTime={hours.pmEnd}></ShiftBlock>
        </div>)

        lastShiftGroup = 'A';

    }

    else {
        rows.push(    <div key={uuid()} className='shiftblock-container-ampm'>
        <ShiftBlock className='amshiftblock' colorNum={numKeys[bShift.am]} startTime={hours.amStart} endTime={hours.amEnd}></ShiftBlock>
        <ShiftBlock className='pmshiftblock' colorNum={numKeys[bShift.pm]} startTime={hours.pmStart} endTime={hours.pmEnd}></ShiftBlock>
        </div>);

        lastShiftGroup = 'B';
    }
    ;
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
           {rows}
       </div>
       

    </div>


)

}


export default Room;