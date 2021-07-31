import {stateType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: stateType, action: ActionType): stateType => {
    switch (action.type) {
        case "sort": {
            let newArray = [...state]
            if (action.payload === "up") {
                return newArray.sort((a, b) => a.name > b.name ? 1 : -1)
            } else {
                console.log('render')
                return newArray.sort((a, b) => a.name > b.name ? -1 : 1)
            }
        }
        case "check": {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
};