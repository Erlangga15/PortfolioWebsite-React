import React from "react";

interface WorkItemProps {
	title: string;
	description: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description }) => {
	return (
		<div className="flex justify-between items-center py-6 border-b border-gray-200">
			<div>
				<h3 className="text-xl md:text-5xl font-light mb-1 text-black">{title}</h3>
				<p className="text-sm text-gray-600">{description}</p>
			</div>
			<button className="rounded-full w-14 h-14 flex items-center justify-center border border-gray-300 hover:bg-[#0B0C0E] hover:text-white transition-colors duration-200">
				<svg
					className="inline-block w-6 h-6 ml-1"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M7 17L17 7" />
					<path d="M7 7h10v10" />
				</svg>
			</button>
		</div>
	);
};

export default WorkItem;
