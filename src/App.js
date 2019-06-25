import React from 'react';
import Router from './Router';
import  { Provider } from 'react-redux';

import store from './store';

const App = prop => (
	<Provider store={store}>
		<Router />
	</Provider>
);

export default App;

