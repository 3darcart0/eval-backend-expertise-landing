import { GET_WORKSHOPTYPE, WORKSHOPTYPE_ERROR } from '../types'
import axios from 'axios'
import { API } from '../../config/Constants'

export const getWorkshopTypes = () => async dispatch => {

    try {
        const res = await axios.get(API.WORKSHOPTYPE_GET)
        dispatch({
            type: GET_WORKSHOPTYPE,
            payload: res.data?.response?.payload?.rows
        })
    }
    catch (e) {
        dispatch({
            type: WORKSHOPTYPE_ERROR,
            payload: console.log(e),
        })
    }

}