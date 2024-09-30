import React, { useState } from "react";

interface InteractiveButtonProps {
	onClick: () => void;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ onClick }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			className={`absolute z-40 right-0 top-1/2 transform -translate-y-1/2 h-20 bg-black rounded-l-full flex items-center justify-start cursor-pointer transition-all duration-300 overflow-hidden ${
				isHovered ? "w-56" : "w-16"
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
		>
			<span className="text-yellow-300 text-4xl ml-3 flex-shrink-0">👋</span>
			<span
				className={`ml-2 text-white text-2xl transition-all duration-300 flex-shrink-0 ${
					isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
				}`}
			>
				Hi I'm Ayush
			</span>
		</button>
	);
};

export default InteractiveButton;
