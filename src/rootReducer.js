

const INITIAL_STATE = {
    "data": [
    {
    "name": "Sam",
    "working": true,
    'group': 1
    },
    {
    "name": "Mary",
    "working": true,
    'group': 2
    },
    
    ],
    'isDaycareOpen': true,
    'intervalID': null,
    'yesterdayShift': 'B'
    };


function rootReducer(state=INITIAL_STATE, action) {

    switch(action.type) {

        case 'UPDATE_SCHEDULE':
            //just replacing the state object with new data from api.
            const date = new Date();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            
            console.log('inside update schedule');
            console.log('current time is', hour, minutes)
            
            return { ...state, data: action.data};

        case 'UPDATE_BUSINESS_CLOSE':
   
            return {...state, isDaycareOpen: action.isDaycareOpen };

        case 'UPDATE_INTERVAL_ID':

            return {...state, intervalID: action.intervalID};

        default:
            return state;
    }

}


  export default rootReducer;