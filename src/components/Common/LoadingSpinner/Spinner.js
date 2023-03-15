import "./Spinner.css";
export const Spinner = ({ width = 12, height = 12 }) => {
  return (
    <div className="Spinner flex justify-center">
      <div
        className={`w-${width} h-${height} border-l-2 border-b-2 border-gray-400 rounded-full animate-spin`}
      />
    </div>
  );
};
