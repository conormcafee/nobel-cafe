import { Layout } from "@components/layout";

const meta = {
  title: "Breakfast & Lunch Menu",
  description:
    "Delicious breakfast & lunch serverd Monday - Saturday in Nobel Cafe, Ballymena",
};

const images = [
  {
    src: "/images/menu/april-2025/breakfast-front.jpeg",
    alt: "Breakfast Menu (Front)",
  },
  {
    src: "/images/menu/april-2025/breakfast-back.jpeg",
    alt: "Breakfast Menu (Back)",
  },
  {
    src: "/images/menu/april-2025/lunch-front.jpeg",
    alt: "Lunch Menu (Front)",
  },
  {
    src: "/images/menu/april-2025/lunch-back.jpeg",
    alt: "Lunch Menu (Back)",
  },
]

export default function Menu() {
  return (
    <Layout meta={meta}>
      <div className="wrapper pt-16 md:pt-24 space-y-4">
        <h1 className="text-4xl md:text-5xl text-left max-w-4xl font-bold leading-snug md:leading-snug">
          Join us for some delicious{" "}
          <span className="text-green-500">
            <i>breakfast or lunch</i>
          </span>
        </h1>
      </div>


      <div className="wrapper py-16 md:py-24 flex flex-wrap">

        {images.map((image, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4 overflow-hidden">
            <a href={image.src} target="_blank" rel="noopener noreferrer" className="block pointer border-2 border-green-500 rounded-lg shadow-md overflow-hidden hover:transform hover:scale-105 transition duration-300">
              <img
                className="w-full h-[200px] object-top object-cover"
                src={image.src}
                alt={image.alt}
              />
            </a>
            <p className="mt-4">{image.alt}</p>
          </div>
        ))}


      </div>
    </Layout>
  );
}
