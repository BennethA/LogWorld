import React from 'react'
import { BsStarFill } from 'react-icons/bs';

const packages = () => {
  const packages = [
    {
      img: "src/assets/pack1.jpg",
      title: "Villa Mabela",
      subtitle: "3 Days 4 Nights",
      rate: "4.2",
      discount: "4,000",
      price: "3,330",
    },
    {
      img: "src/assets/pack2.jpg",
      title: "Maroc Beach",
      subtitle: "3 Days 4 Nights",
      rate: "4.7",
      discount: "4,300",
      price: "3,230",
    },
    {
      img: "src/assets/pack3.jpg",
      title: "Villa Menoca",
      subtitle: "3 Days 4 Nights",
      rate: "4.9",
      discount: "4,600",
      price: "3,030",
    },
    {
      img: "src/assets/pack4.jpg",
      title: "Santa Mabela",
      subtitle: "3 Days 4 Nights",
      rate: "4.1",
      discount: "5,000",
      price: "4,330",
    },
    {
      img: "src/assets/pack5.jpg",
      title: "Madrid Gucho",
      subtitle: "3 Days 4 Nights",
      rate: "4.2",
      discount: "3,000",
      price: "2,330",
    },
    {
      img: "src/assets/pack6.jpg",
      title: "Spaaane Villa",
      subtitle: "3 Days 4 Nights",
      rate: "4.5",
      discount: "5,000",
      price: "4,330",
    },

    {
      img: "src/assets/pack7.jpg",
      title: "Sane Wealla",
      subtitle: "3 Days 4 Nights",
      rate: "4.5",
      discount: "5,500",
      price: "4,000",
    },
  ];
  return (
    <div
      id="packages"
      className="flex items-center justify-center p-3 sm:px-[100px] flex-col gap-5  pt-[70px]"
    >
      <div className=" w-[70%] text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-center">
          All Inclusive <span className="text-[#87b2f1] italic">Packages</span>
        </h2>
        <p className=" text-gray-500 font-semibold text-sm leading-4">
          Explore all inclusive packages that turn your travel into a seemless
          adventure. Enjoy great deals on city tours, desert safaris, water
          sports, amusement parks and wellness retreats-all in one package.
        </p>
      </div>
      <div className="flex overflow-x-scroll gap-6 w-full">
        {packages.map((item, index) => (
          <div
            key={index}
            className="w-[200px] overflow-hidden flex-shrink-0 gap-5 p-2 shadow-md shadow-neutral-700 flex flex-col"
          >
            <div className="flex items-center object-cover h-[150px]">
              <img
                src={item.img}
                alt={item.img}
                className="w-full object-cover h-full rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between font-bold">
                <p>{item.title}</p>
                <p className="flex items-center gap-1">
                  <BsStarFill className="text-[#87b2f1]" /> {item.rate}
                </p>
              </div>
              <p className="text-gray-500 font-semibold">{item.subtitle}</p>
              <div className="flex">
                <s className="font-semibold text-gray-500 mr-2">
                  ${item.discount}
                </s>
                <p className="font-extrabold ">
                  ${item.price}
                  <span className="font-normal text-sm text-gray-500">
                    per person
                  </span>
                </p>
              </div>
            </div>
            <button className="bg-black text-[#87b2f1] w-full py-2 rounded hover:opacity-80 font-bold cursor-pointer">
              See Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default packages