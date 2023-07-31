import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="layout md:px-[50px] p-[20px] md:py-[30px] flex md:flex-row flex-col md:gap-[30px] gap-[10px] md:h-[500px]">
      <div className="left_banner md:w-[70%] w-full">
        <Slider {...settings}>
          <div className="slider relative">
            <Image
              className="w-full rounded-xl md:h-[440px] md:object-cover"
              src="https://i.ibb.co/0f84HsK/view-neon-illuminated-gaming-desk-setup-with-keyboard.jpg"
              alt="banner"
              height={440}
              width={1000}
            />
            <div className="h-full w-full rounded-xl absolute top-0 bottom-0 md:pt-[30%] pt-[10%] pl-[5%] ">
              <h4 className="capitalize text-sm leading-[24px] tracking-[.3px] mb-[6px] text-[#38b5fe] ">
                A trusted online platform
              </h4>
              <h4 className="text-3xl md:leading-[34px] leading-[35px] tracking-[.2px] uppercase font-medium text-white mb-4">
                All in one place
              </h4>
              <Link
                href="/pcbuilder"
                className="rounded-md btn px-5 py-1 text-sm cursor-pointer text-black bg-[#eaedee] uppercase"
              >
                Build Now
              </Link>
            </div>
          </div>
          <div className="slider relative">
            <Image
              className="w-full rounded-xl md:h-[440px] md:object-cover"
              src="https://i.ibb.co/NTQJk6b/circuit-cyberspace-closeup-with-neon-lights.jpg"
              alt="banner"
              height={440}
              width={1000}
            />
          </div>
          <div className="slider relative">
            <Image
              className="w-full rounded-xl md:h-[440px] md:object-cover"
              src="https://i.ibb.co/k3QQcZQ/12892992-5084214.jpg"
              alt="banner"
              height={440}
              width={1000}
            />
          </div>
        </Slider>
      </div>
      <div className="md:gap-[30px] gap-[10px] md:w-[30%] w-full flex flex-col">
        <div className="w-full relative">
          <Image
            className="w-full md:h-[200px] h-[160px] rounded-xl object-fill"
            src="https://i.ibb.co/RpTSj1M/gradient-view-illuminated-neon-gaming-desk-setup-with-keyboard.jpg"
            alt="banner"
            height={160}
            width={1000}
          />
        </div>
        <div className="w-full relative">
          <Image
            className="w-full md:h-[200px] h-[160px] rounded-xl object-fill"
            src="https://i.ibb.co/ByN2Cn8/music-arrangement-with-black-headphones.jpg"
            alt="banner"
            height={160}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
