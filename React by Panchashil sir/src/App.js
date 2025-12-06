import logo from './logo.svg';
import './App.css';
import FunctionComp from './component/FunctionComp';
import ClassComp from './component/ClassComp';
import MyMethodComp from './component/MyMethodComp';
import CondionalRenComp from './component/CondionalRenComp';
import MyCssComp from './component/MyCssComp';
import MyImagesComp from './component/MyImagesComp';
import ParentComp from './component/ParentComp';
import ListComp from './component/ListComp';
import ClickCounterComp from './component/ClickCounterComp';
import HoverCounterComp from './component/HoverCounterComp';
import UserComp from './component/UserComp';
import ErrorBoundaryComp from './component/ErrorBoundaryComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FunctionComp fname="Panchashil" post="CEO" salary={990000}/> */}
      {/* <ClassComp fname="Aabhas" post="Manager" salary={990000}/> */}
      {/* <MyMethodComp/> */}
      {/* <CondionalRenComp/> */}
      {/* <MyCssComp/> */}
      {/* <MyImagesComp/> */}
      {/* <ParentComp/> */}
      {/* <ListComp/> */}
      {/* <ClickCounterComp/>
      <HoverCounterComp/> */}
      <ErrorBoundaryComp>
        <UserComp user="Panchashil"/>
      </ErrorBoundaryComp>

      <ErrorBoundaryComp>
        <UserComp user="Rahul"/>
      </ErrorBoundaryComp>

      <ErrorBoundaryComp>
        <UserComp user="Kalu"/>
      </ErrorBoundaryComp>
      
      <ErrorBoundaryComp>
        <UserComp user="Balu"/>
      </ErrorBoundaryComp>
      
      
    </div>
  );
}

export default App;
