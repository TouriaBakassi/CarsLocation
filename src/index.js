import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Application from './App';
import './index.css';
import { legacy_createStore,combineReducers } from 'redux';
import ReducerVoiture from './config/ReducerVoiture';
import ReducerAuthen from './config/ReducerAuthen';
import ReducerReservation from './config/ReducerReservation';
import { BrowserRouter , HashRouter} from 'react-router-dom';

const allReducers=combineReducers({
  authen: ReducerAuthen,
  voitures:ReducerVoiture,
  reservation :  ReducerReservation 
});

const store= legacy_createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <Application />
    </HashRouter>
  </Provider>
);


