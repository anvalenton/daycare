

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
    
    {
    "name": "Alexio",
    "working": true,
    'group': 3
        },

    {
    "name": "Andrew",
    "working": true,
    'group': 4
         }
    ],
    'isDaycareOpen': true,
    'intervalID': null,
    'workingdays': [
        {'moDate': '8/23/21', 'day': 'Monday', 'shiftGrp': 'A'},
        {'moDate': '8/24/21', 'day': 'Tuesday', 'shiftGrp': 'B'},
        {'moDate': '8/25/21', 'day': 'Wednesday', 'shiftGrp': 'A'},
        {'moDate': '8/26/21', 'day': 'Thursday', 'shiftGrp': 'B'},
        {'moDate': '8/27/21', 'day': 'Friday', 'shiftGrp': 'A'}
    ],
    'hours':{
    'amStart': '7:00 AM',
    'amEnd':'12:00 PM',
    'pmStart': '12:00 PM',
    'pmEnd': '5:30 PM'
    },  

    'room1': {
        'A':
       {'AM': 'red',
       'PM': 'red',},
       'B': {
        'AM': 'blue',
        'PM': 'blue',},
        'notes': "Under 5 years old"
    },

    'room2': {
        'A':
       {'AM': 'red',
       'PM': 'blue',},
       'B': {
        'AM': 'yellow',
        'PM': 'green',},
        'notes': 'Over 5 years old'
    },

  
    'numKeys2': {
        '1': {'letter':'A', 'color': 'red'},
        '2': {'letter':'B', 'color': 'blue'},
        '3': {'letter': 'C', 'color': 'yellow'},
        '4': {'letter': 'D', 'color': 'green'}
    }

    
    };


function rootReducer(state=INITIAL_STATE, action) {

    switch(action.type) {

        case 'UPDATE_SCHEDULE':
            //just replacing the state object with new data from api.
    
            return { ...state, data: action.data};

        case 'UPDATE_BUSINESS_CLOSE':
   
            return {...state, isDaycareOpen: action.isDaycareOpen };

        case 'UPDATE_INTERVAL_ID':

            return {...state, intervalID: action.intervalID};

        case 'UPDATE_WORKINGDAYS':
           
            return {...state, workingdays: action.updatedWorkDays};

        case 'UPDATE_YESTERDAYSHIFTGROUP':

            return {...state, yesterdayShift: action.newShiftGroup};

        default:
            return state;
    }

}


  export default rootReducer;