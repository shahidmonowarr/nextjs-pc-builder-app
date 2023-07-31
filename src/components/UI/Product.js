import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <Link
        href={`/product/${product?._id}`}
        className="c-card block shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full bg-base-200"
      >
        <div className="relative pb-48 overflow-hidden">
          <Image
            className="absolute h-full w-full"
            src={product?.image}
            height={200}
            width={200}
            alt=""
          />
        </div>
        <div className="p-3 text-xs text-gray-700 flex justify-between items-center">
          <span className="text-left pr-2 badge badge-secondary">
            {product?.category}
          </span>
          <span className="text-right badge badge-sm badge-success">
            {product?.status}
          </span>
        </div>
        <div className="p-4 border-t border-b">
          <h2 className="mb-2 text-lg uppercase font-bold">{product?.name}</h2>
          <div className="mt-2 flex items-center">
            <span className="font-bold">{product?.price}</span>&nbsp;
            <span className="text-md font-semibold">$</span>
          </div>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 fill-current ${
                index + 1 <= Math.round(product.rating)
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`}
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
            </svg>
          ))}
          <span className="ml-1">{product?.rating}</span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
