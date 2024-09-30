import React from "react";

interface TestimonialProps {
	text: string;
	name: string;
	position: string;
	imageUrl: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ text, name, position, imageUrl }) => {
	return (
		<div className="mb-2">
			<p className="text-gray-700 mb-4">{text}</p>
			<div className="flex items-center">
				<img src={imageUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
				<div>
					<p className="font-semibold text-sm text-black">{name}</p>
					<p className="text-xs text-gray-500">{position}</p>
				</div>
			</div>
		</div>
	);
};
