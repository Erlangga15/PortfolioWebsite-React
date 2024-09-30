import { useCallback } from "react";

const useScrollToSection = () => {
	const scrollToSection = useCallback((sectionId: string): void => {
		if (sectionId === "home") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			const section = document.getElementById(sectionId);
			if (section) {
				const yOffset = 40;
				const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: "smooth" });
			}
		}
	}, []);

	return scrollToSection;
};

export default useScrollToSection;
