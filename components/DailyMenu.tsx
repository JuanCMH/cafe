import CategoryCard from "./CategoryCard";

interface Category {
	imageSrc: string;
	name: string;
}

interface DailyMenuProps {
	title: string;
	description: string;
	categories: Category[];
}

export default function DailyMenu({
	title,
	description,
	categories,
}: DailyMenuProps) {
	return (
		<section>
			<div>
				<h3 className="m-0 text-[26px] font-semibold text-dark-brown">
					{title}
				</h3>
				<p className="m-0 text-base font-light italic text-dark-brown">
					{description}
				</p>
			</div>
			<div className="mt-4 grid grid-cols-2 gap-4">
				{categories.map((category) => (
					<CategoryCard key={category.name} {...category} />
				))}
			</div>
		</section>
	);
}
