export default function Loading() {
  return (
    <div className="flex w-full items-center justify-center">
      <h1 className="text-xl px-5 font-semibold ">Loading product</h1>
      <div
        className={`
          w-8 h-8
          border-4
          border-blue-600
          border-t-transparent
          rounded-full
          animate-spin
        `}
      ></div>
    </div>
  );
}
