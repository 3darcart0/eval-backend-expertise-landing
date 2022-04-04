import { combineReducers } from "redux";
import workshopTypeReducers from './workshopTypeReducers';
import ubigeoReducers from './ubigeoReducers';
import vehicleReducers from './vehicleReducers';

const rootReducer = combineReducers({
    workshopTypes: workshopTypeReducers,
    ubigeo: ubigeoReducers,
    vehicles: vehicleReducers
});
export default rootReducer;