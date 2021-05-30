const initialState = {
	panels : [],
};

export const getPanelsReducer = (state = initialState, action) => {

	switch(action.type){

		case 'GET__PANELS':
			
			return {
				...state, panels: action.payload  
			}
		default: return state;
	}
}