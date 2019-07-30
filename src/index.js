//imports from 3rd party dependencies
import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

//imports from our own code
import App from './components/App';
import reducers from './reducers';

//create an instance of provider nd wrap App component with it
ReactDOM.render(
  //Provider provides information to all the other components in our app
  <Provider store={createStore(reducers)}>
  <App />
  </Provider>,
  document.querySelector('#root')
);
