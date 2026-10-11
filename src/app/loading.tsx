export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 space-y-4">
      <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 tracking-wider uppercase animate-pulse">
        Loading ZeroParadox...
      </p>
    </div>
  );
}
