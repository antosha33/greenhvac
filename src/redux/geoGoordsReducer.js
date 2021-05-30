const initialState = {
	currentCoords : [53.9, 27.5667],
};

export const geoCoordsReducer = (state = initialState, action) => {
	
	switch(action.type){
		case 'CHANGE__COORDS':
			return {
				...state, currentCoords: action.payload  
			}
		default: return state;
	}
}