import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Product from "@/components/UI/Product";

const HomePage = ({ products }) => {
  // console.log(products);
  const featuredProducts = products?.slice(0, 6);
  const allCategories = products?.map((product) => product.category) || [];
  const uniqueCategories = [...new Set(allCategories)];

  // Step 2: Create a list of featured categories (limit to 6 unique categories)
  const featuredCategories = uniqueCategories.slice(0, 6);
  console.log(featuredCategories);
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
        <div className="flex flex-wrap mx-3">
          {featuredCategories.map((category) => {
            const categoryData = products.find(
              (product) => product.category === category
            );
            if (categoryData) {
              return (
                <FeaturedCategory
                  key={categoryData.category}
                  name={categoryData.category}
                  image={categoryData.image}
                />
              );
            }

            return null;
          })}
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
