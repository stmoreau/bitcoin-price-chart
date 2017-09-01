import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  render(<App />, document.getElementById('root'));
};
renderApp();
registerServiceWorker();
