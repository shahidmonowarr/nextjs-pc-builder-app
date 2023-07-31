import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/UI/Product";

const RAM = ({ products }) => {
  const productCategory = products[0]?.category;
  return (
    <div className="container mx-auto my-10">
      <h1 className="font-bold text-2xl uppercase text-center py-4">
        Specific Products: {productCategory}
      </h1>
      <div className="flex flex-wrap mx-3">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RAM;

RAM.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-black.vercel.app/products?category=RAM"
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
