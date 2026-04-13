import properties from "@/data/properties";
import Image from "next/image";

export function generateStaticParams() {
  return properties.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const property = properties.find((p) => p.id === id);

  return {
    title: property?.name || "Property",
    description: property?.description || "",
  };
}

export default async function PropertyDetail({ params }) {
  const { id } = await params;

  const property = properties.find((p) => p.id === id);

  if (!property) return <h2>Property Not Found</h2>;

  return (
    <main className="p-5">

      <h1 className="text-2xl font-medium font-serif flex items-center gap-3 flex-wrap">
        {property.name}

        <span className="text-xs font-medium text-white px-3 py-1 rounded-full "
          style={{ background: "green" }}>
          20% OFF
        </span>
      </h1>

      <div className="flex items-center gap-2 mt-2">
        <div className="flex">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Image
                key={i}
                src={i < Math.floor(property.rating) ? "/starIconFilled.svg" : "/starIconOutlined.svg"}
                alt="star"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            ))}
        </div>
        <span className="text-sm text-gray-500">
          {property.reviews}+ reviews
        </span>
      </div>
      <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {property.location}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 h-[450px]">


        <div className="md:col-span-2 relative rounded-xl overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            priority
              unoptimized
            className="object-cover"
          />
        </div>


        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {property.images.slice(1, 5).map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={property.name}
                fill
                 priority
                  unoptimized
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>






      <div className="flex items-center justify-between mt-4">

        <p className="text-lg text-gray-700">
          {property.description}
        </p>


        <p className="text-2xl font-semibold text-gray-800">
          Rs {property.price} / <span className="text-lg text-gray-600">{property.per}</span>
        </p>
      </div>
 <p className="text-lg text-gray-700">
         Rooms: {property.rooms}
        </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {property.amenities.map((a, i) => (
          <span
            key={i}
            className=" text-green-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full text-base "
          >
            {a}
          </span>
        ))}
      </div>

    </main>
  );
}