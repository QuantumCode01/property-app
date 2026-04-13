import properties from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  const search = searchParams?.search || "";

  return {
    title: search
      ? `Properties for ${search}`
      : "Property Listings",
    description: "Find best properties for rent and sale",
  };
}

export default async function Home({ searchParams }) {
  const params = await searchParams; 

  const search = params?.search || "";
  const page = parseInt(params?.page || "1", 10);

  const itemsPerPage = 8;


  const filtered = properties.filter((p) => {
    const query = search.toLowerCase();

    return (
      p.location.toLowerCase().includes(query) ||
      p.name.toLowerCase().includes(query) ||
      p.amenities.some((a) => a.toLowerCase().includes(query)) ||
      p.price.toString().includes(query) ||
      p.rating.toString().includes(query)
    );
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );


  return (
    <main className="p-5">


      <form method="GET" className="relative w-full max-w-xl mt-2 mb-5 m-auto">

        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search by location..."
          className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
        />
      </form>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.length > 0 ? (
          paginated.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No properties found
          </p>
        )}
      </div>

    
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNum = i + 1;

          return (
            <Link
              key={pageNum}
              href={`/?search=${encodeURIComponent(search)}&page=${pageNum}`}
              className={`px-3 py-1 border rounded ${
                Number(page) === pageNum ? "bg-black text-white" : ""
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

    </main>
  );
}