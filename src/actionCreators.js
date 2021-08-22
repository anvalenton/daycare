
import axios from 'axios';
import moment from 'moment';


const API_URL = "https://app.fakejson.com/q";



export function getSchedule(requestedPayload) {
  
  //dispatch (can be called anything) is the dispatch function being exposed by thunk middleware
  //dispatch needs to be passed into the async func to be called
  return async function (dispatch) {
    try {
     
      const response = await axios.post(API_URL, requestedPayload);
      const arrayFromRes = response.data;
      const withinHours = withinBusinessHours();
      

      if (withinHours) {
        dispatch(gotNewData(arrayFromRes))
        
      }
      
      else if(!withinHours) {
       
          dispatch(closeBiz());
      }

    } 
    
    catch (e) {
      dispatch(gotError(e))
    }
  }
}

function gotNewData(schedule) {
  return {
    type: 'UPDATE_SCHEDULE',
    data: schedule
  }
}

function gotError(error) {
  
    throw new Error('API call did not work');
}

function closeBiz() {
    return {
        type: 'UPDATE_BUSINESS_CLOSE',
        isDaycareOpen: false
    }
}



//below to be called on first render inside a useEffect
//storestate should be array itself and not store object
//argument being passed in is 
export function checkOrUpdateWorkingDays(workDaysArray) {
    //below is working days array
    //first elem in array should be current day
    //if not, its removed and new working date pushed to end
    const workDaysCopy = [...workDaysArray];
    const cur = moment()
    //below gives "8/21" string format
    const moDateToday = cur.format("M[/]YY")

    //first element in store.workingdays. first elem should represent current day
    const firstDayInStore = workDaysCopy[0].moDate;

    if (moDateToday === firstDayInStore) return;
    else {
      //get entire first element
      const firstElemToUpdate = workDaysCopy[0]
      const firstElemShiftGrp = firstElemToUpdate.shiftGrp
      //get nextweek day object
      const nxtWeekObj = moment().add(7,'days');
      //below gets '8/21' format
      const nxtWeekDate = nxtWeekObj.format("M[/]YY");
      const nextShiftGrp = firstElemShiftGrp === 'A'? 'B': 'A';
      
      const updatedWorkDate = {...firstElemToUpdate, moDate: nxtWeekDate, shiftGrp: nextShiftGrp}
      //pushing updated/new workday object to end of array
      workDaysCopy.push(updatedWorkDate);
      workDaysCopy.shift();

    }

    return {
      type: 'UPDATE_WORKINGDAYS',
      updatedWorkDays: workDaysCopy
  }

}


export function withinBusinessHours() {
    
    const startHourInAM = 7;
    const endHourInPM = 17;
    const endMinutesInPM = 30;

    const date = new Date();
    const day = date.getDay();
    const isWeekday = day > 0 && day < 6 ? true : false;

    if (!isWeekday) return false;

    const hour = date.getHours();
    const minutes = date.getMinutes();

    let isWithinHours;

    if (hour >= startHourInAM && hour <= endHourInPM) {

        if (hour === endHourInPM && minutes >= endMinutesInPM) {
            isWithinHours = false;
        }

        else {
            isWithinHours = true;
        }
    }
    return isWithinHours;
    

}

