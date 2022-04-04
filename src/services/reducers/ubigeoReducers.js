
import { GET_DISTRICTS_LIMA } from '../types';

const initialState = {
    ubigeo: [],
    loading: true
}

export default function ubigeoReducers (state = initialState, action) {
    switch (action.type) {
        case GET_DISTRICTS_LIMA:
            return {
                ...state,
                ubigeo: action.payload,
                loading: false

            }
        default: return state
    }

}