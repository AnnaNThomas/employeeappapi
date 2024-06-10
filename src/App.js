import logo from './logo.svg';
import './App.css';
import AddEmployee from './component/AddEmployee';
import Search from './component/Search';
import Delete from './component/Delete';
import ViewAll from './component/ViewAll';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddEmployee />} />
          <Route path='/Search' element={<Search/>} />
          <Route path='/Delete' element={<Delete />} />
          <Route path='/ViewAll' element={<ViewAll />} />
          <Route path='/Nav' element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
