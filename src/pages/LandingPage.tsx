import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WorkSection from "../sections/WorkSection";
import ShowcaseSection from "../sections/ShowcaseSection";
import TestimoniSection from "../sections/TestimoniSection";
import FloatingButton from "../components/FloatingButton";
import SidePanel from "../layout/Sidepanel";

const LandingPage: React.FC = () => {
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

	const toggleSidePanel = () => {
		setIsSidePanelOpen(!isSidePanelOpen);
	};

	return (
		<div className="relative bg-[#C7D0D9]">
			<Header bgColor="bg-[#C7D0D9]" />
			<div id="home">
				<HeroSection onToggleSidePanel={toggleSidePanel} />
			</div>
			<div id="about">
				<AboutSection />
			</div>
			<div id="work">
				<WorkSection />
			</div>
			<ShowcaseSection />
			<TestimoniSection />
			<Footer />
			<FloatingButton onToggle={toggleSidePanel} isOpen={isSidePanelOpen} />
			<SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
		</div>
	);
};

export default LandingPage;
