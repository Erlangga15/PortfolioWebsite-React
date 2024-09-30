import React from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

interface HeaderProps {
	bgColor?: string;
}

const Header: React.FC<HeaderProps> = ({ bgColor = "bg-[#C7D0D9]" }) => {
	const scrollToSection = useScrollToSection();
	const location = useLocation();

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault();
		if (location.pathname === "/") {
			scrollToSection(sectionId);
		} else {
			window.location.href = `/#${sectionId}`;
		}
	};

	return (
		<header className={`w-full h-20 ${bgColor} flex justify-between items-center py-6 px-20 absolute top-0 left-0 z-30`}>
			<Link to="/" className="text-xl font-neueMontreal">
				@Ayush Barnwal
			</Link>
			<nav className="hidden md:flex space-x-10">
				<a href="#about" className="font-neueMontreal text-base hover:text-gray-700" onClick={(e) => handleNavClick(e, "about")}>
					About
				</a>
				<a href="#work" className="font-neueMontreal text-base hover:text-gray-700" onClick={(e) => handleNavClick(e, "work")}>
					Work
				</a>
				<Link to="/contact" className="font-neueMontreal text-base hover:text-gray-700">
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
