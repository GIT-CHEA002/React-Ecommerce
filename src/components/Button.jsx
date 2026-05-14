export default function Button({ title }) {
  return (
    <button
      type="button"
      className="px-2 py-2 text-white font-medium bg-blue-900 rounded-lg hover:bg-blue-900/90 text-white-50 fade transition-colors duration-300"
    >
      {title}
    </button>
  );
}
