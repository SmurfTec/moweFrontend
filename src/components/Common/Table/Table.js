import "./Table.css";
export default function Table({ heading, body }) {
  return (
    <div
      className={` align-middle inline-block min-w-full  shadow overflow-hidden border-b border-gray-200 sm:rounded-lg`}
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>{heading}</tr>
        </thead>
        <tbody className="bg-white">{body}</tbody>
      </table>
    </div>
  );
}
