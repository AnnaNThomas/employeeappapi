import logo from './logo.svg';
import './App.css';
import AddEmployee from './component/AddEmployee';
import Search from './component/Search';
import Delete from './component/Delete';

function App() {
  return (
    <div>
      <AddEmployee/>
      <Search/>
      <Delete/>
    </div>
    
  );
}

export default App;
