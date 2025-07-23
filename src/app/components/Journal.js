export default function Journal() {
  return (
    <div className="border-1 rounded-lg bg-(--gray-background) shadow-(--pop-shadow) border-white/40">
      <div className="text-3xl uppercase font-imbue p-2.5 pb-1">Journal</div>
      <div className="focus-within:ring-1 focus-within:ring-gray-400 justify-between flex flex-col shadow-(--inset-shadow) rounded-md p-1 font-figtree m-2 mt-0">
        <textarea
          className="flex focus:outline-none resize-y"
          placeholder="Write your journal entry"
        ></textarea>
        <button className="uppercase shadow-md rounded-md p-1 bg-(--gray-background) overflow-hidden cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
}
