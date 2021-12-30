import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigationbar from './components/Navbar';
import LoginForm from './components/LoginForm/LoginForm';
import SEO from './components/SEO';

function App() {
	return (
		<div className='App'>
			<SEO title='Home' />

			<Navigationbar />

			<Routes>
				<Route path='/login' element={<LoginForm />} />
			</Routes>
		</div>
	);
}

export default App;
