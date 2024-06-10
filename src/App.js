import logo from './logo.svg';
import './App.css';
import AddEmployee from './component/AddEmployee';
import Search from './component/Search';
import Delete from './component/Delete';
import ViewAll from './component/ViewAll';
import Nav from './component/Nav';

function App() {
  return (
    <div>
      <AddEmployee/>
      <Search/>
      <Delete/>
      <ViewAll/>
      <Nav/>
    </div>
    
  );
}

export default App;
