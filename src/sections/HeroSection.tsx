import React from "react";
import AnimatedText from "../components/AnimatedTitle";
import InteractiveButton from "../components/InteractiveButton";
import ProfileImage from "../assets/Man.png";

interface HeroSectionProps {
	onToggleSidePanel: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onToggleSidePanel }) => {
	return (
		<section className="w-full h-screen bg-[#C7D0D9] flex flex-col relative overflow-hidden">
			<AnimatedText
				texts={["Webflow Developer", "UI/UX Designer", "Web Designer"]}
				className="text-7xl md:text-8xl lg:text-9xl font-neueMontreal text-white absolute bottom-1/4 left-0 right-0 z-20"
				spacer=" – "
			/>
			<div className="flex-grow flex justify-center items-end">
				<img src={ProfileImage} alt="Profile" className="w-auto h-auto max-h-[90vh] object-contain" />
			</div>
			<InteractiveButton onClick={onToggleSidePanel} />
		</section>
	);
};

export default HeroSection;
