import React from "react";
import WorkItem from "../components/WorkItem";

const WorkSection: React.FC = () => {
	return (
		<section className="bg-[#F4F7FA] py-20 px-4 md:px-20">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/3">
					<h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">Recent Work</h2>
				</div>
				<div className="md:w-2/3">
					<div>
						<WorkItem title="Decodable.co" description="Brand Design - Webflow Development - Web Design" />
						<WorkItem title="Gofirefly.io" description="Brand Design - Webflow Development - Web Design" />
						<WorkItem title="Blinkops.com" description="Brand Design - Webflow Development - Web Design" />
						<WorkItem title="Withkanvas.com" description="Brand Design - Webflow Development - Web Design" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkSection;
