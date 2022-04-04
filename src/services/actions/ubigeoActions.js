import { GET_DISTRICTS_LIMA, DISTRICTS_LIMA_ERROR } from '../types'
import axios from 'axios'
import { API } from '../../config/Constants'

export const getDistrictsLima = () => async dispatch => {

    try {
        const res = await axios.get(API.DISTRICTS_LIMA_GET)
        dispatch({
            type: GET_DISTRICTS_LIMA,
            payload: res.data?.response?.payload?.data
        })
    }
    catch (e) {
        dispatch({
            type: DISTRICTS_LIMA_ERROR,
            payload: console.log(e),
        })
    }

}