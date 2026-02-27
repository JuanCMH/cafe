import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: string;
  relevantInfo: string;
}

export default function ProductCard({ imageSrc, name, price, relevantInfo }: ProductCardProps) {
  return (
    <article className="relative w-40 shrink-0 text-dark-brown">
      <Image
        src={imageSrc}
        alt={name}
        width={160}
        height={160}
        className="h-40 w-40 object-contain"
      />
      <p className="m-0 text-sm">{name}</p>
      <p className="m-0 text-sm font-semibold">{price}</p>
      <span className="text-[13px] font-light">{relevantInfo}</span>
      <div className="absolute right-2 top-2">
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-dark-brown">
          <div className="absolute h-3 w-0.5 rounded-full bg-white" />
          <div className="absolute h-0.5 w-3 rounded-full bg-white" />
        </div>
      </div>
    </article>
  );
}
