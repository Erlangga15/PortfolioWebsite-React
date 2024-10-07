import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import FormDataPage from './pages/FormDataPage';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/form-data" element={<FormDataPage />} />
			</Routes>
		</Router>
	);
};

export default App;
