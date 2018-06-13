import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import Router from './routes';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

// React-Router
const history = createHistory();
const routeMiddleware = routerMiddleware(history);
// Redux-Saga
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(routeMiddleware, sagaMiddleware))
// MaterialUI theme declaration
const theme = createMuiTheme({
	palette: {
		primary: {
			light: purple[300],
			main: purple[500],
			dark: purple[700],
		},
		secondary: {
			light: green[300],
			main: green[500],
			dark: green[700],
		},
	},
});
// Saga Apply
sagaMiddleware.run(sagas)

ReactDOM.render(
	<Provider store={store} >
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router history={history} />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
