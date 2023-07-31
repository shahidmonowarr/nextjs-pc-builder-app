import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Product from "@/components/UI/Product";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const HomePage = ({ products }) => {
  // console.log(products);
  const featuredProducts = shuffleArray(products?.slice(0, 6));
  const allCategories = products?.map((product) => product.category) || [];
  const uniqueCategories = [...new Set(allCategories)];

  // Step 2: Create a list of featured categories (limit to 6 unique categories)
  const featuredCategories = uniqueCategories.slice(0, 7);
  console.log(featuredCategories);
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl uppercase text-center py-4">
          Featured Products
        </h1>
        <div className="flex flex-wrap mx-3">
          {featuredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <h1 className="font-bold text-2xl uppercase text-center py-4">
          Featured Categories
        </h1>
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
                  link={categoryData.link}
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
  const res = await fetch(
    "https://pc-builder-server-black.vercel.app/products"
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      products: data?.data,
    },
    revalidate: 10,
  };
};
