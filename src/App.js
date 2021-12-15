import './App.css';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigationbar from './components/Navbar';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Helmet title="Playing For Keeps"/>

      <Navigationbar />

      <Routes>
        <Route path='/login' element={<LoginForm />}/>
      </Routes>

    </div>
  );
}

export default App;
