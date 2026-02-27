import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 mx-auto flex h-17.5 w-full max-w-106.25 items-center justify-center rounded-t-2.5 bg-brown">
      <nav className="flex flex-row items-end gap-8">
        <Image src="/icons/feather-coffee.svg" alt="coffee icon" width={24} height={24} />
        <Image src="/icons/akar-home.svg" alt="home icon" width={24} height={24} />
        <Image src="/icons/shopping-bag.svg" alt="bag icon" width={24} height={24} />
      </nav>
    </footer>
  );
}
