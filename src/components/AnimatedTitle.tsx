import React from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

interface AnimatedTitleProps {
	texts: string[];
	className?: string;
	spacer?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ texts, className, spacer = " – " }) => {
	const containerRef = useInfiniteScroll<HTMLDivElement>({ direction: "left" });

	const combinedText = texts.join(spacer);

	return (
		<div ref={containerRef} className={`${className} whitespace-nowrap overflow-hidden`} style={{ width: "200%" }}>
			<span>
				{combinedText}
				{spacer}
			</span>
			<span>
				{combinedText}
				{spacer}
			</span>
		</div>
	);
};

export default AnimatedTitle;
