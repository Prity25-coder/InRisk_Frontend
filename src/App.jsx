import "./App.css";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    description: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 2,
    name: "Earthen Bottle",

    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    description:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 3,
    name: "Nomad Tumbler",
    href: "#",
    description:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
  },
];

function App() {
  return (
    <>
      <div className=" flex justify-center items-center bg-orange-300 py-4">
        Responsive Product Card
      </div>

      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-400 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />

                <h3 className="text-m text-gray-900  font-bold ">
                  {product.name}
                </h3>

                <p className="text-m font-medium text-gray-900 mt-2">
                  {product.description}
                </p>

                <button className=" rounded-lg bg-green-300 px-2 mt-4  hover:bg-green-600">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
