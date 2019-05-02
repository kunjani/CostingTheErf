import React from 'react';
import {Route} from 'react-router-dom';

import App from './App';
import Top from './components/Top';
import Prop from './components/Prop';

export default (
	<Route path = "/" component={App}>
	<Route exact path component ={Top} />
	<Route path= "/registry" component={Prop} />
	</Route>
);
