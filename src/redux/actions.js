export function changeCoords(payload){
	return{
		type: 'CHANGE__COORDS',
		payload
	}
}

export function getPanels(payload){
	return{
		type: 'GET__PANELS',
		payload
	}
}