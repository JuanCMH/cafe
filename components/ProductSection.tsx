import ProductCard from "./ProductCard";

interface Product {
	imageSrc: string;
	name: string;
	price: string;
	relevantInfo: string;
}

interface ProductSectionProps {
	title: string;
	description?: string;
	products: Product[];
}

export default function ProductSection({
	title,
	description,
	products,
}: ProductSectionProps) {
	return (
		<section>
			<div>
				<h3 className="m-0 text-[26px] font-semibold text-dark-brown">
					{title}
				</h3>
				{description && (
					<p className="m-0 text-base font-light italic text-dark-brown">
						{description}
					</p>
				)}
			</div>
			<div className="mt-4 flex flex-row gap-6 overflow-x-auto p-4">
				{products.map((product, index) => (
					<ProductCard key={index} {...product} />
				))}
			</div>
		</section>
	);
}
