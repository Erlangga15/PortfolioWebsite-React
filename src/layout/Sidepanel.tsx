import React from "react";
import MenuItem from "../components/MenuItem";
import SocialLink from "../components/SocialLink";
import useScrollToSection from "../hooks/useScrollToSection";

interface SidePanelProps {
	isOpen: boolean;
	onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
	const scrollToSection = useScrollToSection();

	const menuItems = [
		{ label: "Home", path: "#home" },
		{ label: "About", path: "#about" },
		{ label: "Work", path: "#work" },
		{ label: "Contact", path: "/contact" },
	];

	const socialLinks = ["LinkedIn", "Twitter", "Instagram", "Webflow"];

	const handleItemClick = (path: string) => {
		if (path !== "contact") {
			scrollToSection(path);
			onClose();
		}
	};

	return (
		<div
			className={`pl-20 fixed top-0 z-40 right-0 w-1/2 h-full bg-black text-white transition-transform duration-300 ease-in-out ${
				isOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<nav className="my-7 pl-5 h-5/6 flex flex-col justify-center">
				<ul className="space-y-10">
					{menuItems.map((item) => (
						<MenuItem key={item.label} label={item.label} path={item.path} onItemClick={() => handleItemClick(item.path)} />
					))}
				</ul>
			</nav>

			<footer className="flex space-x-10 h-1/6">
				{socialLinks.map((link) => (
					<SocialLink key={link} label={link} />
				))}
			</footer>
		</div>
	);
};

export default SidePanel;
