import RootLayout from "@/components/Layouts/RootLayout";
import PCComponent from "@/components/UI/PCComponent";
import Head from "next/head";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { BsCpu, BsMemory, BsMotherboard, BsMouse2 } from "react-icons/bs";
import { LiaCarBatterySolid } from "react-icons/lia";
import { MdOutlineSdStorage } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { useSelector } from "react-redux";

const categories = [
  { name: "CPU", value: "CPU", icon: <BsCpu /> },
  { name: "Motherboard", value: "Motherboard", icon: <BsMotherboard /> },
  { name: "RAM", value: "RAM", icon: <BsMemory /> },
  {
    name: "Power Supply Unit",
    value: "Power Supply Unit",
    icon: <LiaCarBatterySolid />,
  },
  {
    name: "Storage Device",
    value: "Storage Device",
    icon: <MdOutlineSdStorage />,
  },
  { name: "Monitor", value: "Monitor", icon: <TbHeartRateMonitor /> },
  { name: "Others", value: "Others", icon: <BsMouse2 /> },
];

const PCBuilderPage = () => {
  const { selectedItems } = useSelector((state) => state.selectComponent);
  const router = useRouter();

  let totalPrice = 0;
  if (selectedItems?.length)
    totalPrice = selectedItems.reduce((prev, item) => prev + item.price, 0);

  const onCompleteSubmit = () => {
    toast.success("Your PC Build has been completed. Congratulations 🎉🎉🎉");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>PC Builder</title>
      </Head>
      <div className="min-h-[60vh] px-2 my-8 ">
        <h1 className="font-bold text-2xl uppercase text-center py-4">
          Build Your PC Here
        </h1>
        <div className="border-2 border-gray-500 md:w-2/4 mx-auto">
          <div className="p-5">
            {categories.map((category) => (
              <PCComponent key={category?.name} category={category} />
            ))}
            <div className="mt-4 flex justify-between items-center border-t-2 border-gray-500 mx-5">
              <div className="mt-4">
                <button
                  onClick={onCompleteSubmit}
                  disabled={selectedItems?.length <= 2}
                  className="btn  btn-outline btn-success"
                >
                  Complete Build
                </button>
                {selectedItems?.length <= 2 && (
                  <p className="text-error text-sm">
                    Please select at least 3 components
                  </p>
                )}
              </div>
              <div>
                <p className="font-semibold text-xl">
                  Total Price: $ {totalPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
