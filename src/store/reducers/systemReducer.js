import {SET_DARK_MODE} from "../actions/actionTypes";

const initState = {
    darkMode: false
}

const systemReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_DARK_MODE: {
            return {
                ...state,
                darkMode: action.payload.darkMode
            }
        }

        default:
            return state;
    }
}

export default systemReducer;
