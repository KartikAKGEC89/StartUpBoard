import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/navigation/Navigation';
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';

const isAuth = true;
const user = { 
  isActivated:true
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={isAuth ? <Navigate to='rooms' replace /> : <Home />} />
        {/* <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}
        <Route
          path='/authenticate'
          element={isAuth ? <Navigate to="/rooms" replace /> : <Authenticate />}
        />
        <Route 
          path='/activate'
          element={!isAuth? <Navigate to="/" replace /> : isAuth & !user.isActivated ? <Activate /> : <Navigate to="/rooms" replace />}
        />
        <Route 
          path='/rooms'
          element={!isAuth? <Navigate to="/" replace /> : isAuth & !user.isActivated ? <Navigate to="/activate" replace /> : <Rooms />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
