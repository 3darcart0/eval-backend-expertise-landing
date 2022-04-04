
import { GET_MY_VEHICLES } from '../types';

const initialState = {
    vehicles: [],
    loading: true
}

export default function vehicleReducers (state = initialState, action) {
    switch (action.type) {
        case GET_MY_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                loading: false

            }
        default: return state
    }

}