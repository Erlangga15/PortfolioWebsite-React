import React from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

interface ProductShowcaseProps {
	images: string[];
	direction: "left" | "right";
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ images, direction }) => {
	const containerRef = useInfiniteScroll<HTMLDivElement>({ direction });

	return (
		<div ref={containerRef} className="relative py-10 px-4 overflow-hidden">
			<div className="flex space-x-8">
				{[...images, ...images].map((src, index) => (
					<div
						key={index}
						className="relative flex-shrink-0 w-[30%] aspect-video m-2 rounded-lg bg-[#C7D0D9] overflow-hidden group"
						style={{ boxShadow: "0px 41px 18px 0px rgba(0,0,0,0.2)" }}
					>
						<div className="absolute inset-8">
							<img src={src} alt={`Portfolio ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
						</div>
						<div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<button className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300 flex items-center">
								Visit the website
								<svg
									className="inline-block w-4 h-4 ml-2"
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
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductShowcase;
