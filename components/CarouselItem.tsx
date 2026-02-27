import Image from "next/image";

interface CarouselItemProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function CarouselItem({ imageSrc, title, description }: CarouselItemProps) {
  return (
    <article className="relative w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={425}
        height={300}
        className="block h-full w-full object-cover"
      />
      <div className="absolute bottom-0 w-full rounded-b-2xl bg-overlay px-4 py-2 text-cream">
        <h3 className="m-0 max-w-36.75 text-lg font-medium">{title}</h3>
        <p className="m-0 max-w-64 text-sm font-light">{description}</p>
      </div>
    </article>
  );
}
