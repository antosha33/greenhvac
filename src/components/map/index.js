import { Map, Placemark } from 'react-yandex-maps';
import {useEffect} from 'react';
import { connect } from 'react-redux';
import {changeCoords} from '../../redux/actions';

function MapSection({coords, changeCoords}) {

	const onCoordsChange = (ev) => {
		changeCoords(ev.get('coords'))
	}

	return (
		<div>
			My awesome application with maps!
			<Map
				width={'100%'}
				height={'400px'}
				defaultState={
					{
						center: coords,
						zoom: 9,
						controls: ['zoomControl', 'fullscreenControl'],
					}}
				modules={['control.ZoomControl', 'control.FullscreenControl']}
				onClick={(ev) => onCoordsChange(ev)}
			>
				<Placemark geometry={coords} options={{ draggable: true }} />
			</Map>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		coords : state.coords.currentCoords
	};
}

const mapDispatchToProps = {
	changeCoords
}



export default connect(mapStateToProps, mapDispatchToProps)(MapSection);