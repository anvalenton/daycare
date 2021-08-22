

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
        {'moDate': '8/23', 'day': 'Monday', 'shiftGrp': 'A'},
        {'moDate': '8/24', 'day': 'Tuesday', 'shiftGrp': 'B'},
        {'moDate': '8/25', 'day': 'Wednesday', 'shiftGrp': 'A'},
        {'moDate': '8/26', 'day': 'Thursday', 'shiftGrp': 'B'},
        {'moDate': '8/27', 'day': 'Friday', 'shiftGrp': 'A'}
     
    ]
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