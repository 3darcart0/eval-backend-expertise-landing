import { GET_MY_VEHICLES, MY_VEHICLES_ERROR } from '../types'
import axios from 'axios'
import { API, ID } from '../../config/Constants'

export const getMyVehicles = () => async dispatch => {

    try {
        let request = {
            payload: {
                person_id: ID
            }
        }
        const res = await axios.post(API.MY_VEHICLES_GET, { request }, {
            headers: {
                'Content-Type': "application/json"
            }
        });
        dispatch({
            type: GET_MY_VEHICLES,
            payload: res.data?.response?.payload?.data
        })
    }
    catch (e) {
        dispatch({
            type: MY_VEHICLES_ERROR,
            payload: console.log(e),
        })
    }

}