import { YMaps } from 'react-yandex-maps';
import Map from './components/map';
import Panels from './components/panels';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

function App() {
	return (
		<YMaps>
			<div className="solar-panel-calculator">
				<Map />
				<Panels></Panels>
			</div>
		</YMaps>
	);
}

const app = () => {
	return (
		<Provider store={store}>
			<App></App>
		</Provider>
	)
}

export default app;
