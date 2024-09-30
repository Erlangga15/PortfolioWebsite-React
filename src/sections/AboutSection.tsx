import React from "react";

const AboutSection: React.FC = () => {
	return (
		<section className="bg-[#F4F7FA] py-28 px-4 md:px-20">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/3">
					<h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">About</h2>
				</div>
				<div className="md:w-2/3">
					<p className="text-base md:text-lg text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
						in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
