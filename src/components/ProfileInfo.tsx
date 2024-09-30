import React from "react";
import ProfileImage from "../assets/Contact.png";

const ProfileInfo: React.FC = () => {
	return (
		<div className="w-full md:w-2/5 bg-[#F4F7FA] px-16 py-6 flex flex-col gap-10">
			<img src={ProfileImage} alt="Profile" className="w-3/5 rounded-full" />
			<div className="text-lg font-medium">
				<h2 className="font-light mb-2 text-sm">Contact Details</h2>
				<p>ayush.barnwal@brightscout.com</p>
				<p>+91 8651447521</p>
			</div>
			<div className="text-lg font-medium">
				<h2 className="font-light mb-2 text-sm">Social</h2>
				<ul className="space-y-2">
					{["Linkedin", "Instagram", "Twitter", "Webflow", "Figma"].map((platform) => (
						<li key={platform}>
							<a href={`#${platform.toLowerCase()}`} className="text-black hover:underline transition-all duration-300">
								{platform}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProfileInfo;
