export default function Header() {
  return (
    <div className="shadow-lg flex flex-row justify-between rounded-md border-gray-400 border-1 m-5">
      <div className="text-5xl font-imbue-light p-3">Mindfull</div>
      <div className="flex flex-row gap-2 font-figtree uppercase pr-4">
        <a
          href="/"
          className="rounded-md shadow-(--pop-shadow) p-2 my-4 overflow-hidden"
        >
          Dashboard
        </a>
        <a
          href="/"
          className="rounded-md shadow-(--pop-shadow) p-2 my-4 overflow-hidden"
        >
          Sticker Book
        </a>
        <a
          href="/"
          className="rounded-md shadow-(--pop-shadow) p-2 my-4 overflow-hidden"
        >
          Stats & Settings
        </a>
      </div>
    </div>
  );
}
