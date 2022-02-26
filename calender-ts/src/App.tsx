import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Calendar from './Components/calendar';
import configureStore from './redux/store';
import 'react-responsive-modal/styles.css';


function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
}

export default App;
