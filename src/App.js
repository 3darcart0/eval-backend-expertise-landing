import { Provider } from 'react-redux';
import ConfigureStore from './services/store/configureStore';
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

// const store = ConfigureStore();

function App() {
  return (
    <Provider store={ConfigureStore}>
      <Router basename="/">
        <Routes>
        <Route expect path="/" render={ <Navigate to="/home" /> } />
        <Route expect path="home" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
