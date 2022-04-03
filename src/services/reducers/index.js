import { combineReducers } from "redux";
import workshopTypeReducers from './workshopTypeReducers';

const rootReducer = combineReducers({
    workshopTypes: workshopTypeReducers
});
export default rootReducer;