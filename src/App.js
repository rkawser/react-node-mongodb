import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/AddUser/Home/Home';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Update from './Components/UpdateUser/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add/user' element={<AddUser></AddUser>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
