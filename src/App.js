import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Table from './Table/Table'
import Pagination from './Pagination/Pagination'
import { useState } from "react";
function App() {
const [response,setResponse] = useState([])
  return (
    <div className="App">
      <Header></Header>
      <Table 
      data={response}
      ></Table>
      <Pagination
      setPageData={setResponse}
      ></Pagination>
    </div>
  );
}

export default App;
