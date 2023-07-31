import Link from "next/link";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

const PCComponent = ({ category }) => {
  const { selectedItems } = useSelector((state) => state.selectComponent);
  const selected = selectedItems?.find(
    (item) => item.category === category.value
  );
  return (
    <div
      key={category.name}
      className="flex items-center gap-5 border-2 rounded-md border-gray-500 m-3 p-3"
    >
      <div className="p-2">
        <div className="text-2xl text-sky-900">{category?.icon}</div>
      </div>
      <div className="flex-grow">
        <p className="text-lg font-semibold -mb-2">{category?.name}</p>
        {selected ? (
          <span className="text-sm">
            {selected.title} - ${selected.price}
          </span>
        ) : (
          <span className="text-xs text-red-400">Not Selected</span>
        )}
      </div>
      <Link
        href={`/componentSelect/${category?.value}`}
        className={`btn btn-sm ${
          selected ? "btn-error" : " btn-outline btn-success"
        }`}
      >
        {selected ? <ImCross /> : "Select"}
      </Link>
    </div>
  );
};

export default PCComponent;
