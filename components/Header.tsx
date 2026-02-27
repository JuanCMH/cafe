export default function Header() {
  return (
    <header className="mx-auto flex max-w-106.25 flex-row items-center justify-between bg-brown px-4 py-1">
      <h1 className="text-[25px] font-semibold leading-normal text-cream">
        COFFEE APP
      </h1>
      <div className="flex flex-row items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-cream" />
        <div className="h-2 w-2 rounded-full bg-cream" />
        <div className="h-2 w-2 rounded-full bg-cream" />
      </div>
    </header>
  );
}
