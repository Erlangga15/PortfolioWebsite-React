import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
};

export default App;
