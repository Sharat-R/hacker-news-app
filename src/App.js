import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Table from './Table/Table'
import Pagination from './Pagination/Pagination'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Table></Table>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
