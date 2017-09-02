import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//import Nav from './Nav';
//import Venues from './Venues';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
