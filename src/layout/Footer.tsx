import React from "react";
import FooterImage from "../assets/footer.png";
import SocialLink from "../components/SocialLink";

const Footer: React.FC = () => {
	const socialLinks = ["LinkedIn", "Twitter", "Instagram", "Webflow"];

	return (
		<footer className="bg-black text-white pt-20 pb-6 px-4 md:px-8 lg:px-16">
			<div className="container mx-auto flex flex-col gap-20">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
					<div className="mb-6 md:mb-0">
						<h2 className="text-2xl md:text-5xl font-medium mb-2">Have something in mind?</h2>
						<div className="flex items-center">
							<img src={FooterImage} alt="Profile" className="w-16 h-16 rounded-full mr-2" />
							<p className="text-xl md:text-5xl font-medium">let's build it together.</p>
						</div>
					</div>
					<button className="bg-white text-black px-10 py-5 rounded-full text-base font-semibold hover:bg-opacity-90 transition-colors duration-300">
						Get in touch
					</button>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center">
					<p className="text-sm mb-4 md:mb-0">Build with ❤️ by Brightscout & Ayush</p>
					<div className="flex space-x-10">
						{socialLinks.map((link) => (
							<SocialLink key={link} label={link} />
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export const SimpleFooter: React.FC = () => {
  const socialLinks = ["LinkedIn", "Twitter", "Instagram", "Webflow"];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <p className="text-sm mb-4 md:mb-0">Build with ❤️ by Brightscout & Ayush</p>
      <div className="flex space-x-10">
        {socialLinks.map((link) => (
          <SocialLink key={link} label={link} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
