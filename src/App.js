import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import UseEffect from './components/UseEffect/UseEffect';
import UseMemo from './components/UseMemo/UseMemo';
import UseRef from './components/UseRef/UseRef';
import UseContext from './components/UseContext/UseContext';
import UseReducer from './components/UseReducer/UseReducer';
import UseCallback from './components/UseCallback/UseCallback';
import CustomHooks from './components/CustomHooks/CustomHooks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <UseState/> */}
        {/* <UseEffect/> */}
        {/* <UseMemo/> */}
        {/* <UseRef/> */}
        {/* <UseContext/> */}
        {/* <UseReducer/> */}
        {/* <UseCallback/> */}
        <CustomHooks/>
        
      </header>
    </div>
  );
}

export default App;
