import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/UI/Product";

const CPU = ({ products }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap mx-3">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CPU;

CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products?category=CPU");
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
