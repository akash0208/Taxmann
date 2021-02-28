import { GET_CHALLENGES } from "../Actions/types";

const initialState = {
    isLoading: false,
    categories: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHALLENGES:
            return { ...state, categories: action.payload, isLoading: false }
        default:
            return state;
    }
}

export default reducer;
