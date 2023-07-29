import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/UI/Product";

const HomePage = ({ products }) => {
  console.log(products);
  const featuredProducts = products?.slice(0, 6);
  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-2">Featured Products</h1>
        <div className="flex flex-wrap mx-3">
          {featuredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      products: data?.data,
    },
    revalidate: 10,
  };
};
