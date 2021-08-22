
import axios from 'axios';



const API_URL = "https://app.fakejson.com/q";



export function getSchedule(requestedPayload) {
  
  //dispatch (can be called anything) is the dispatch function being exposed by thunk middleware
  //dispatch needs to be passed into the async func to be called
  return async function (dispatch) {
    try {
     
      const response = await axios.post(API_URL, requestedPayload);
      const arrayFromRes = response.data;
      let withinHours = withinBusinessHours();
      console.log('response frm api is', arrayFromRes)

      if (withinHours) {
        dispatch(gotNewData(arrayFromRes))
        
      }
      
      else if(!withinHours) {

          dispatch(closeBiz());
      }

      console.log('inside async getSchedule in actionCreators file')
      ;
      
     
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
    console.log('e is', error);
    throw new Error('API call did not work');
}

function closeBiz() {
    return {
        type: 'UPDATE_BUSINESS_CLOSE',
        isDaycareOpen: false
    }
}


export function withinBusinessHours() {
    
    const startHourInAM = 7;
    const endHourInPM = 23;
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

export function withinBusinessHours2() {



  
}