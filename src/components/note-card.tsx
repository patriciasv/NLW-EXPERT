export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi
        ratione odio quaerat voluptas voluptate quasi magni? Officiis ex impedit
        laudantium modi nesciunt vel architecto eos neque, culpa odio maxime.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-back/0 pointer-events-none"></div>
    </button>
  );
}
