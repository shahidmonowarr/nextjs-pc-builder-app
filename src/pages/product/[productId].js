/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";

const ProductDetailPage = ({ product }) => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap border-b-2 border-gray-300 pb-3">
          <Image
            alt="product detail"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product?.image}
            height={500}
            width={500}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.name}
            </h1>
            <div className="flex mb-2">
              <span className="flex items-center">
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
                <span className="text-gray-600 ml-3">
                  {product.rating} Rating (AVG)
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {product?.status}
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-3 items-center pb-2 border-b-2 border-gray-200 mb-3">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 fill-current ${
                      index + 1 <= Math.round(product.individual_rating)
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                  >
                    <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                  </svg>
                ))}
                <span className="mr-3">
                  {product?.individual_rating} (Individual)
                </span>
              </div>
              <span className="flex ml-3 pl-3 py-3 border-l-2 border-gray-300"></span>
              <div className="flex ml-6 items-center">
                <span className="title-font font-medium text-xl text-gray-900">
                  ${product?.price}
                </span>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-base text-gray-900">
                Brand: {product?.key_features?.Brand}
              </span>
              <span className="flex ml-3 pl-3 py-3 border-l-2 border-gray-300"></span>
              <span className="title-font font-medium text-base text-gray-900">
                Model: {product?.key_features?.Model}
              </span>
              {product?.key_features?.Port && (
                <span className="title-font font-medium text-base text-gray-900">
                  <span className="flex ml-3 pl-3 py-3 border-l-2 border-gray-300"></span>
                  Type: {product?.key_features?.Port}{" "}
                </span>
              )}
            </div>
            <div className="flex">
              {product?.key_features?.Specification && (
                <span className="title-font font-medium text-base text-gray-900">
                  Specification: {product?.key_features?.Specification}
                </span>
              )}
              {product?.key_features?.Type && (
                <span className="title-font font-medium text-base text-gray-900">
                  <span className="flex ml-3 pl-3 py-3 border-l-2 border-gray-300"></span>
                  Type: {product?.key_features?.Type}{" "}
                </span>
              )}
              {product?.key_features?.Resolution && (
                <span className="title-font font-medium text-base text-gray-900">
                  <span className="flex ml-3 pl-3 py-3 border-l-2 border-gray-300"></span>
                  Type: {product?.key_features?.Resolution}{" "}
                </span>
              )}
              {product?.key_features?.Voltage && (
                <span className="title-font font-medium text-base text-gray-900">
                  <span className="flex ml-3 pl-3 py-3 border-l-2 border-gray-300"></span>
                  Type: {product?.key_features?.Voltage}{" "}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 mx-auto flex flex-wrap ">
          <h4 className="text-2xl font-bold mb-4">Reviews</h4>
          {product?.reviews?.map((review) => (
            <div key={review._id} className="flex gap-5 mb-4 border-b">
              <div className="w-1/12">
                <img
                  className="rounded-full pb-1"
                  src="https://user-images.githubusercontent.com/522079/90506845-e8420580-e122-11ea-82ca-31087fc8486c.png"
                  alt=""
                />
              </div>
              <div className="w-11/12 border-l-2 px-2">
                <h5 className="text-lg font-bold">{review?.comment}</h5>
                <p className="italic text-gray-400">- by {review?.user}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  const products = data?.data;
  const paths = products?.map((product) => ({
    params: { productId: product._id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  const product = data;
  //   console.log(product);
  return {
    props: {
      product,
    },
  };
};
