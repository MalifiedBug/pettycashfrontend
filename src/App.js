import ResponsiveAppBar from './Components/Appbar';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import AddBill from './Components/AddBill';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import Account from './Components/Account';
import NotFound from './Components/NotFound';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Reset from './Components/Reset';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/addbill" element={<AddBill/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/addbill" element={<AddBill/>} />
        <Route path="/resetpassword" element={<Reset/>} />
      </Routes>
    </div>
  );
}











export default App;
