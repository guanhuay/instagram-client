import {
    SET_DARK_MODE
} from "./actionTypes";

export const setDarkMode = (darkMode) => {
    return {
        type: SET_DARK_MODE,
        payload: {darkMode}
    }
}
