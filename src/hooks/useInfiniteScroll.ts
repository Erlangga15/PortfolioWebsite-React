import { useEffect, useRef, RefObject } from "react";

interface UseInfiniteScrollOptions {
	direction: "left" | "right";
	speed?: number;
}

const useInfiniteScroll = <T extends HTMLElement>({ direction, speed = 1 }: UseInfiniteScrollOptions): RefObject<T> => {
	const containerRef = useRef<T>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const animate = () => {
			if (direction === "left") {
				if (container.scrollLeft >= container.scrollWidth / 2) {
					container.scrollLeft = 0;
				} else {
					container.scrollLeft += speed;
				}
			} else {
				if (container.scrollLeft <= 0) {
					container.scrollLeft = container.scrollWidth / 2;
				} else {
					container.scrollLeft -= speed;
				}
			}
			requestAnimationFrame(animate);
		};

		const animation = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animation);
	}, [direction, speed]);

	return containerRef;
};

export default useInfiniteScroll;
