import React from "react";
import { Testimonial } from "../components/Testimonial";
import People1 from "../assets/People-1.png";
import People2 from "../assets/People-2.png";

const testimonials = [
	{
		text: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
		name: "John Doe",
		position: "CEO, Company A",
		imageUrl: People1,
	},
	{
		text: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
		name: "Jane Smith",
		position: "CTO, Company B",
		imageUrl: People2,
	},
];

const TestimoniSection: React.FC = () => {
	return (
		<section className="bg-[#F4F7FA] py-28 px-4 md:px-20">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/3">
					<h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">Testimonials</h2>
				</div>
				<div className="md:w-2/3 flex flex-col gap-10">
					{testimonials.map((testimonial, index) => (
						<Testimonial key={index} {...testimonial} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimoniSection;
