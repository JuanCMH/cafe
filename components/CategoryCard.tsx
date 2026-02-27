import Image from "next/image";

interface CategoryCardProps {
  imageSrc: string;
  name: string;
}

export default function CategoryCard({ imageSrc, name }: CategoryCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl">
      <Image
        src={imageSrc}
        alt={name}
        width={200}
        height={200}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 flex h-10 w-full items-center justify-center bg-overlay">
        <h2 className="m-0 text-xl font-medium italic text-cream">{name}</h2>
      </div>
    </article>
  );
}
