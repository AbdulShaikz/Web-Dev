import './App.css';
import Output1 from './components/Output1.js';
import Output2 from './components/Output2.js';
import Output3 from './components/Output3.js';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/output1">Output 1</Link>
        <Link to="/output2">Output 2</Link>
        <Link to="/output3">Output 3</Link>
      </nav>
      <Routes>
        <Route path='/output1' element={<Output1/>}/>
        <Route path='/output2' element={<Output2/>}/>
        <Route path='/output3' element={<Output3/>}/>
      </Routes>
    </div>
  );
}

export default App;
