import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPanels} from '../../redux/actions';


const Panels = ({panels, getPanels}) => {


	useEffect(() => {
		(async () => {
			const response = await fetch('./mock.json');
			const options = await response.json();
			getPanels(Object.keys(options))
		})()

	})
	return(
		<div className='panels'>
			<select name="" id="">
				{panels.map(panel => {
					return(
						<option value="">{panel}</option>
					)
				})}
			</select>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		panels: state.panels.panels
	}
}

const mapDispatchToProps = {
	getPanels
}

export default connect(mapStateToProps, mapDispatchToProps)(Panels);