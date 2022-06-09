import { ActionType } from "../action-types/index"

interface SaveTokenAction {
    type: ActionType.SAVE_TOKEN,
    payload: string
}


interface SaveUserAction {
    type: ActionType.SAVE_USER,
    payload: Object
}

export type Action = SaveTokenAction  | SaveUserAction