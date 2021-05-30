import {combineReducers} from 'redux';
import { geoCoordsReducer } from './geoGoordsReducer';
import { getPanelsReducer } from './getPanelsReducer';
export const rootReducer =  combineReducers({
	coords: geoCoordsReducer,
	panels: getPanelsReducer
});