import React from "react";

function HeroProduct() {
  return (
    <>
      <div className="bg-[#EAF1EB] w-full h-[455px] rounded-3xl my-10 flex justify-center gap-5 items-center">
        <div className="flex items-start  flex-col justify-center w-[675px] gap-7 ">
          <h1 className=" card-title text-5xl font-bold   ">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>
          <p className="text-xl opacity-80">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>

          <p className="text-4xl font-bold flex items-center gap-5">
            {" "}
            🔥 $12.56{" "}
            <span className="text-xl de line-through opacity-50">$15.56</span>
          </p>
          <div className="flex gap-2">
            <button className="btn btn-ghost  px-5  text-white bg-green-700 border-none">
              Add to card
            </button>
            <button className="btn btn-ghost bg-white text-green-500">
              Discover
            </button>
          </div>
        </div>
        <figure>
          <img
            height=""
            src="/image 2.png"
            className=" size-96 object-contain "
            alt=""
          />
        </figure>
      </div>
      <div className=" bg-[#FFF5CA] w-full h-24 flex flex-col items-center justify-center gap-2 rounded-xl">
        <h4 className="font-bold text-2xl">We sell seeds </h4>
        <p className=" opacity-60 font-['Lexend']">
          that always sprout and gardening supplies which never break
        </p>
      </div>
    </>
  );
}

export default HeroProduct;
