import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
unregister();


ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
