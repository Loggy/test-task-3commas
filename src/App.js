import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { VolumeForm } from './components';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <VolumeForm className="volumeForm" />
    </Provider>
  );
}

export default App;
