export default function Header() {
  return (
    <div className="bg-(--gray-background) border-gray-200/30 shadow-(--pop-shadow) flex flex-row justify-between rounded-md border-1">
      <div className="text-5xl font-imbue-light p-3">Mindfull</div>
      <div className="flex flex-row gap-2 font-figtree uppercase pr-4">
        <a
          href="/"
          className="bg-(--gray-background) border-gray-200/30 border-1 rounded-md shadow-(--pop-shadow) p-2 my-4 overflow-hidden"
        >
          Dashboard
        </a>
        <a
          href="/"
          className="bg-(--gray-background) border-gray-200/30 border-1 rounded-md shadow-(--pop-shadow) p-2 my-4 overflow-hidden"
        >
          Sticker Book
        </a>
        <a
          href="/"
          className="bg-(--gray-background) border-gray-200/30 border-1 rounded-md shadow-(--pop-shadow) p-2 my-4 overflow-hidden"
        >
          Stats & Settings
        </a>
      </div>
    </div>
  );
}
