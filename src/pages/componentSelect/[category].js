import RootLayout from "@/components/Layouts/RootLayout";
import SelectProduct from "@/components/UI/SelectProduct";
import Head from "next/head";

const CategoryProduct = ({ products }) => {
  return (
    <>
      <Head>
        <title>Select Component - {products[0]?.category}</title>
      </Head>
      <div className="py-5 px-2 mb-6">
        <h2 className="text-center text-3xl font-semibold mt-6">
          Category - {products[0]?.category}
        </h2>
        <div className="flex flex-wrap gap-5 justify-center mt-8">
          {products?.map((product) => (
            <SelectProduct key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;

CategoryProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-black.vercel.app/products?category=${params?.category}`
  );
  const data = await res.json();
  return {
    props: {
      products: data?.data,
    },
  };
};
