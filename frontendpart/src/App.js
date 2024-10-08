import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import { useSelector } from 'react-redux';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
import Loader from './components/shared/Loader/Loader'


function App() {

  const { user, isAuth } = useSelector((state) => state.auth);
  const { loading } = useLoadingWithRefresh();
  return loading ? (
  <Loader message="Loading, please wait......... !"/>
  ):(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={isAuth ? <Navigate to='rooms' replace /> : <Home />} />
        <Route
          path='/authenticate'
          element={isAuth ? <Navigate to="/rooms" replace /> : <Authenticate />}
        />
        <Route 
          path='/activate'
          element={!isAuth? <Navigate to="/" replace /> : isAuth & !user.activated ? <Activate /> : <Navigate to="/rooms" replace />}
        />
        <Route 
          path='/rooms'
          element={!isAuth? <Navigate to="/" replace /> : isAuth & !user.activated ? <Navigate to="/activate" replace /> : <Rooms />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
