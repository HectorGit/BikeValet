import * as React from 'react';
import ControlDashboard from './pages/controlDashboard'
import { Provider } from 'react-redux';
import { store as CustomerStore } from '../src/redux/customerStore'

function App() {

  return (
    <Provider store={CustomerStore}>
      <ControlDashboard/>
    </Provider>
  );
}

export default App;