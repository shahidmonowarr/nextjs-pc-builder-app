import Image from "next/image";
import Link from "next/link";

const FeaturedCategory = ({ name, image, link }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-3">
      <Link
        href={link}
        className="c-card block bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden"
      >
        <div className="relative pb-48 overflow-hidden">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={image}
            height={200}
            width={200}
            alt=""
          />
        </div>
        <div className="p-4 flex items-center bg-base-200">
          <h2 className="mt-2 mb-2 text-base uppercase font-bold">{name}</h2>
          <button
            href=""
            className="rounded-md bg-black text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-auto px-3 py-2 h-auto flex ml-auto transition duration-300"
          >
            Visit Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCategory;
