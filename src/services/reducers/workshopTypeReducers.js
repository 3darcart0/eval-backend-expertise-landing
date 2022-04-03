
import { GET_WORKSHOPTYPE } from '../types';

const initialState = {
    workshopTypes: [],
    loading: true
}

export default function workshopTypeReducers (state = initialState, action) {
    switch (action.type) {
        case GET_WORKSHOPTYPE:
            return {
                ...state,
                workshopTypes: action.payload,
                loading: false

            }
        default: return state
    }

}