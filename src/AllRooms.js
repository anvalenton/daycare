import React, { useEffect } from "react";
import Room from "./Room.js";
import "./AllRooms.css";
import { getSchedule } from "./actionCreators";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setIntervalAsync } from 'set-interval-async/dynamic';
import DayHeaders2 from "./DayHeaders2.js";

//payload is the contains auth token to get dummy info from fakeJSON.com site
//return is an array of person objects, has 10 elements
const payload = {
    "token": "apbFv44NakazHojFbikJLw",
    "data": { 
    "name": "nameFirst",
    "working": "numberBool",
    "group": "numberInt|1,4",
    "_repeat": 8
    }
  };

const AllRooms = () => {

    //callToStore allows usage of dispatch() directly
    const callToStore = useDispatch();

    //two variables below check the values intervalID and isDaycareOpen
    //from the redux store
    let intervalIDFromStore = useSelector(state => state.intervalID, shallowEqual);

    let isOpenFromStore = useSelector(state => state.isDaycareOpen, shallowEqual);

    
  
   
    useEffect(() => {
    
            //when callToStore is run, dispatch is run within that func
            //getSchedule calls dispatch 
            //dispatch within getSchedule is to update state with response received
            //this is first call to the API upon start of app
            callToStore(getSchedule(payload));
            

            //below is an async interval to run throughout the day
            let startIntervalID = setIntervalAsync(() => {               
                callToStore(getSchedule(payload))}    
                , 300000);

            //5 min 300,000 milsecs

            //adding the newly created intervalID to state store
            //argument passed in is the action object to be received by rootReducer
            callToStore({type:'UPDATE_INTERVAL_ID', intervalID: startIntervalID })

          return (
              clearInterval(startIntervalID)
          )
      
    }, [callToStore])  

    //callToStore added as dependency of useEffect for stability. runs once.

    useEffect(() => {
        if (!isOpenFromStore) {
            clearInterval(intervalIDFromStore);
        }
       
    }, [isOpenFromStore, intervalIDFromStore])

   
    //can be refactored in the future as a loop if more rooms will be added
    const room1Data = useSelector(st => st.room1);
    const room2Data = useSelector(st => st.room2);


return (

    <>
        <div className='allrooms-container'>
        <DayHeaders2></DayHeaders2>
        <Room roomNum='1' roomData={room1Data} />

        <Room roomNum='2' roomData={room2Data} />
        </div>
    </>


)

}


export default AllRooms;