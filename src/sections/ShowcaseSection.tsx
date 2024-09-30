import React from "react";
import { ProductShowcase } from "../components/ProductShowcase";
import portfolio1 from "../assets/Portfolio-1.png";
import portfolio2 from "../assets/Portfolio-2.png";
import portfolio3 from "../assets/Portfolio-3.png";
import portfolio4 from "../assets/Portfolio-4.png";
import portfolio5 from "../assets/Portfolio-5.png";
import portfolio6 from "../assets/Portfolio-6.png";
import portfolio7 from "../assets/Portfolio-7.png";
import portfolio8 from "../assets/Portfolio-8.png";

const portfolioRigth = [portfolio1, portfolio2, portfolio3, portfolio4];
const portfolioLeft = [portfolio5, portfolio6, portfolio7, portfolio8];

const ShowcaseSection: React.FC = () => {
	return (
		<section className="py-16 bg-[#F4F7FA]">
			<div className="container mx-auto">
				<ProductShowcase images={portfolioRigth} direction="right" />
				<ProductShowcase images={portfolioLeft} direction="left" />
			</div>
		</section>
	);
};

export default ShowcaseSection;
