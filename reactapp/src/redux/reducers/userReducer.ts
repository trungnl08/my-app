import { ActionType } from "../action-types/index"
import { Action } from "../actions/index"

const initialState = {
    token: '',
    name:''
}

const reducer = (state: object = initialState, action: Action): object => {
    switch (action.type) {
        case ActionType.SAVE_TOKEN:
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

export default reducer