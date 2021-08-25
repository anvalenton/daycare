
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
//argument being passed in is work day array
export function checkOrUpdateWorkingDays(workDaysArray) {
    
    //below is working days array
    //first elem in array should be current day
    //if not, its removed and new working date pushed to end
    const workDaysCopy = [...workDaysArray];
    // today moment object
    const cur = moment()
    //below gives "8/23" string format
    
    const moDateToday = cur.format("M[/]DD/YY")

    //first element in store.workingdays. first elem should represent current day
    let firstDayObj = workDaysCopy[0];
    let firstDayInStore = workDaysCopy[0].moDate;

    if (moDateToday === firstDayInStore) {
      
      return;}

   
      while (firstDayInStore !== moDateToday) {

      
      let firstDayShiftGrp = firstDayObj.shiftGrp
      //get nextweek day object
      let nxtWeekObj = moment(firstDayInStore).add(7,'days');
     
      //below gets '8/21' format
      let nxtWeekDate = nxtWeekObj.format("M[/]DD/YY");
      let nextShiftGrp = firstDayShiftGrp === 'A'? 'B': 'A';
      
      let updatedWorkDate = {...firstDayObj, moDate: nxtWeekDate, shiftGrp: nextShiftGrp}
      //pushing updated/new workday object to end of array
      workDaysCopy.push(updatedWorkDate);
      workDaysCopy.shift();
      
      firstDayObj = workDaysCopy[0];
      firstDayInStore = workDaysCopy[0].moDate;

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

