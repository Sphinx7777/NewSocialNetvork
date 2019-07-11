import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Components/Redux/ReduxStore";



ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
	<App />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));




serviceWorker.unregister();
