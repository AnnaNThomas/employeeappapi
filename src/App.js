import logo from './logo.svg';
import './App.css';
import AddEmployee from './component/AddEmployee';
import Search from './component/Search';
import Delete from './component/Delete';
import ViewAll from './component/ViewAll';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddEmployee />} />
          <Route path='/Search' element={<Search/>} />
          <Route path='/Delete' element={<Delete />} />
          <Route path='/ViewAll' element={<ViewAll />} />
        
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;
