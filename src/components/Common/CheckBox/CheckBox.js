export const CheckBox = ({ isChecked = false, onChange = () => {} }) => {
  return (
    <div className="flex h-6 items-center">
      <input
        id="comments"
        aria-describedby="comments-description"
        name="comments"
        value={isChecked}
        onChange={() => onChange?.()}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
    </div>
  );
};
