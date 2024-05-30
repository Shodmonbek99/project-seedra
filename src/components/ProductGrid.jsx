let productGrid = [
  {
    img: "/image 2.png",
    title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    price: "",
  },
  {
    img: "/image 3.png",

    title:
      "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
    price: "",
  },
  {
    img: "/image 4.png",

    title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
    price: "",
  },
  {
    img: "/image 5.png",

    title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    price: "",
  },
  {
    img: "/image 6.png",

    title:
      "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
    price: "15.56",
  },
  {
    img: "/image 7.png",
    title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
    price: "",
  },
];

function ProductGrid() {
  return (
    <ul className="grid grid-cols-1 gap-y-5 ml-7 containerH items-center justify-between w-full md:grid-cols-2 lg:grid-cols-3">
      {productGrid.map((product) => {
        return (
          <li className="border-opacity-80 border rounded-lg h-full w-[370px] p-5 flex flex-col items-start justify-center gap-10 cursor-pointer">
            <figure className="flex justify-center items-center relative size-72">
              <img
                className=" object-cover h-7l text-center "
                src={product.img}
                alt=""
              />
              <span className="border rounded-full absolute top-0 right-0 size-10 text-center flex items-center justify-center">
                {product.price ? "💖" : "🤍"}
              </span>
            </figure>
            <div>
              <p>⭐⭐⭐⭐⭐ (123)</p>
              <p className="font-bold text mb-5">{product.title}</p>
              <div className="flex justify-between items-center">
                {" "}
                <p className="font-bold text-3xl flex items-center gap-5    ">
                  {product.price && <span className="text-lg ">🔥</span>}
                  $12.56{" "}
                  {product.price && (
                    <span className="text-lg opacity-40 line-through">
                      {product.price}
                    </span>
                  )}
                </p>
                <button className="btn bg-transparent border-opacity-50 ">
                  🛒
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductGrid;
