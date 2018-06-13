import React from 'react';
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import App from './components/App'

export default ({ history }) => (
	<ConnectedRouter history={history}>
		<div>
			<Route exact path="/" component={App} />
		</div>
	</ConnectedRouter>
)
