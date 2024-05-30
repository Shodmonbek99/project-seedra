let ourProductCategory = [
  {
    name: "All",
    img: "/Frame 16.svg",
  },
  {
    name: "BUNDLES",
    img: "/Frame 15.svg",
  },
  {
    name: "HERBS",
    img: "/Frame 14.svg",
  },
  {
    name: "VEGETABLES",
    img: "/Frame 13.svg",
  },
  {
    name: "FRUITS",
    img: "/Frame 12.svg",
  },
  {
    name: "SUPPLIES",
    img: "/frame 11.svg",
  },
  {
    name: "FLOWERS",
    img: "/frame10.svg",
  },
];

function ProductList() {
  return (
    <div className=" containe">
      <div className="flex justify-between  m-5 items-center">
        <h4 className="font-bold text-3xl">Our products.</h4>
        <h6 className="text-green-500 border p-3 px-5 border-opacity-50 roun">
          View all (12)
        </h6>
      </div>
      <ul className="flex  justify-between items-center ">
        {ourProductCategory.map((category) => {
          return (
            <li className="flex gap-2 items-center justify-center border p-5 px-10  h-16 rounded-md my-5 cursor-pointer">
              <img src={category.img} alt="" />
              <p>{category.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
