

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
    'yesterdayShift': 'B',
    'workingdays': [
        {'moDate': '8/23', 'day': 'Monday', 'dayNum': 1},
        {'moDate': '8/24', 'day': 'Tuesday', 'dayNum': 2},
        {'moDate': '8/25', 'day': 'Wednesday', 'dayNum': 1},
        {'moDate': '8/26', 'day': 'Thursday', 'dayNum': 2},
        {'moDate': '8/27', 'day': 'Friday', 'dayNum': 1}
     
    ]
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