import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Home from './Pages/Home/Home';

function App() {
  const [dark, setDark] = useState(false);
  return (
    <section data-theme={dark ? 'dark' : 'light'}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
