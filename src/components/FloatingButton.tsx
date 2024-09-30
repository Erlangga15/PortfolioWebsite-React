import React, { useState, useEffect } from "react";

interface FloatingButtonProps {
	onToggle: () => void;
	isOpen: boolean;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onToggle, isOpen }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.querySelector("section");
			if (heroSection) {
				const heroBottom = heroSection.getBoundingClientRect().bottom;
				setIsVisible(heroBottom > 0 ? isOpen : heroBottom < 0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isOpen]);

	if (!isVisible) return null;

	return (
		<button
			onClick={onToggle}
			className={`fixed top-10 right-10 z-50 w-20 h-20 ${isOpen ? 'bg-white' : 'bg-black'} rounded-full flex items-center justify-center focus:outline-none transition-all duration-300 ${ isOpen ? 'hover:bg-slate-200' : 'hover:bg-gray-800'}`}
			aria-label={isOpen ? "Close menu" : "Open menu"}
		>
			{isOpen ? (
				<svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			) : (
				<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			)}
		</button>
	);
};

export default FloatingButton;