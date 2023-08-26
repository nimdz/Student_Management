import './App.css';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import Header from './components/header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
       <Header/>
         <Routes>
              <Route exact path='/' element={<AllStudent/ >}></Route>
              <Route exact path='/add' element={<AddStudent/ >}></Route>
          </Routes>
       </div>
    </Router>
  );
}

export default App;
