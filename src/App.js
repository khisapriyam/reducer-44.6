import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import PatientManagement from './components/PatientManagement/PatientManagement';

const initialState =() => {

}
function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
