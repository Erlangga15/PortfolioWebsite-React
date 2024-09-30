import React from "react";

interface SocialLinkProps {
	label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ label }) => {
	return (
			<a
				href={`https://${label.toLowerCase()}.com`}
				target="_blank"
				rel="noopener noreferrer"
				className="block text-base text-white hover:text-gray-300 transition-colors duration-200"
			>
				{label}
			</a>
	);
};

export default SocialLink;
