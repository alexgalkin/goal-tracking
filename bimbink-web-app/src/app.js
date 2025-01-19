import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  rootElement
);
