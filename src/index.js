import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
	<BrowserRouter>
	<App />
	</BrowserRouter>
	, document.getElementById('root'));




serviceWorker.unregister();
