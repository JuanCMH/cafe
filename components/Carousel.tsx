import CarouselItem from "./CarouselItem";

interface CarouselProps {
	items: {
		imageSrc: string;
		title: string;
		description: string;
	}[];
}

export default function Carousel({ items }: CarouselProps) {
	return (
		<div className="mt-2 w-full">
			{items[0] && (
				<CarouselItem
					imageSrc={items[0].imageSrc}
					title={items[0].title}
					description={items[0].description}
				/>
			)}
			<div className="mt-4 flex w-full flex-row items-center justify-center gap-2">
				{items.map((_, index) => (
					<div
						key={index}
						className={`h-3 w-3 rounded-full ${
							index === 0 ? "bg-dark-brown" : "bg-cream"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
