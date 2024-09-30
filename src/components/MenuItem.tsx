import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollToSection from "../hooks/useScrollToSection";

interface MenuItemProps {
	label: string;
	path: string;
	onItemClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, path, onItemClick }) => {
	const [isHovered, setIsHovered] = useState(false);
	const scrollToSection = useScrollToSection();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (path.startsWith("#")) {
			e.preventDefault();
			scrollToSection(path.slice(1));
		}
		onItemClick();
	};

	return (
		<li className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			{isHovered && <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />}
			<Link to={path} className="text-6xl font-medium hover:text-gray-300 transition-colors duration-200" onClick={handleClick}>
				{label}
			</Link>
		</li>
	);
};

export default MenuItem;
