import { CHANGE_CONTEST, GET_CHALLENGES } from "../Actions/types";

const initialState = {
    isLoading: false,
    items: "",
    contest: "Basketball",
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHALLENGES:
            return { ...state, items: action.payload, isLoading: false, contest: action.payload?.Games.items[0] }
        case CHANGE_CONTEST:
            return { ...state, contest: action.payload }
        default:
            return state;
    }
}

export default reducer;
